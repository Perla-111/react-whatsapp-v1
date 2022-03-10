import './index.css';

import { withRouter } from 'react-router-dom';
import Header from '../homepage/header/index';

import dp1 from '../../data/dp/dp1.jpg';

import VideocamIcon from '@material-ui/icons/Videocam';
import CallIcon from '@material-ui/icons/Call';
import CallMadeIcon from '@material-ui/icons/CallMade';
import CallReceivedIcon from '@material-ui/icons/CallReceived';
//import CallMissedIcon from '@material-ui/icons/CallMissed';
//import CallMissedOutgoingIcon from '@material-ui/icons/CallMissedOutgoing';
import { IconButton } from '@material-ui/core';



const CallPage = (props) => {

    let a=[1,2,3,4,5,6,7,8,9,0];
    return (
        <div className="callpage-1">
            <Header />
            <div className="callpage-2" >
            {a.map((value,index)=>(
                
            <div className='calllog' key ={index}>
                <div className='log-left'>
                    <div className='log-img'>
                    <img src={dp1} style={{borderRadius:'25px',height:'49px',width:'49px'}} alt='logleft' />
                    </div>

                    <div className="log-text">
                        <div className= "log-name">Sai Teja Chennul Srkr</div>
                        <div className="log-details">
                            {true?
                                <CallMadeIcon style={{color:'lightgreen'}}/>:
                                <CallReceivedIcon style={{color:'red'}}/>}
                            
                        <label>&nbsp;{`(${3})`}&nbsp;</label>
                        <label>19 August, 6:17 pm</label>
                        </div>
                    </div>
                </div>
                <div className="log-right">
                    <IconButton >
                        {true ? <CallIcon style={{color:'#128C7E'}}/>
                        : <VideocamIcon style={{color:'#128C7E'}}/> }
                    </IconButton>
                </div>
            </div>
        
            ))}</div>
        
        </div>
    );
}
export default withRouter(CallPage);