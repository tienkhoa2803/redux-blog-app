import { combineReducers } from 'redux';
import postReducer from './postReducer';
import userReducer from './userReducer';
import abc from './abc';

export default combineReducers({
    posts: postReducer,
    users: userReducer,
    abc: abc
});