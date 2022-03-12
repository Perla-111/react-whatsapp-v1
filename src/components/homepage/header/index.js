import './index.css';

import { withRouter } from 'react-router-dom';

import {Modal} from 'react-bootstrap';
import { useState } from 'react';


const Header = (props) => {

    const [settingPopup,setSettingPopup] = useState(false);

    function CloseSettingPopup(){
        setSettingPopup(false);
    }
    function OpenSettingPopup(){
        setSettingPopup(true);
    }

    return (
        <div className="header1" >

        <div className="header_title">
            <label  >WhatsApp</label>
            <label >
            <i className="bi bi-search one"></i>
            <i className="bi bi-three-dots-vertical" onClick={OpenSettingPopup}></i>
            </label>                        
        </div>
<div className='setting'>
<Modal className='settingPopup'  animation={false} show={settingPopup} onHide={CloseSettingPopup} >
<Modal.Body className='popupbody'>
    <div className='options'>
        <label>New group</label>
        <label>New broadcast</label>
        <label>Linked devices</label>
        <label>Starred messages</label>
        <label>Payments</label>
        <label onClick={()=>{props.history.push('/settings')}}>Settings</label>
    </div>
</Modal.Body>
</Modal>
</div>

        <div className="header_menu">  
            <div className="camera" >
            <label >
                <i className="bi bi-camera"></i>
            </label>
            </div>                  
               
            <div className="spread">
            <label onClick={()=>{props.history.push('/home')}}>CHATS</label>
            <label>STATUS</label>
            <label onClick={()=>{props.history.push('/call')}}>CALLS</label>
            </div>
        </div>
        </div>
    );
}
export default withRouter(Header);