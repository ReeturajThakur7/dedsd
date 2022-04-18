import {combineReducers} from 'redux';
import HomeReducer from '../Home/reducer';
import UsersListReducer from '../UserList/reducer';

const rootReducer = combineReducers({HomeReducer, UsersListReducer});

export default rootReducer;
