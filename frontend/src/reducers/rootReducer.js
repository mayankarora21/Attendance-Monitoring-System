import {combineReducers} from 'redux';
import loadAdminReducer from './loadAdminReducer';
import loadAttendanceReducer from './loadAttendanceReducer';
import loginStudentReducer from './loginStudentReducer';
import loadStudentReducer from './loadStudentReducer';
import loadCourseClassReducer from './loadCourseClassReducer';
import loadStudentListReducer from './loadStudentListReducer';

const rootReducer=combineReducers({
    loadAdminReducer,
    loadAttendanceReducer,
    loginStudentReducer,
    loadStudentReducer,
    loadCourseClassReducer,
    loadStudentListReducer
});

export default rootReducer;