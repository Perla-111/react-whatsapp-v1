
import * as types from '../actions/actionTypes';
//import {getMeeting} from '../data/Api/MeetingApi';
import UserApi from '../data/api/UserApi';

export function LoadUserSuccess(user){
  return { type:types.LOAD_USER_SUCCESS,user}
}

export function setActiveTab(number){
  return { type:types.SET_TAB_NUMBER_SUCCESS,number}
}

export function CheckUserSuccess(user){
  return {type:types.CHECK_PHONE_NUMBER_SUCCESS,user}
}

export function LoadLoggedInUserNotificationsSuccess(triggeredUsers){
  return {type : types.LOAD_LOGGEDIN_USER_NOTIFICATIONS_SUCCESS,triggeredUsers}
}

export function setLoggedInUserNotificationsStateToZero(phoneNumber){
  return {type : types.SET_LOGGEDIN_USER_NOTIFICATIONS_TO_ZERO_SUCCESS,phoneNumber}
}

export function LoadLoggedInUserDataSuccess(data){
  return {type:types.LOAD_LOGGEDIN_USER_DATA_SUCCESS,data}
}

export function UpdateUserChatSuccess(data,newChat){
  //console.log(newChat);
  return {type:types.UPDATE_USER_CHAT_SUCCESS,data}
}
export function UpdateOppositeUserChatSuccess(data,newChat){
  //console.log(data);
  //console.log(newChat);
  /*data = {
    id:data.id,
    phoneNumber:data.phoneNumber,
    name:data.name,
    about:data.about,
    lastSeen:data.lastSeen,
    isOnline:data.isOnline,
    calls:data.calls,
    chats1: [
        {
            receiverId:data.chats1[0].receiverId,
            phoneNumber:data.chats1[0].phoneNumber,
            name:data.chats1[0].name,
            about:data.chats1[0].about,
            lastSeen:data.chats1[0].lastSeen,
            isOnline:data.chats1[0].isOnline,
            messages: [...data.chats1[0].messages,newChat]
        }
    ]
}*/
  return {type:types.UPDATE_OPPOSITE_USER_CHAT_SUCCESS,data}
}
export function UpdateOppositeUserChatTriggerSuccess(data)
{
  return {type:types.UPDATE_OPPOSITE_USER_CHAT_TRIGGER_SUCCESS,data}
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

  export function loadLoggedInUserNotifications(phoneNumber){
    let changednotifications;
    return function(dispatch) {
      return UserApi.loadLoggedInUserNotifications(phoneNumber).then(triggeredUsers=>{
        changednotifications=triggeredUsers;
        dispatch(LoadLoggedInUserNotificationsSuccess(triggeredUsers));
      }).catch(error=>{throw(error);});
    }
  }

  export function loadLoggedInUserData(phoneNumber){
    return function (dispatch) {
      return UserApi.loadLoggedInUserData(phoneNumber).then(data =>{
        dispatch(LoadLoggedInUserDataSuccess(data));
      }).catch(error => {throw(error);});
    }
  }

  export function updateUserChat(newChat,redata,ids){
    return function(dispatch){
      return UserApi.updateUserChat(newChat,redata,ids).then(data => {
        dispatch(UpdateUserChatSuccess(data,newChat));
      }).catch(error => {throw(error);})
      .then((resd='ok1')=>resd);
    }
  }

  export function updateOppositeUserChat(newChat,oppositeUserNumber,idsOpposite){
    return function(dispatch){
      return UserApi.updateOppositeUserChat(newChat,oppositeUserNumber,idsOpposite).then(data => {
        dispatch(UpdateOppositeUserChatSuccess(data,newChat));
      }).catch(error => {throw(error);})
      .then((resd='ok')=>resd);
    }
  }

 export function updateOppositeUserChatTrigger(idsOpposite,oppositeUserNumber,oppositeUserName,OppUserNotifications,oppositeUserLastMessage){
   return function(dispatch){
    return UserApi.updateOppositeUserChatTrigger(idsOpposite,oppositeUserNumber,oppositeUserName,OppUserNotifications,oppositeUserLastMessage).then(data => {
      dispatch(UpdateOppositeUserChatTriggerSuccess(data));
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