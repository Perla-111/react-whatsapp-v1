import { withRouter } from 'react-router-dom';
import './index.css';

import dp1 from '../../../data/dp/dp1.jpg';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import CheckIcon from '@material-ui/icons/Check';

import HoverIcons from '../../hoverIcons/hoverIcons';
import { useEffect, useState } from 'react';

import restchatsData from '../../../data/sample/chatsData';

import fireDb from '../../../firebase';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as stateActions from '../../../actions/stateActions';

const ChatTiles = (props) => {
    const [chatData, setChatData] = useState();
    const [oppositeUserChatData, setOppositeUserChatData] = useState();
    const [lastmessage, setlastmessage] = useState('');

    const restChatData = restchatsData;
    const [toHitDb, setToHitDb] = useState('true');


    useEffect(() => {

        if (props.mystate.states.triggeredUsers && props.mystate.states.loggedInUserdata.phoneNumber) {
            setlastmessage(props.mystate.states.loggedInUserdata.chats1[0].messages[props.mystate.states.loggedInUserdata.chats1[0].messages.length - 1].msg);
            for (let i = 0; i < props.mystate.states.triggeredUsers.length; i++) {
                if (props.mystate.states.loggedInUserdata.phoneNumber.toString() === props.mystate.states.triggeredUsers[i].phoneNumber.toString()) {
                    //console.log(props.mystate.states.triggeredUsers[i]);
                    setChatData([props.mystate.states.triggeredUsers[i]]);
                }
                else {
                    setOppositeUserChatData(props.mystate.states.triggeredUsers[i]);
                    console.log(props.mystate.states.triggeredUsers[i])
                }
            }
        }
        //console.log(props.mystate.states.triggeredUsers);
        //console.log(chatData);
        // eslint-disable-next-line 
    }, [props.mystate.states.triggeredUsers, props.mystate.states.loggedInUserdata.phoneNumber])





    useEffect(() => {
        /*
        let onlineTimer = setInterval(()=>{
        if(props.mystate.states.triggeredUsers.length>0){

            }
        },10000);*/
        var settimer;
        //this is in state to stop trigger post db response.data
        //let count =0;//should not be in state in this demo example
        let timer1 = setTimeout(() => {
            console.log('started timeout'); //after 2 secs of comp load
            settimer = setInterval(() => {                                  // start hitting db
                console.log('started interval');
                if (toHitDb === 'true') {   //data was changed by other chat so
                    console.log('checking trigger db');

                    props.actions.loadLoggedInUserNotifications(props.mystate.states.enteredPhoneNumber).then(resd => {
                        fireDb.child("triggeredUsers").orderByChild("isTriggered").equalTo('true')
                            .once("value")//.then(snapshot=>snapshot)
                            .then(snapshot => {

                                var res = {
                                    data: []
                                };
                                console.log(snapshot.val());
                                if (snapshot.val() !== null) {
                                    for (let i = 0; i < snapshot.val().length; i++) {
                                        if (snapshot.val()[i] !== undefined) {
                                            //if(snapshot.val()[i].phoneNumber.toString()===oppositeUserNumber.toString()){
                                            res.data[0] = snapshot.val()[i];
                                            console.log(res.data);
                                            //}
                                            //else console.log('id not matched')
                                        }
                                        else console.log('not found')
                                    }
                                }

                                if (res.data.length > 0) {
                                    setToHitDb('false');
                                    console.log(res.data[0].phoneNumber.toString());
                                    console.log(props.mystate.states.enteredPhoneNumber.toString());//replaced this 2 places -> props.mystate.states.loggedInUserdata.phoneNumber
                                    if (res.data[0].phoneNumber.toString() === props.mystate.states.enteredPhoneNumber.toString()) {
                                        props.actions.loadLoggedInUserData(res.data[0].phoneNumber);
                                        //let path = `http://localhost:4000/triggeredUsers/${res.data[0].id}`;
                                        /*
                                           let res1 = {data : snapshot.val()}
                                            const toPushInFireDb = {
                                            id: res1.data[0].id,
                                            phoneNumber: res1.data[0].phoneNumber,
                                            name: res1.data[0].name,
                                            isTriggered: 'false'
                                        }
                                    */
                                        const toPushInFireDb = {
                                            id: res.data[0].id,
                                            phoneNumber: res.data[0].phoneNumber,
                                            name: res.data[0].name,
                                            lastMessage: res.data[0].lastMessage,
                                            notificationsCount: res.data[0].notificationsCount,
                                            isTriggered: 'false'
                                        }
                                        fireDb.child("triggeredUsers").orderByChild("phoneNumber").equalTo(res.data[0].phoneNumber).once("child_added", function (snapshot) {

                                            snapshot.ref.update(toPushInFireDb);
                                            console.log(snapshot.val());
                                            setToHitDb('true');
                                        }).then((ress = 'ok') =>
                                            props.actions.loadLoggedInUserNotifications(res.data[0].phoneNumber));

                                        /*
                                      axios.put(path,
                                          {
                                              id: res.data[0].id,
                                              phoneNumber: res.data[0].phoneNumber,
                                              name: res.data[0].name,
                                              isTriggered: 'false'
                                          }
                                      ).then(res=>{
                                          console.log(res.data);
                                          setToHitDb('true');
                                      })
                                      */
                                    }
                                    else
                                        setToHitDb('true');
                                }
                                else
                                    console.log('none');
                            })
                    })
                    /* for json-server with axios
                                        axios.get("http://localhost:4000/triggeredUsers", {
                                            params: {
                                                isTriggered: 'true'
                                            }
                                        })
                                            .then(res => {
                                                if (res.data.length > 0) {
                                                    setToHitDb('false');
                                                    console.log(res.data[0].phoneNumber.toString());
                                                    console.log(props.mystate.states.loggedInUserdata.phoneNumber.toString());
                                                    if(res.data[0].id.toString()===props.mystate.states.loggedInUserdata.id.toString()){
                                                    props.actions.loadLoggedInUserData(res.data[0].phoneNumber);
                                                    let path = `http://localhost:4000/triggeredUsers/${res.data[0].id}`;
                                                    /*
                                                       let res1 = {data : snapshot.val()}
                                                        const toPushInFireDb = {
                                                        id: res1.data[0].id,
                                                        phoneNumber: res1.data[0].phoneNumber,
                                                        name: res1.data[0].name,
                                                        isTriggered: 'false'
                                                    }
                                                //
                                                    const toPushInFireDb = {
                                                        id: res.data[0].id,
                                                        phoneNumber: res.data[0].phoneNumber,
                                                        name: res.data[0].name,
                                                        isTriggered: 'false'
                                                    }
                                                    fireDb.child("triggeredUsers").orderByChild("phoneNumber").equalTo(res.data[0].phoneNumber).once("child_added", function(snapshot) {
                                                     
                                                        snapshot.ref.update(toPushInFireDb);
                                                        console.log(snapshot.val());
                                                      });
                    
                                                      
                                                    axios.put(path,
                                                        {
                                                            id: res.data[0].id,
                                                            phoneNumber: res.data[0].phoneNumber,
                                                            name: res.data[0].name,
                                                            isTriggered: 'false'
                                                        }
                                                    ).then(res=>{
                                                        console.log(res.data);
                                                        setToHitDb('true');
                                                    })}
                                                    else 
                                                    setToHitDb('true');
                                                }
                                                else
                                                    console.log('none');
                                            })
                                            */
                }
                else {
                    console.log('none');
                }
            }, 3000);
        }, 1500);

        // this will clear Timeout
        // when component unmount like in willComponentUnmount
        // and show will not change to true
        return () => {
            console.log('cleared timeout');
            clearTimeout(timer1);
            clearInterval(settimer);
            // clearInterval(onlineTimer);
            //clearTimeout(timer2);
        };
    },
        // useEffect will run only one time with empty []
        // if you pass a value to array,
        // like this - [data]
        // than clearTimeout will run every time
        // this value changes (useEffect re-run)
        // eslint-disable-next-line
        []//dont put anything inside this array for this useEffect
    );

    return (
        <div className="body1">
            <div className="chat-tiles" >
                {chatData &&
                    chatData.map((chat, index) =>
                        <div key={index} className="tile">
                            <div></div>
                            <img className="dp" src={dp1} alt="nnnn" height="49px"
                                width="49px"></img>
                            <div className="content" onClick={() => {
                                props.history.push(
                                    { pathname: `/inChat/${oppositeUserChatData.name}/${'online'}` }
                                )
                            }}>
                                <div className="topp">
                                    <div className="topp1">{oppositeUserChatData.name}</div>
                                    {chat.notificationsCount > 0 ?
                                        <div className="topp3">
                                            <span >
                                                {new Date().getHours().toString() <= 9 ? `0${new Date().getHours().toString()}` : `${new Date().getHours().toString()}`}:
                                                {new Date().getMinutes().toString() <= 9 ?
                                                    `0${new Date().getMinutes().toString()}`
                                                    : `${new Date().getMinutes().toString()}`}&nbsp;{new Date().getHours().toString() <= 11 ? 'am' : 'pm'}
                                            </span></div> :
                                        <div className="topp2">{'today'}</div>}
                                </div>
                                <div className="bott">
                                    <label className='textWrapp'>{/*chat.group*/false ? `${'chat.chatMemberName'}: ` : ''}{lastmessage}</label>
                                    <label > {/*chat.chatMuted*/true ? <VolumeOffIcon style={{ color: 'grey' }} /> : ''}
                                        &nbsp;
                                        {chat.notificationsCount > 0 ? <span className="badge badge-success rounded-circle">{chat.notificationsCount}</span> : ''}
                                    </label>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    )
                }

                {restChatData &&
                    restChatData.map((RestChatData, index) =>
                        <div key={index} className="tile">
                            <div></div>
                            <img className="dp" src={dp1} alt="nnnn" height="49px"
                                width="49px"></img>
                            <div className="content">
                                <div className="topp">
                                    <div className="topp1">{RestChatData.name}</div>
                                    {RestChatData.notifications > 0 ?
                                        <div className="topp3">
                                            <span >
                                                {new Date().getHours().toString() <= 9 ? `0${new Date().getHours().toString()}` : `${new Date().getHours().toString()}`}:
                                                {new Date().getMinutes().toString() <= 9 ?
                                                    `0${new Date().getMinutes().toString()}`
                                                    : `${new Date().getMinutes().toString()}`}&nbsp;{new Date().getHours().toString() <= 11 ? 'am' : 'pm'}
                                            </span></div> :
                                        <div className="topp2">{RestChatData.chatMember==='chat2'?RestChatData.lastChatOn:'today'}</div>}
                                </div>
                                <div className="bott">
                                <label className='textWrapp'>{RestChatData.group===true ? `${RestChatData.chatMember}: ` : 
                                <span >
                                   {RestChatData.sent&& <CheckIcon style={{fontSize:'16px',color:'rgb(55, 185, 236)',padding:'0px',margin:'0px'}} />}
                                   {RestChatData.sent&& <CheckIcon style={{fontSize:'16px',padding:'0px',color:'rgb(55, 185, 236)',marginLeft:'-0.6rem'}} /> }
                                </span>}{RestChatData.lastMessage}</label>
                                    <label > {RestChatData.chatMuted===true ? <VolumeOffIcon style={{ color: 'grey' }} /> : ''}
                                        &nbsp;
                                        {RestChatData.notifications > 0 ? <span className="badge badge-success rounded-circle">{RestChatData.notifications}</span> : ''}
                                    </label>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    )
                }




                {/*
        <div className="tile">
            <img className="dp" src={dp1} alt="nnnn" height="49px"
            width="49px"></img>
            <div className="content" onClick={()=>{props.history.push('/inChat');}}>
            <div className="topp">
                <div className="topp1">We are Inevitables👶🏻</div>
                <div className="topp2">yesterday</div>
            </div>
            <div className="bott">
                <label >Sai Teja: # Sticker</label>
                <label > <VolumeOffIcon style={{ color: 'grey' }}/>
                    &nbsp; 
                <span className="badge badge-success rounded-circle">4</span>
                    </label>
            </div>
            </div>
        </div>
        */}

                {/*<div className="tile">
            <img className="dp" src={dp1} alt="nnnn" height="49px"
            width="49px"></img>
            <div className="content">
            <div className="topp">
                <div className="topp1">We are Inevitables👶🏻</div>
                <div className="topp2">yesterday</div>
            </div>
            <div className="bott">
                <label >Sai Teja: # Sticker</label>
                <label > &nbsp; 
                <span className="badge badge-success rounded-circle">4</span>
                    </label>
            </div>
            </div>
        </div>*/}

            </div>
            <HoverIcons props={'HomePage'} />

        </div>
    );
}

function mapStateToProps(state, ownProps) {
    return {
        mystate: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(stateActions, dispatch)/*,
      //actions1: bindActionCreators(checkActions,dispatch)*/
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ChatTiles));