import { withRouter } from 'react-router-dom';
import './index.css';

import dp1 from '../../../data/dp/dp1.jpg';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';

import HoverIcons from '../../hoverIcons/hoverIcons';
import { useEffect, useState } from 'react';

import chatsData from '../../../data/sample/chatsData';

const ChatTiles = (props) => {
    const [chatData, setChatData] = useState([]);

    useEffect(()=>{
        setChatData(chatsData);
    },[])

    return (
        <div className="body1">
        <div className="chat-tiles" >
            {chatData && 
            chatData.map((chat,index)=>
            <div key={index} className="tile">
                <div></div>
            <img className="dp" src={dp1} alt="nnnn" height="49px"
            width="49px"></img>
            <div className="content" onClick={()=>{props.history.push(
                {pathname : '/inChat'}
            )}}>
            <div className="topp">
                <div className="topp1">{chat.name}</div>
                <div className="topp2">{chat.lastChatOn}</div>
            </div>
            <div className="bott">
                <label >{chat.group?`${chat.chatMember}: `:''}{chat.lastMessage}</label>
                <label > {chat.chatMuted?<VolumeOffIcon style={{ color: 'grey' }}/>:''}
                    &nbsp; 
                {chat.notifications>0?<span className="badge badge-success rounded-circle">{chat.notifications}</span>:''}
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
        <HoverIcons />

</div>
    );
}

export default withRouter(ChatTiles);