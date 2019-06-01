import * as actionTypes from '../actions/actionTypes';

const loginStudentReducer=(state={},action)=>{
    switch(action.type){
        case actionTypes.LOGIN_STUDENT:
            return{
                ...state,
                isStudentLoggedIn:action.payload.isStudentLoggedIn
            }
        default:return state;
    }
}

export default loginStudentReducer;