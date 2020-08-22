
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rentals from './reducers/rentals';
import rental from './reducers/rental';


export function initStore() {
    const reducers = combineReducers({
        rentals,
        rental
    });
    
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;   
     const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
  
    return store;   
}