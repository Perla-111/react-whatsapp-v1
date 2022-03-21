import './index.css';

import { withRouter } from 'react-router-dom';

import {Modal} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { IconButton } from '@material-ui/core';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

import cx from 'classnames';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import * as stateActions from '../../../actions/stateActions';

const Header = (props) => {

    const [settingPopup,setSettingPopup] = useState(false);
    //let checkActive = 3;
    const [checkActive,setCheckActive] = useState();

    useEffect(()=>{
        //console.log(props.mystate.states.checkActive)
        setCheckActive(props.mystate.states.checkActive);
    },[props.mystate.states.checkActive]);

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
            <div className="camera" onClick={()=>{props.actions.setActiveTab(1);
                props.history.push('/cam')}}>
            <label >
                <IconButton><CameraAltIcon style={{margin:'-10px -10px -10px 0px',padding:'0px'}} 
                className={cx({'active':(checkActive===0)?true:false})}/></IconButton>
            </label>
            </div>                  
               
            <div className="spread">
            <label onClick={()=>{props.actions.setActiveTab(1);
                props.history.push('/home');}} className={cx({'active':(checkActive===1)?true:false})}>CHATS</label>
            <label onClick={()=>{props.actions.setActiveTab(2);
                props.history.push('/status')}} className={cx({'active':(checkActive===2)?true:false})}>STATUS</label>
            <label onClick={()=>{props.actions.setActiveTab(3);
                props.history.push('/call')}} className={cx({'active':(checkActive===3)?true:false})}>CALLS</label>
            </div>
        </div>
        </div>
    );
}

function mapStateToProps(state,ownProps){
    return {
      mystate : state
    };
  }
  
  function mapDispatchToProps(dispatch){
    return {
      actions : bindActionCreators(stateActions,dispatch)/*,
      actions1: bindActionCreators(checkActions,dispatch)*/
    };
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Header));