import {combineReducers} from 'redux';
import loadAdminReducer from './loadAdminReducer';
import loadAttendanceReducer from './loadAttendanceReducer';

const rootReducer=combineReducers({
    loadAdminReducer,
    loadAttendanceReducer
});

export default rootReducer;