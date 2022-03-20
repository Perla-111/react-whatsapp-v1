import { withRouter } from 'react-router-dom';
import './chat-header.css';

import dp1 from '../../../data/dp/dp1.jpg';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from "@material-ui/core";
import VideocamIcon from '@material-ui/icons/Videocam';
import CallIcon from '@material-ui/icons/Call';
import MoreVertIcon from '@material-ui/icons/MoreVert';

//We are Inevitables👶🏻

const ChatHeader = (props) => {
    return (
        <div className="chat-header" >
        <div className="left">
            <div className="icon">
            <IconButton onClick={()=>{props.history.push('/home')}}>
            <ArrowBackIcon style={{color:"white"}} />
            <img width="40px"  height="40px" style={{borderRadius:"25px"}} src={dp1} alt="dp" />
            </IconButton>
            </div>
            
            <div className="title" >
                <div className="top">{props.match.params.x}</div>
                <div className="bottom">{props.match.params.y}</div>
            </div>
        </div>
        <div className="right">
        <div>
        <IconButton>
            <VideocamIcon style={{color:"white"}} />
        </IconButton>
        </div>
        <div>
        <IconButton>
            <CallIcon style={{color:"white"}} />
        </IconButton>
        </div>
        <div>
        <IconButton>
            <MoreVertIcon style={{color:"white"}}/>
        </IconButton>
        </div>
        </div>
    </div>
    );
}
export default withRouter(ChatHeader);