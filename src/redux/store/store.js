import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import { thunk } from 'redux-thunk';
import beerReducer from '../reducers/beerReducer';

const rootReducer = combineReducers({
    beer: beerReducer
});

const middleware = applyMiddleware(thunk);

const store = createStore(
    rootReducer,
    middleware
);

export default store;