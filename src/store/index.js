
import { createStore, combineReducers } from 'redux';
import rentals from './reducers/rentals';
import rental from './reducers/rental';

export function initStore() {
    const reducers = combineReducers({
        rentals,
        rental
    });
    
    const reduxExtendsion = window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__();
    const store = createStore(reducers, reduxExtendsion);
    return store;   
}