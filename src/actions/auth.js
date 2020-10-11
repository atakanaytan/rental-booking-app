
import axiosService from 'services/AxiosServices';
import { extractApiErrors } from './index';
const { rentalAxios } = axiosService;

export const registerUser = (registerData) => {
    return rentalAxios
      .post('/users/register', registerData)
          .catch(error => Promise.reject(extractApiErrors(error.response || [])))
}


export const loginUser = (loginData) => {
    return rentalAxios
      .post('/users/login', loginData)
      .then(res => res.data)      
          .catch(error => Promise.reject(extractApiErrors(error.response || [])))
}


export const userAuthenticated = (decodedToken) => {
    return {
        type: 'USER_AUTHENTICATED',
        username: decodedToken.username || ''
    }
}