import './otppage.css';

import { withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import SmsIcon from '@material-ui/icons/Sms';
import CallIcon from '@material-ui/icons/Call';
import { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as stateActions from '../../actions/stateActions';

const useStyles = makeStyles((theme) => ({

    textField2: {
        margin: theme.spacing(1),
        marginBottom: theme.spacing(3),
        width: '20ch',
    },
    icons: {
        marginRight: theme.spacing(2)
    }
}));

const OtpPage = (props) => {

    useEffect(()=>{
        if(props.mystate.states.enteredPhoneNumber!==0)
            if(props.mystate.states.loggedInUserdata.length === 0) props.history.push('/');
             else props.history.push('/home');
         }
     ,[]);
    /*
    useEffect(()=>{
        
       let pagetimer = setTimeout(()=>{
            if(props.mystate.states.enteredPhoneNumber === 0){
                props.history.push('/');
            }
            else if(props.mystate.states.loggedInUserdata.length === 0) props.history.push('/verifyotp');
            else props.history.push('/home');
        },3000)


        return ()=>{
            clearTimeout(pagetimer);
        }
    },[]);
    */

    const classes = useStyles();

    const [otp, setOtp] = useState();


    const initialMinute = 1;
    const initialSeconds = 2;
    const [minutes, setMinutes] = useState(initialMinute);
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                }
                else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    });

    function checkOtp() {
        //console.log(otp);
        //console.log(props.mystate.states.enteredPhoneNumber);
        if (otp === '123456' && props.mystate.states.enteredPhoneNumber === '1234567890') {
            props.actions.loadLoggedInUserNotifications(props.mystate.states.enteredPhoneNumber)
            props.actions.loadLoggedInUserData(props.mystate.states.enteredPhoneNumber);
            //props.actions.changeLoggedInUserOnlineStatus('yes');
            props.history.push('/home');
        }
        else if (otp === '123455' && props.mystate.states.enteredPhoneNumber === '0987654321') {
            props.actions.loadLoggedInUserNotifications(props.mystate.states.enteredPhoneNumber)
            props.actions.loadLoggedInUserData(props.mystate.states.enteredPhoneNumber);
            //props.actions.changeLoggedInUserOnlineStatus('yes');
            props.history.push('/home');
        }
        else {
            alert('enter correct otp');
        }
    }
    function enterPressed(e) {
        if (e.key === 'Enter') {
            checkOtp();
        }
    }



    return (
        <div className="otp-page">
            <div className="top">
                <h2>Verify +91 {props.mystate.states.enteredPhoneNumber}</h2>
                <div className="text">Waiting to automatically
                    detect an SMS sent to +91 {props.mystate.states.enteredPhoneNumber}.
                    <span className="links"> Wrong number?</span></div>
                <div className="enter-details">
                    <TextField
                        className={classes.textField2}
                        id="input-with-icon-textfield"
                        placeholder="-  -  -   -  -  -"
                        helperText="Enter 6-digit code"
                        inputProps={{
                            style: {
                                textAlign: 'center',
                                fontSize: '18px', letterSpacing: '3px'
                            }
                        }}
                        onChange={(e) => { setOtp(e.target.value) }}
                        FormHelperTextProps={{
                            style: {
                                textAlign: 'center',
                                fontSize: '16px'
                            }
                        }}
                        onKeyDown={enterPressed}
                    />
                </div>
                <div className="inform-message">
                    <label className="space-text"><span><SmsIcon className={classes.icons} /> resend sms</span>
                    {minutes === 0 && seconds === 0
                            ? '0:00'
                            :  `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
                        }</label>
                    <hr style={{ marginTop: '3px', marginBottom: '3px' }} />
                    <label className="space-text"><span><CallIcon className={classes.icons} /> call me</span>
                        {minutes === 0 && seconds === 0
                            ? '0:00'
                            :  `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
                        }</label>
                </div>
            </div>
            <div className="bottom">
                <button onClick={checkOtp}>NEXT</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(OtpPage));