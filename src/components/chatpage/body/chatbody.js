import './chatbody.css';

import { IconButton } from "@material-ui/core";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';
import { useEffect, useState, useReducer, useRef } from 'react';
import cx from 'classnames';
//import testData from "../../../data/sample/testData";

import fireDb from '../../../firebase';

//import axios from 'axios';

import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as stateActions from '../../../actions/stateActions';

var sent = true;
var received = true;
var rCount = 0, sCount = 0;


const callReducer = (state, action) => {
    switch (action.type) {
        case 'COPY_FROM_PROPS_MYSTATE':
            //console.log(action.by);
            return action.by;

        case 'ADD_TO_REDATA':
            //console.log(action.by);
            return [...state, action.by];

        default:
            throw new Error();
    }
};

const ChatBody = (props) => {

    const [text, setText] = useState('');
    //const [data, setData] = useState([]);
    const [redata, dispatch] = useReducer(callReducer, []);
    const [allData, setAllData] = useState({});

    const [toHitDb, setToHitDb] = useState('true');

    //console.log(new Date().toLocaleDateString());
   // console.log(new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit' }));

    useEffect(() => {
        setAllData(props.mystate.states.loggedInUserdata)
    }, [props.mystate.states.loggedInUserdata]);

    useEffect(() => {
        dispatch({ type: 'COPY_FROM_PROPS_MYSTATE', by: props.mystate.states.loggedInUserdata.chats1[0].messages });
    }, [props.mystate.states.loggedInUserdata.chats1]);

    useEffect(() => {
        var settimer;
        //this is in state to stop trigger post db response.data
        //let count =0;//should not be in state in this demo example
        let timer1 = setTimeout(() => {
            console.log('started timeout'); //after 2 secs of comp load
            settimer = setInterval(() => {                                  // start hitting db
                console.log('started interval');
                if (toHitDb === 'true') {   //data was changed by other chat so
                    console.log('checking trigger db');

                    
                    fireDb.child("triggeredUsers").orderByChild("phoneNumber").equalTo(props.mystate.states.enteredPhoneNumber)
                    .once("child_added", function (snapshot) {
                                            snapshot.ref.update({notificationsCount : 0});
                                            console.log(snapshot.val());
                                            
                                        }).then(
                    


                    //props.actions.loadLoggedInUserNotifications(props.mystate.states.enteredPhoneNumber).then(resd => {
                    fireDb.child("triggeredUsers").orderByChild("isTriggered").equalTo('true')
                    .once("value")//.then(snapshot=>snapshot)
                    .then(snapshot => {

                        var res = {
                            data : []
                        };
                        console.log(snapshot.val());
                        if(snapshot.val()!==null){
                          for(let i=0;i<snapshot.val().length;i++){
                            if(snapshot.val()[i]!==undefined){
                              //if(snapshot.val()[i].phoneNumber.toString()===oppositeUserNumber.toString()){
                                res.data[0] =  snapshot.val()[i];
                                console.log(res.data);
                              //}
                              //else console.log('id not matched')
                            }
                            else console.log('not found')
                          }
                        }

                        if (res.data.length > 0) {
                            //setToHitDb('false');
                            console.log(res.data[0].phoneNumber.toString());
                            console.log(props.mystate.states.loggedInUserdata.phoneNumber.toString());
                            if(res.data[0].phoneNumber.toString()===props.mystate.states.loggedInUserdata.phoneNumber.toString()){
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
                                lastMessage : res.data[0].lastMessage,
                                notificationsCount : 0,
                                isTriggered: 'false'
                            }
                            console.log(toPushInFireDb);
                            fireDb.child("triggeredUsers").orderByChild("phoneNumber").equalTo(res.data[0].phoneNumber).once("child_added", function(snapshot) {
                             
                                snapshot.ref.update(toPushInFireDb);
                                console.log(snapshot.val());
                                
                              }).then((ress='ok')=>{
                                console.log(res.data[0].phoneNumber);

                              props.actions.loadLoggedInUserNotifications(res.data[0].phoneNumber);
                              setToHitDb('true');});

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
                    }))
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
        }, 2000);

        // this will clear Timeout
        // when component unmount like in willComponentUnmount
        // and show will not change to true
        return () => {
            console.log('cleared timeout');
            clearTimeout(timer1);
            clearInterval(settimer);
            //clearTimeout(timer2);
        };
    },
        // useEffect will run only one time with empty []
        // if you pass a value to array,
        // like this - [data]
        // than clearTimeout will run every time
        // this value changes (useEffect re-run)
        []//dont put anything inside this array for this useEffect
    );



    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [redata]);




    function keyPressed(e) {
        if (e.key === 'Enter')
            sendMessage();
    }
    function sendMessage() {
        setText('');
        if (text.length >= 1) {

            dispatch({
                type: 'ADD_TO_REDATA', by: {

                    msgType: "sent",
                    timeStamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit' }),
                    dateStamp:new Date().toLocaleDateString(),
                    msg: text,
                    isDelivered: "yes",
                    isReceived: "yes",
                    isRead: "yes",
                    id: ""
                }
            });

        }
        if (text.length >= 1) {
        let oppositeUserNumber = props.mystate.states.loggedInUserdata.chats1[0].phoneNumber;
        let oppositeUserName = props.mystate.states.loggedInUserdata.chats1[0].name;
        let ids = props.mystate.states.loggedInUserdata.id;
        var idsOpposite = props.mystate.states.loggedInUserdata.chats1[0].receiverId;
        let OppUserNotifications;
        for(let i=0;i<props.mystate.states.triggeredUsers.length;i++){
            if(oppositeUserNumber.toString()===props.mystate.states.triggeredUsers[i].phoneNumber.toString()){
                OppUserNotifications = props.mystate.states.triggeredUsers[i].notificationsCount;
                console.log(props.mystate.states.triggeredUsers[i].notificationsCount);
                console.log(oppositeUserNumber);
            }
            }
        let oppositeUserLastMessage = text;
        props.actions.updateUserChat({

            msgType: "sent",
            timeStamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit' }),
            dateStamp:new Date().toLocaleDateString(),
            msg: text,
            isDelivered: "yes",
            isReceived: "yes",
            isRead: "yes",
            id: ""
        }, allData, ids)

        setTimeout(() => {
            props.actions.updateOppositeUserChat({
                msgType: "received",
                timeStamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit' }),
                dateStamp:new Date().toLocaleDateString(),
                msg: text,
                isDelivered: "yes",
                isReceived: "yes",
                isRead: "yes",
                id: ""
            }, oppositeUserNumber, idsOpposite).then(res =>{
                props.actions.updateOppositeUserChatTrigger(idsOpposite,oppositeUserNumber,oppositeUserName,OppUserNotifications,oppositeUserLastMessage);
            })
            
        }, 100);
        ///// changed time out here
    }
    }


    return (
        <div>
            <div className="chat-body">

                {redata && redata.map((text, index) => {
                    if (text.msgType === 'sent') {
                        if (sCount === 0) {
                            sCount++;
                            rCount = 0;
                            received = true;
                        }
                        else {
                            sent = false;
                        }
                        return <div key={index} className={cx({
                            "chat-message-sent": sent,
                            "chat-message-sent-repeat": !sent
                        })}>
                            {text.msg}
                            <span className="chat-timestamp-s">
                                {text.timeStamp}
                            </span>
                            {sent && <span className="bubble-sent"></span>}
                        </div>
                    }



                    else {
                        if (rCount === 0) {
                            rCount++;
                            sCount = 0;
                            sent = true;
                        }
                        else {
                            received = false;
                        }
                        return <p key={index} className={cx({
                            "chat-message": received,
                            "chat-message-repeat": !received
                        })}>
                            {text.msg}
                            
                            <span className="chat-timestamp-r">
                            {text.timeStamp}
                            </span>
                            {received && <span className="bubble-received"></span>}
                        </p>
                    }
                })}

                <div ref={messagesEndRef} />

            </div>
            <div className="input-actions" >
                <div className="left">
                    <div className="msg">
                        <IconButton style={{paddingRight:'2px'}}>
                            <InsertEmoticonIcon />
                        </IconButton>
                        <input type="text"
                            placeholder="Type a message"
                            value={text}
                            onChange={(e) => { setText(e.target.value) }}
                            onKeyDown={keyPressed} />
                    </div>
                    <div className="msg">
                    <IconButton style={{padding:'0px'}} >
                            <AttachFileIcon />
                        </IconButton>
                        <IconButton style={{paddingLeft:'3px'}}>
                            <CameraAltIcon />
                        </IconButton>
                    </div>
                </div>
                <div className="right">
                    <IconButton
                        
                        onClick={sendMessage} >
                        {!text?
                        <MicIcon style={{ color: "white" }}
                        /> :
                        <SendIcon style={{ color: "white" }}
                        />}
                    </IconButton>
                </div>
            </div>
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
    actions1: bindActionCreators(checkActions,dispatch)*/
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ChatBody));