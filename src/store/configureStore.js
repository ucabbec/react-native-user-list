import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import userReducer from './reducers/users';
import infoUpdateMiddleware from './middleware/updateInformation'

const rootReducer = combineReducers({
	users: userReducer
});

const configureStore = () => {
	return createStore(rootReducer,applyMiddleware(thunk, infoUpdateMiddleware));
}

export default configureStore;