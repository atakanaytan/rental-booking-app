import React, { useEffect } from 'react';
import Header from './components/shared/Header';
import Routes from './Routes';

import { BrowserRouter as Router } from "react-router-dom";
import { Provider }  from 'react-redux';
import { AuthProvider, useAuth } from 'providers/AuthProvider';
import { MapProvider } from 'providers/MapProvider';
import { initStore } from './store';

const store = initStore();

const Providers = ({children}) => 
  <Provider store={store}>
      <AuthProvider>
        <MapProvider apiKey=<YourKey>
            {children}
        </MapProvider>
      </AuthProvider>
  </Provider>

const RentalNowApp = () => {
  const authService = useAuth();
      
  useEffect(() => {
    authService.checkAuthState();
  }, [authService])

  return(
    <Router>
      <Header logout={authService.signOut} />
      <Routes />
    </Router>
    )
  }

  const App = () => {

    return (
      <Providers>
        <RentalNowApp />
      </Providers>
    )
}

export default App;
