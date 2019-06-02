import * as actionTypes from '../actions/actionTypes';

const loginFacultyReducer=(state={},action)=>{
//    console.log(action)
    switch(action.type){
        case actionTypes.LOGIN_FACULTY:
            return{
                ...state,
                isFacultyLoggedIn:action.payload.isFacultyLoggedIn
            }
        default:return state;
    }
}

export default loginFacultyReducer;