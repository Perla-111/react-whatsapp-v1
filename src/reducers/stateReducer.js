import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function stateReducer(state = initialState,action){
  switch(action.type){
    case types.LOAD_USER_SUCCESS :
      console.log(state);
      console.log(action.user);
      return state;

      case types.SET_TAB_NUMBER_SUCCESS :
        let newState = {...state,checkActive:action.number}
        console.log(newState);
        return newState;

      /*
      case types.ADMIT_SHOWJOINEE_MODAL :
        console.log("ok");
      console.log(action.check);
      //console.log(state);
      state={...state,admitShowJoineeModal:action.check};
      console.log(state.admitShowJoineeModal);
      return state;
*/
   /* case types.REGISTER_USER_SUCCESS :
      return [...state,
      action.user];*/

      case types.CHECK_PHONE_NUMBER_SUCCESS :
        //console.log(action.user);
        let number = action.user[0].phoneNumber;
        //console.log(action.user[0]);
        let checkNumberState;
        if(number){
        checkNumberState = {...state,enteredPhoneNumber:number,loggedInUserDetails:action.user[0]};
        }
        else
        checkNumberState = state;
        //console.log(checkNumberState);
        return checkNumberState;

        case types.LOAD_LOGGEDIN_USER_NOTIFICATIONS_SUCCESS :
        console.log(action.triggeredUsers);
        let notifications = action.triggeredUsers;
        let loggedInUserDataNotifications;

        if(notifications){
          loggedInUserDataNotifications = {...state,triggeredUsers:action.triggeredUsers};
        }
        else
        loggedInUserDataNotifications = state;
        
        return loggedInUserDataNotifications;

        case types.LOAD_LOGGEDIN_USER_DATA_SUCCESS :
        //console.log(action.data);
        let checkLoggedInUserData = action.data[0];
        //console.log(action.data);
        let loggedInUserDataState;

        if(checkLoggedInUserData){
          loggedInUserDataState = {...state,loggedInUserdata:action.data[0]};
        }
        else
        loggedInUserDataState = state;
        
        //console.log(loggedInUserDataState);
        return loggedInUserDataState;

      case types.UPDATE_USER_CHAT_SUCCESS :
        console.log(action.data);
        let loggedInUserDataUpdateChat;
        if(action.data){
          loggedInUserDataUpdateChat = {...state,loggedInUserdata:action.data};
        }
        else loggedInUserDataUpdateChat = state;

        return loggedInUserDataUpdateChat;

      case types.UPDATE_OPPOSITE_USER_CHAT_SUCCESS :
        if(action.data){
          console.log(action.data);
        }

        return state;

      case types.UPDATE_OPPOSITE_USER_CHAT_TRIGGER_SUCCESS :
        if(action.data){
          console.log(action.data);
        }
        return state;

      default :
      return state;
  }
}