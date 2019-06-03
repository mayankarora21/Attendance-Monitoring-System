import * as actionTypes from '../actions/actionTypes';

const loadFacultyAssignmentListAllReducer=(state={},action)=>{
    switch(action.type){
        case actionTypes.FACULTY_ASSIGNMENT_LIST_ALL:
//            console.log(action)
            return{
                ...state,
                facultyAssignmentListAll:action.payload
            }
        default:return state;
    }
}

export default loadFacultyAssignmentListAllReducer;