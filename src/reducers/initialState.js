/*export default {
  //products: [],
  //users:[],
  states:{
    showJoineeModal:true,
    admitShowJoineeModal:false,
    tDescriptionCheck:"none",
    tPriceCheck:"",
    tQuantityCheck:"none",
    tManufacturerCheck:""
  }
  //search:''
};*/
var initialState = {
  //products: [],
  //users:[],
  /*states:{
    showJoineeModal:true,
    admitShowJoineeModal:false,
    tDescriptionCheck:"none",
    tPriceCheck:"",
    tQuantityCheck:"none",
    tManufacturerCheck:""
  },*/
  search:'search-ok',
  checkActive:1,
  enteredPhoneNumber : 0,
  loggedInUserDetails : {},
  loggedInUserdata : [],
  triggeredUsers : []
}; 
export default initialState;
