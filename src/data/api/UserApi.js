import axios from 'axios';

export default class UserApi{
    /*static getAllUser(){
		return axios.get("http://localhost:4000/users")
		.then(res => res.data);
	}*/

    /*
    axios.get("http://localhost:4000/users",{params: {
    email: user.email,
    password: user.password
  }}).then(res=>{
    //console.log(res);
  if(res.data.length>0){
    localStorage.setItem("token",res.data[0].id);
    props.history.push('/home');
  }
else{
  //console.log('none');
  localStorage.setItem("token","");
  alert('invalid email or passsword');
}});
*/

    static checkUserNumber(phoneNumber){
        return axios.get("http://localhost:4000/registeredNumbers",{params : {
            phoneNumber : phoneNumber
        }})
        .then(res => res.data);
    }
    static loadLoggedInUserData(phoneNumber){
      return axios.get("http://localhost:4000/data",{params : {
        phoneNumber : phoneNumber
      }})
      .then(res => res.data);
  }
}

