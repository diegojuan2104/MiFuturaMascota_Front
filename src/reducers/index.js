import { combineReducers } from 'redux';
import userReducer from './userReducer';
import petReducer from './petReducer';


export default combineReducers({
    user: userReducer,
    pet: petReducer
});
