import * as actionTypes from '../actions/actionTypes';

const loadClassListAllReducer=(state={},action)=>{
    switch(action.type){
        case actionTypes.LOAD_CLASS_LIST_ALL:
//            console.log(action)
            return{
                ...state,
                classListAll:action.payload
            }
        default:return state;
    }
}

export default loadClassListAllReducer;