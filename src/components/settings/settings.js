import './settings.css';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CropFreeIcon from '@material-ui/icons/CropFree';
import {IconButton} from '@material-ui/core';

import {withRouter} from 'react-router-dom';

import { connect } from 'react-redux';
import { useEffect } from 'react';
//import {bindActionCreators} from 'redux';

//import * as stateActions from '../../actions/stateActions';

const Settings = (props) =>{

    useEffect(()=>{
        if(props.mystate.states.loggedInUserdata.length === 0){
            props.history.push('/');
        }
        else             props.history.push('/settings');
    },[]);


    const userDetails = props.mystate.states.loggedInUserDetails;
    return(
        <div className='settingsPage'>
            <div className='settingsHeader'>
                <label className='backIcon' onClick={()=>{
                    if(props.mystate.states.checkActive===1)
                    props.history.push('/home')
                    else if(props.mystate.states.checkActive===2)
                    props.history.push('/status')
                    else if(props.mystate.states.checkActive===3)
                    props.history.push('/call')
                    }}>
                    <IconButton>
                    <ArrowBackIcon style={{color:'whitesmoke',fontSize:'30px'}}></ArrowBackIcon>
                    </IconButton></label>
                <label style={{color:'white',fontWeight:'600',fontSize:'22px'}}>Settings</label>
            </div>
            <div className='settingsProfile'>
                <label className='settingsStatus' onClick={()=>{props.history.push('/profile')}}>
                    <label><AccountCircleIcon style={{fontSize:'80px',color:'lightgrey'}} /></label>
                <label className='settingsStatusName'>
                    <label style={{fontSize:'20px',fontWeight:'bold'}}>{userDetails?userDetails.name:'empty'}</label>
                <label>{userDetails?userDetails.about:'empty'}</label>
                </label>
                </label>

                <label><CropFreeIcon stle={{color:'#128C7E'}} /></label>
            </div>
            <hr/>
            <div className='settingsBody'>
            <label className='body'>
                    <label style={{paddingLeft:'20px'}}><VpnKeyIcon style={{fontSize:'30px',color:'grey'}} /></label>
                <label className='bodyName'>
                    <label style={{fontSize:'20px',fontWeight:'bold'}}>Account</label>
                <label>Privacy, security, change number</label>
                </label>
                </label>
                <label className='body'>
                    <label style={{paddingLeft:'20px'}}><ChatIcon style={{fontSize:'30px',color:'grey'}} /></label>
                <label className='bodyName'>
                    <label style={{fontSize:'20px',fontWeight:'bold'}}>Chats</label>
                <label>Theme, wallpapers, chat history</label>
                </label>
                </label>
                <label className='body'>
                    <label style={{paddingLeft:'20px'}}><NotificationsIcon style={{fontSize:'30px',color:'grey'}} /></label>
                <label className='bodyName'>
                    <label style={{fontSize:'20px',fontWeight:'bold'}}>Notifications</label>
                <label>Message, group & call tones</label>
                </label>
                </label>
                <label className='body'>
                    <label style={{paddingLeft:'20px'}}><DataUsageIcon style={{fontSize:'30px',color:'grey'}} /></label>
                <label className='bodyName'>
                    <label style={{fontSize:'20px',fontWeight:'bold'}}>Storage and data</label>
                <label>Network usage, auto-download</label>
                </label>
                </label>
                <label className='body'>
                    <label style={{paddingLeft:'20px'}}><HelpOutlineIcon style={{fontSize:'30px',color:'grey'}} /></label>
                <label className='bodyName'>
                    <label style={{fontSize:'20px',fontWeight:'bold'}}>Help</label>
                <label>Help centre, contact us, privacy policy</label>
                </label>
                </label>
                <label className='body'>
                    <label style={{paddingLeft:'20px'}}><SupervisorAccountIcon style={{fontSize:'30px',color:'grey'}} /></label>
                <label className='bodyName'>
                    <label style={{fontSize:'20px',fontWeight:'bold'}}>Invite a friend</label>
                </label>
                </label>
            </div>
            <div className='settingsFooter'>
                <label className='footerheader' >from</label><br/>
                <label className='footerBrand'><AllInclusiveIcon /> Meta</label>
            </div>
        </div>
    );
}

function mapStateToProps(state,ownProps){
    return {
      mystate : state
    };
  }
  /* 
  function mapDispatchToProps(dispatch){
    return {
      actions : bindActionCreators(stateActions,dispatch)/*,
      actions1: bindActionCreators(checkActions,dispatch)
    };
  }
  */
  export default connect(mapStateToProps,)(withRouter(Settings));