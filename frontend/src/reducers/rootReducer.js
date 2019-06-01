import {combineReducers} from 'redux';
import loadAdminReducer from './loadAdminReducer';
import loadAttendanceReducer from './loadAttendanceReducer';
import loginStudentReducer from './loginStudentReducer';
import loadStudentReducer from './loadStudentReducer';

const rootReducer=combineReducers({
    loadAdminReducer,
    loadAttendanceReducer,
    loginStudentReducer,
    loadStudentReducer
});

export default rootReducer;