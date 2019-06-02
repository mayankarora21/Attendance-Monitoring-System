import * as actionTypes from '../actions/actionTypes';

const loadStudentListReducer=(state={},action)=>{
//    console.log(action)
    switch(action.type){
        case actionTypes.LOAD_STUDENT_LIST:
            return{
                ...state,
                studentList:action.payload
            }
        default:return state
    }
}

export default loadStudentListReducer;