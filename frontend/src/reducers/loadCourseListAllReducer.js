import * as actionTypes from '../actions/actionTypes';

const loadCourseListAllReducer=(state={},action)=>{
    switch(action.type){
        case actionTypes.LOAD_COURSE_LIST_ALL:
//            console.log(action)
            return{
                ...state,
                courseListAll:action.payload
            }
        default:return state;
    }
}

export default loadCourseListAllReducer;