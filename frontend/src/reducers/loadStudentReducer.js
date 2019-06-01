import * as actionTypes from '../actions/actionTypes';

const loadStudentReducer=(state={},action)=>{
    switch(action.type){
        case actionTypes.LOAD_STUDENT:
            return{
                ...state,
                currStudent:action.payload
            }
        default:return state
    }
}

export default loadStudentReducer;