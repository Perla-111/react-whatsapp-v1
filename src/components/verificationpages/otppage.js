import './otppage.css';

import {withRouter} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import SmsIcon from '@material-ui/icons/Sms';
import CallIcon from '@material-ui/icons/Call';

const useStyles = makeStyles((theme) => ({
   
    textField2: {
      margin: theme.spacing(1),
      marginBottom : theme.spacing(3),
      width: '20ch',
    },
    icons : {
        marginRight : theme.spacing(2)
    }
    }));
    
const OtpPage = (props) => {

    const classes = useStyles();

    return (
        <div className="otp-page">
            <div className="top">
                <h2>Verify +91 9876543210</h2>
                <div className="text">Waiting to automatically 
                detect an SMS sent to +91 9876543210.
                <span className="links"> Wrong number?</span></div>
                <div className="enter-details">
                <TextField
        className={classes.textField2}
        id="input-with-icon-textfield"
        placeholder="-  -  -   -  -  -"
        helperText="Enter 6-digit code"
        inputProps={{style: { textAlign: 'center',
        fontSize : '18px', letterSpacing : '3px' }}} 
        onChange={(e)=>{console.log(e.target.value)}}
        FormHelperTextProps={{
            style: {
              textAlign: 'center',
              fontSize : '16px'
            }
          }}
      />
                </div>
                <div className="inform-message">
                    <label className="space-text"><span><SmsIcon className={classes.icons} /> resend sms</span>1:02</label>
                    <hr style={{marginTop:'3px',marginBottom : '3px'}}/>
                    <label className="space-text"><span><CallIcon className={classes.icons}/> call me</span>1:02</label>
                </div>
            </div>
            <div className="bottom">
                <button onClick={()=>{props.history.push('/')}}>NEXT</button>
            </div>
        </div>
    );
}
export default withRouter(OtpPage);