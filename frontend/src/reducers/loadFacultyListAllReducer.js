import * as actionTypes from '../actions/actionTypes';

const loadFacultyListAllReducer=(state={},action)=>{
    switch(action.type){
        case actionTypes.LOAD_FACULTY_LIST_ALL:
//            console.log(action)
            return{
                ...state,
                facultyListAll:action.payload
            }
        default:return state;
    }
}

export default loadFacultyListAllReducer;