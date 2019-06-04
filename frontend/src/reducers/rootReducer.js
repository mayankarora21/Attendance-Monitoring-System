import {combineReducers} from 'redux';
import loadAdminReducer from './loadAdminReducer';
import loadAttendanceReducer from './loadAttendanceReducer';
import loginStudentReducer from './loginStudentReducer';
import loadStudentReducer from './loadStudentReducer';
import loadCourseClassReducer from './loadCourseClassReducer';
import loadStudentListReducer from './loadStudentListReducer';
import loginFacultyReducer from './loginFacultyReducer';
import loadFacultyReducer from './loadFacultyReducer';
import loadDetentionListReducer from './loadDetentionListReducer';
import loadStudentListAllReducer from './loadStudentListAllReducer';
import loadFacultyListAllReducer from './loadFacultyListAllReducer';
import loadClassListAllReducer from './loadClassListAllReducer';
import loadCourseListAllReducer from './loadCourseListAllReducer';
import loadFacultyAssignmentListAllReducer from './loadFacultyAssignmentListAllReducer';
import loadCourseAssignmentListAllReducer from './loadCourseAssignmentListAllReducer';

const rootReducer=combineReducers({
    loadAdminReducer,
    loadAttendanceReducer,
    loginStudentReducer,
    loadStudentReducer,
    loadCourseClassReducer,
    loadStudentListReducer,
    loginFacultyReducer,
    loadFacultyReducer,
    loadDetentionListReducer,
    loadStudentListAllReducer,
    loadFacultyListAllReducer,
    loadClassListAllReducer,
    loadCourseListAllReducer,
    loadFacultyAssignmentListAllReducer,
    loadCourseAssignmentListAllReducer
});

export default rootReducer;