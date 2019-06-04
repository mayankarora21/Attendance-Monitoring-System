import * as actionTypes from '../actions/actionTypes';

const loadCourseAssignmentListAllReducer=(state={},action)=>{
    switch(action.type){
        case actionTypes.COURSE_ASSIGNMENT_LIST_ALL:
//            console.log(action)
            return{
                ...state,
                courseAssignmentListAll:action.payload
            }
        default:return state;
    }
}

export default loadCourseAssignmentListAllReducer;