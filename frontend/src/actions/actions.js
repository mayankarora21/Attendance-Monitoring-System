import * as actionTypes from './actionTypes';

export function loadAdmin(loggedIn){
//    console.log('admin logged in',loggedIn)
    return{
        type:actionTypes.LOAD_ADMIN,
        payload:{
            isAdminLoggedIn:loggedIn
        }
    }
}