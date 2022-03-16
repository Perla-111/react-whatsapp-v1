
import * as types from '../actions/actionTypes';
//import {getMeeting} from '../data/Api/MeetingApi';
import UserApi from '../data/api/UserApi';

export function LoadUserSuccess(user){
  return { type:types.LOAD_USER_SUCCESS,user}
}

export function admitShowJoineeModal(check){
  return {type:types.ADMIT_SHOWJOINEE_MODAL,check}
}

export function CheckUserSuccess(user){
  return {type:types.CHECK_PHONE_NUMBER_SUCCESS,user}
}

export function LoadLoggedInUserDataSuccess(data){
  return {type:types.LOAD_LOGGEDIN_USER_DATA_SUCCESS,data}
}
/*
export function registerUserSuccess(user){
  return { type:types.REGISTER_USER_SUCCESS,user}
}
*/
export function loadUser(){
  //var check=getMeeting();
    /*return function (dispatch) {
      return UserApi.getAllUser().then(user =>{
        dispatch(LoadUserSuccess(user));
      }).catch(error =>{throw(error);});
    };*/
    
    //console.log(check);
    //return check[0];
    return function (dispatch) {
    return dispatch(LoadUserSuccess('check'));
     };
  }

  export function checkNumber(phoneNumber){
    return function (dispatch) {
      return UserApi.checkUserNumber(phoneNumber).then(user =>{
        dispatch(CheckUserSuccess(user));
      }).catch(error => {throw(error);});
    }
  }

  export function loadLoggedInUserData(phoneNumber){
    return function (dispatch) {
      return UserApi.loadLoggedInUserData(phoneNumber).then(data =>{
        dispatch(LoadLoggedInUserDataSuccess(data));
      }).catch(error => {throw(error);});
    }
  }
  
/*export function registerUser(user){
    return function (dispatch) {
      return UserApi.registerUser(user).then((user)=>{
      dispatch(registerUserSuccess(user));}).catch(error=>
        {throw(error);});
    };
  }
*/