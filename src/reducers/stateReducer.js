import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function stateReducer(state = initialState,action){
  switch(action.type){
    case types.LOAD_USER_SUCCESS :
      console.log(state);
      console.log(action.user);
      return state;

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
        console.log(number);
        let checkNumberState;
        if(number){
        checkNumberState = {...state,enteredPhoneNumber:number};
        }
        else
        checkNumberState = state;
        console.log(checkNumberState);
        return checkNumberState;

      default :
      return state;
  }
}