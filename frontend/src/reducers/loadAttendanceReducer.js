import * as actionTypes from '../actions/actionTypes';

const loadAttendanceReducer=(state={},action)=>{
    switch(action.type){
        case actionTypes.LOAD_ATTENDANCE:
            return{
                ...state,
                attendance:action.payload
            }
        default:return state
    }
}

export default loadAttendanceReducer;