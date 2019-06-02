import * as actionTypes from '../actions/actionTypes';

const loadCourseClassReducer=(state={},action)=>{
    switch(action.type){
        case actionTypes.LOAD_COURSE_CLASS:
            return{
                ...state,
                courseAndClass:action.payload
            }
        default:return state
    }
}

export default loadCourseClassReducer;