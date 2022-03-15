import './profile.css';

import React from 'react';
import { withRouter } from 'react-router-dom';

import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import PersonIcon from '@material-ui/icons/Person';
import EditIcon from '@material-ui/icons/Edit';
import CallIcon from '@material-ui/icons/Call';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Name from state',
            status: '',
            phoneNumber: ''
        }
    }
    render() {
        return (
            <div className='profile'>
                <div className='profileHeader'>
                    <label className='backIcon' onClick={() => { this.props.history.push('/settings') }}>
                        <IconButton>
                            <ArrowBackIcon style={{ color: 'whitesmoke', fontSize: '30px' }}></ArrowBackIcon>
                        </IconButton></label>
                    <label style={{ color: 'white', fontWeight: '600', fontSize: '22px' }}>Profile</label>
                </div>

                <div className='dp'>
                    <label className='dpIcon'><AccountCircleIcon style={{ fontSize: '160px', color: 'lightgrey' }} />
                    <span className='dpCameraIcon'>
                        <IconButton>
                            <CameraAltIcon style={{ color: 'white' }} />
                        </IconButton>
                    </span>
                    </label>

                    

                </div>

                <div className='body'>
                    <div className='bodyContent'>
                    <label style={{ paddingLeft: '20px' }}><PersonIcon style={{ fontSize: '30px', color: 'grey' }} /></label>
                    <label className='bodyName'>
                        <label style={{ fontSize: '18px',color:'grey',margin:'0px' }}>
                            Name</label>
                        <label style={{ fontSize: '20px', fontWeight: '500' }}>
                            Name here</label>
                    </label>
                    </div>
                    <label><EditIcon style={{ fontSize: '25px', color: '#128C7E' }} /></label>
                </div>

                <div className='body'>
                    <div className='bodyContent'>
                    <label style={{ paddingLeft: '20px' }}><PersonIcon style={{ fontSize: '30px', color: 'white' }} /></label>
                    <label className='bodyName'>
                        <label style={{ fontSize: '16px',color:'grey',marginTop:'-1.8rem' }}>
                            This is not your username or pin. This name will
                            be visible to your WhatsApp contacts.</label>
                        
                    </label>
                    </div>
                </div>

                <div className='body'>
                    <div className='bodyContent'>
                    <label style={{ paddingLeft: '20px' }}><InfoOutlinedIcon style={{ fontSize: '30px', color: 'grey' }} /></label>
                    <label className='bodyName'>
                        <label style={{ fontSize: '18px',color:'grey',margin:'0px' }}>
                            About</label>
                        <label style={{ fontSize: '18px'}}>
                            Hey there !! I am using WhatsApp.</label>
                    </label>
                    </div>
                    <label><EditIcon style={{ fontSize: '25px', color: '#128C7E' }} /></label>
                </div>

                <div className='body'>
                    <div className='bodyContent'>
                    <label style={{ paddingLeft: '20px' }}><CallIcon style={{ fontSize: '30px', color: 'grey' }} /></label>
                    <label className='bodyName'>
                        <label style={{ fontSize: '18px',color:'grey',margin:'0px' }}>
                            Phone</label>
                        <label style={{ fontSize: '20px', fontWeight: '500' }}>
                            +91 1234567890</label>
                    </label>
                    </div>
                    <label><EditIcon style={{ fontSize: '25px', color: '#128C7E' }} /></label>
                </div>



            </div>
        );
    }
}
export default withRouter(Profile);