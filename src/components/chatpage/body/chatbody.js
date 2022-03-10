import './chatbody.css';

import { IconButton } from "@material-ui/core";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import MicIcon from '@material-ui/icons/Mic';

import {useEffect, useState, useRef} from 'react';
import cx from 'classnames';
import testData from "../../../data/sample/testData";

var sent = true;
var received = true;
var rCount=0,sCount=0;

const ChatBody = (props) => {

    const [text, setText] = useState('');
    const [data,setData] = useState([]);

    //const { data2 } = props.location;

    //console.log(props);

    useEffect(()=>{
        setData(testData.c2);
    },[]);

    const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [data]);

    return (
        <div>
        <div className="chat-body">

        {data&&data.map((text,index)=>{
            if(text.type==='sent'){
                if(sCount===0){
                    sCount++;
                    rCount=0;
                    received = true;
                }
                else {
                    sent=false;
                }
            return <div key={index} className={cx({"chat-message-sent" : sent,
            "chat-message-sent-repeat" : !sent})}>
            {text.msg}
            <span className="chat-timestamp-s">
                {new Date().getHours().toString()}:
                {new Date().getMinutes().toString()}&nbsp;pm
            </span>
            {sent&&<span className="bubble-sent"></span>}
        </div>
            }



            else {
                if(rCount===0){
                    rCount++;
                    sCount=0;
                    sent = true;
                }
                else {
                    received=false;
                }
                return <p key={index} className={cx({"chat-message" : received,
                "chat-message-repeat" : !received})}>
            {text.msg}
            {received&&<span className="bubble-received"></span>}
            <span className="chat-timestamp-r">
                {new Date().getHours().toString()}:
                {new Date().getMinutes().toString()}&nbsp;pm
            </span>
        </p>
        }})}

<div ref={messagesEndRef} />
    
    </div>
    <div className="input-actions" >
                <div className="left">
                    <div className="msg">
                    <IconButton >
                        <InsertEmoticonIcon />
                    </IconButton>
                    <input type="text"
                    placeholder="Type a message" 
                    value={text}
                    onChange={(e)=>{setText(e.target.value)}} />
                    </div>
                    <div>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton >
                        <CameraAltIcon />
                    </IconButton>
                    </div>
                </div>
                <div className="right">
                    <IconButton 
                    style = {{outlineWidth:'0'}}
                     onClick={()=>{setText('');
                     if(text.length>0){
                        setData([...data,{msg : text,type :'sent'}])
                     }
                     }}>
                        <MicIcon style={{color:"white"}} 
                         />
                    </IconButton>
                </div>
            </div>
    </div>

    );
}
export default ChatBody;