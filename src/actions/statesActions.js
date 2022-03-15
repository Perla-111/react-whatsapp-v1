import * as types from './actionTypes';


export function CheckDescriptionSuccess(check){
    return {type:types.CHECK_DESCRIPTION,check}
  }

  export function CheckPriceSuccess(check){
    return {type:types.CHECK_PRICE,check}
  }

  export function CheckQuantitySuccess(check){
    return {type:types.CHECK_QUANTITY,check}
  }

  export function CheckManufacturerSuccess(check){
    return {type:types.CHECK_MANUFACTURER,check}
  }

  export function loadCheckSuccess(){
    return {type:types.CHECK_ALL_SUCCESS}
  }

  export function loadCheck(){
    return function (dispatch) {
        return dispatch(loadCheckSuccess());
    };
  }