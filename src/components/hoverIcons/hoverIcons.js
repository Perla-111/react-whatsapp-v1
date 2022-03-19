import './hoverIcons.css';

import CommentIcon from '@material-ui/icons/Comment';
import { IconButton } from '@material-ui/core';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import CreateIcon from '@material-ui/icons/Create';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

const HoverIcons = ({props}) => {
    return (
        <div >
                                {props==='StatusPage'?<div className="details">
                        <IconButton style={{height:"40px",width:"40px"}} >
                        <CreateIcon  />
                        </IconButton>
                        </div>:null}
                    
                        {props==='CallPage'&&
                        <div className="contacts">
                        <IconButton><AddIcCallIcon style={{color:"white"}} /></IconButton>
                       </div>}
                        {props==='HomePage'&&
                        <div className="contacts">
                        <IconButton><CommentIcon style={{color:"white"}} /></IconButton>
                       </div>}
                        {props==='StatusPage'&&
                        <div className="contacts">
                        <IconButton><CameraAltIcon style={{color:"white"}} /></IconButton>
                       </div>}
                        
        </div>
    );
}
export default HoverIcons;