import * as actionTypes from '../actions/actionTypes';

const loadStudentListAllReducer=(state={},action)=>{
    switch(action.type){
        case actionTypes.LOAD_STUDENT_LIST_ALL:
//            console.log(action)
            return{
                ...state,
                studentListAll:action.payload
            }
        default:return state;
    }
}

export default loadStudentListAllReducer;