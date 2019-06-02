import * as actionTypes from '../actions/actionTypes';

const loadFacultyReducer=(state={},action)=>{
    switch(action.type){
        case actionTypes.LOAD_FACULTY:
            return{
                ...state,
                currFaculty:action.payload.faculty
            }
        default:return state;
    }
}

export default loadFacultyReducer;