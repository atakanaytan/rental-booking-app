import React from 'react';
import { loginUser, userAuthenticated } from 'actions';
import { connect } from 'react-redux';  
import jwt from 'jsonwebtoken';
import moment from 'moment';

const { createContext, useContext } = React;

const AuthContext = createContext(null);

const AuthBaseProvider = ({children, dispatch}) => {

    const checkAuthState = () => {
        const token = getToken();
        const decodedToken = decodeToken(token);
        if (decodedToken && moment().isBefore(getExpiration(decodedToken))) {
            dispatch(userAuthenticated(decodedToken))
        }
    }

    const isAuthenticated = () => {
        const decodedToken = decodeToken(getToken());
        return decodedToken && isTokenValid(decodedToken);
    }

    const isTokenValid = (decodedToken) => {
        return decodeToken && moment().isBefore(getExpiration(decodedToken));
    }

    const getExpiration = (decodedToken) => {        
        return moment.unix(decodedToken.exp);
    }

    const getToken = () => {
        return localStorage.getItem('rentalNow_token');
    }

    const decodeToken = token => {
        return jwt.decode(token);
    }

    const signIn = (loginData) => {
        return loginUser(loginData)
            .then(token => {
                localStorage.setItem('rentalNow_token', token);
                const decodedToken = decodeToken(token);
                dispatch(userAuthenticated(decodedToken))
                return token;
            })
    }

    const signOut = () => {
        localStorage.removeItem('rentalNow_token');
        dispatch({type: 'USER_SIGNED_OUT'})
    }

    const authApi = {
        signIn,
        checkAuthState,
        signOut,
        isAuthenticated
    }
    
    return(
        <AuthContext.Provider value={ authApi }>
            {children}
        </AuthContext.Provider>
    )
}

export const AuthProvider =  connect()(AuthBaseProvider);

export const useAuth = () => {
    return useContext(AuthContext);
}

export const withAuth = Component => props => (
        <AuthContext.Consumer>
            {authApi => <Component {...props} auth={authApi} /> }
        </AuthContext.Consumer>
)