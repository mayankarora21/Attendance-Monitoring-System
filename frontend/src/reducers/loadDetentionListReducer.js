import * as actionTypes from '../actions/actionTypes';

const loadDetentionListReducer=(state={},action)=>{
    switch(action.type){
        case actionTypes.LOAD_DETENTION_LIST:
            return{
                ...state,
                detentionList:action.payload
            }
        default:return state;
    }
}

export default loadDetentionListReducer;