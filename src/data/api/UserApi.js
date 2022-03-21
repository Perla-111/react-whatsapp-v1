//import axios from 'axios';

import fireDb from '../../firebase';


export default class UserApi {
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

  static checkUserNumber(phoneNumber) {

    return fireDb.child("registeredNumbers").orderByChild("phoneNumber").equalTo(phoneNumber)
      .once("value").then(snapshot => {
        //console.log(snapshot.val());

        let savei;
        /*
          let res = {
          data :[]
        };*/
        if (snapshot.val() !== null) {
          for (let i = 0; i < snapshot.val().length; i++) {
            if (snapshot.val()[i] !== undefined) {
              //res.data[0] =  snapshot.val()[i];
              savei = i;
              //console.log(res.data);
              //console.log([snapshot.val()[i]]);
            }
            //else console.log('not found')
          }
        }
        return [snapshot.val()[savei]];
      })

    /*
            return axios.get("http://localhost:4000/registeredNumbers",{params : {
                phoneNumber : phoneNumber
            }})
            .then(res => res.data);
            */
  }

  static loadLoggedInUserNotifications(triggeredUsers){
   // console.log(triggeredUsers);
    return fireDb.child("triggeredUsers")//.orderByChild("phoneNumber").equalTo(phoneNumber)
      .once("value").then(snapshot => {
        //console.log(snapshot.val());

        /*let savei;
        
          let res = {
          data :[]
        };
        if (snapshot.val() !== null) {
          for (let i = 0; i < snapshot.val().length; i++) {
            if (snapshot.val()[i] !== undefined) {
              //res.data[0] =  snapshot.val()[i];
              savei = i;
              //console.log(res.data);
              //console.log([snapshot.val()[i]]);
            }
            else console.log('not found')
          }
        }
        */
        //return [snapshot.val()[savei]];
        //console.log(snapshot.val());
        return snapshot.val();
      })
  }

  static loadLoggedInUserData(phoneNumber) {


    return fireDb.child("data").orderByChild("phoneNumber").equalTo(phoneNumber)
      .once("value").then(snapshot => {
        //console.log(snapshot.val());

        let savei;
        /*
          let res = {
          data :[]
        };*/
        if (snapshot.val() !== null) {
          for (let i = 0; i < snapshot.val().length; i++) {
            if (snapshot.val()[i] !== undefined) {
              //res.data[0] =  snapshot.val()[i];
              savei = i;
              //console.log(res.data);
              //console.log(snapshot.val()[i]);
            }
            //else console.log('not found')
          }
        }
        return [snapshot.val()[savei]];
      })//.then(ress=>console.log(ress));
    /* 
     return axios.get("http://localhost:4000/data",{params : {
       phoneNumber : phoneNumber
     }})
     .then(res => res.data);
     */
  }

  static updateUserChat(newChat, redata, ids) {

    const data = redata; //receiving redata as object not an array
    //console.log(redata);
    //const id = ids;
    //const path = `http://localhost:4000/data/${id}`;

    const toPushInFireDb = {
      id: data.id,
      phoneNumber: data.phoneNumber,
      name: data.name,
      about: data.about,
      lastSeen: data.lastSeen,
      isOnline: data.isOnline,
      calls: data.calls,
      chats1: [
        {
          receiverId: data.chats1[0].receiverId,
          phoneNumber: data.chats1[0].phoneNumber,
          name: data.chats1[0].name,
          about: data.chats1[0].about,
          lastSeen: data.chats1[0].lastSeen,
          isOnline: data.chats1[0].isOnline,
          messages: [...data.chats1[0].messages, newChat]
        }
      ]
    }

    //      'id' field in db of firebase is taken as default index so cant perform equalTo operations

    return fireDb.child("data").orderByChild("phoneNumber").equalTo(data.phoneNumber).once("child_added", function (snapshot) {
      snapshot.ref.update(toPushInFireDb)
    }).then(snapshot =>
      fireDb.child("data").orderByChild("phoneNumber").equalTo(data.phoneNumber)
        .once("value").then(snapshot => {
          //console.log(snapshot.val());

          let savei;
          /*
            let res = {
            data :[]
          };*/
          if (snapshot.val() !== null) {
            for (let i = 0; i < snapshot.val().length; i++) {
              if (snapshot.val()[i] !== undefined) {
                //res.data[0] =  snapshot.val()[i];
                savei = i;
                //console.log(res.data);
                //console.log([snapshot.val()[i]]);
              }
              //else console.log('not found')
            }
          }
          return snapshot.val()[savei];
        }));
    /*
      return axios.put(path,
        {
          phoneNumber: data.phoneNumber,
          name: data.name,
          about: data.about,
          lastSeen: data.lastSeen,
          isOnline: data.isOnline,
          calls: data.calls,
          chats1: [
              {
                receiverId:data.chats1[0].receiverId,
                  phoneNumber: data.chats1[0].phoneNumber,
                  name: data.chats1[0].name,
                  about: data.chats1[0].about,
                  lastSeen: data.chats1[0].lastSeen,
                  isOnline: data.chats1[0].isOnline,
                  messages: [...data.chats1[0].messages,newChat]
              }
          ]
      }
        )
      .then(res => res.data);
      */
  }

  static updateOppositeUserChat(newChat, oppositeUserNumber, idsOpposite) {
    //const id = idsOpposite;
    //const path = `http://localhost:4000/data/${id}`;
    /*
        const toPushInFireDb = {
          id : res.data[0].id,
          phoneNumber: res.data[0].phoneNumber,
          name: res.data[0].name,
          about: res.data[0].about,
          lastSeen: res.data[0].lastSeen,
          isOnline: res.data[0].isOnline,
          calls: res.data[0].calls,
          chats1: [
              {
                  receiverId:res.data[0].chats1[0].receiverId,
                  phoneNumber:res.data[0].chats1[0].phoneNumber,
                  name: res.data[0].chats1[0].name,
                  about: res.data[0].chats1[0].about,
                  lastSeen: res.data[0].chats1[0].lastSeen,
                  isOnline: res.data[0].chats1[0].isOnline,
                  messages: [...res.data[0].chats1[0].messages,newChat]
              }
          ]
      };
    */
    return fireDb.child("data").orderByChild("phoneNumber").equalTo(oppositeUserNumber)
      .once("value").then(snapshot => {

        var res;
        if (snapshot.val()) {
          for (let i = 0; i < snapshot.val().length; i++) {
            if (snapshot.val()[i] !== undefined) {
              if (snapshot.val()[i].phoneNumber.toString() === oppositeUserNumber.toString()) {
                res = { data: snapshot.val()[i] };
                //console.log(res.data);
              }
              //else console.log('id not matched')
            }
            //else console.log('not found')
          }
        }


        const toPushInFireDb = {
          id: res.data.id,
          phoneNumber: res.data.phoneNumber,
          name: res.data.name,
          about: res.data.about,
          lastSeen: res.data.lastSeen,
          isOnline: res.data.isOnline,
          calls: res.data.calls,
          chats1: [
            {
              receiverId: res.data.chats1[0].receiverId,
              phoneNumber: res.data.chats1[0].phoneNumber,
              name: res.data.chats1[0].name,
              about: res.data.chats1[0].about,
              lastSeen: res.data.chats1[0].lastSeen,
              isOnline: res.data.chats1[0].isOnline,
              messages: [...res.data.chats1[0].messages, newChat]
            }
          ]
        };

        fireDb.child("data").orderByChild("phoneNumber").equalTo(oppositeUserNumber).once("child_added", function (snapshot) {
          snapshot.ref.update(toPushInFireDb);
          //console.log(snapshot.val());//directly
//////////////////////////////////////
///////////////////////////////////////
////////////////////// sufficient till here below is waste code as logged in user dont need opp user data , 
//////////////////////// he/she just updates the data
        }).then(snapshot =>
          fireDb.child("data").orderByChild("phoneNumber").equalTo(oppositeUserNumber)
            .once("value").then(snapshot => {
              //console.log(snapshot.val());

              let savei;
              /*
                let res = {
                data :[]
              };*/
              if (snapshot.val() !== null) {
                for (let i = 0; i < snapshot.val().length; i++) {
                  if (snapshot.val()[i] !== undefined) {
                    //res.data[0] =  snapshot.val()[i];
                    savei = i;
                    //console.log(res.data);
                    //console.log([snapshot.val()[i]]);
                  }
                  //else console.log('not found')
                }
              }
              return snapshot.val()[savei];
            }));

      })


    /*
        return axios.get("http://localhost:4000/data",{params : {
            phoneNumber : oppositeUserNumber
          }})
          .then(res => {
            console.log(res.data);
            return axios.put(path,
              {
                phoneNumber: res.data[0].phoneNumber,
                name: res.data[0].name,
                about: res.data[0].about,
                lastSeen: res.data[0].lastSeen,
                isOnline: res.data[0].isOnline,
                calls: res.data[0].calls,
                chats1: [
                    {
                        receiverId:res.data[0].chats1[0].receiverId,
                        phoneNumber:res.data[0].chats1[0].phoneNumber,
                        name: res.data[0].chats1[0].name,
                        about: res.data[0].chats1[0].about,
                        lastSeen: res.data[0].chats1[0].lastSeen,
                        isOnline: res.data[0].chats1[0].isOnline,
                        messages: [...res.data[0].chats1[0].messages,newChat]
                    }
                ]
            }
              )
              .then(res=> res.data)
          });
          */
  }

  static updateOppositeUserChatTrigger(idsOpposite, oppositeUserNumber, oppositeUserName,OppUserNotifications,oppositeUserLastMessage) {
    //let path = `http://localhost:4000/triggeredUsers/${idsOpposite}`;
    var phoneNumbertrigger = oppositeUserNumber;
    var nametrigger = oppositeUserName;
   // console.log(OppUserNotifications);

    const toPushInFireDb = {
      id: idsOpposite,
      phoneNumber: phoneNumbertrigger,
      name: nametrigger,
      isTriggered: 'true',
      lastMessage : oppositeUserLastMessage,
      notificationsCount : OppUserNotifications+1
    }
    //console.log(toPushInFireDb.notificationsCount);

    return fireDb.child("triggeredUsers").orderByChild("phoneNumber").equalTo(phoneNumbertrigger).once("child_added", function (snapshot) {
      snapshot.ref.update(toPushInFireDb);
      //console.log(snapshot.val());//directly
    }).then(snapshot => snapshot.val());


    /*
        return axios.put(path,
            {
                id: idsOpposite,
                phoneNumber: phoneNumbertrigger,
                name: nametrigger,
                isTriggered: 'true',
                lastMessage : "",
                notificationsCount : 0
            }
        ).then(res=> res.data);
        */
  }


}
