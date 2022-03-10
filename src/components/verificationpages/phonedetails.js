import { withRouter } from 'react-router';
import './phonedetailspage.css';

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
//import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import NativeSelect from '@material-ui/core/NativeSelect';



const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '6ch',
  },
  textField2: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom : theme.spacing(1),
    width: '20ch',
  },
    formControl: {
      margin: 'none'
        },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const PhoneDetailsPage = (props) => {

    const classes = useStyles();
    
    return (
        <div className="phone-details">
            <div className="top">
                <h2>Enter your phone number</h2>
                <div className="text">WhatsApp will send an
                SMS message to verify your phone number.
                <span className="links"> What's my number?</span></div>
                <div className="enter-details">
                <FormControl className={classes.formControl}>
        <NativeSelect
          //value={state.age}
          //onChange={handleChange}
          name="age"
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'age' ,
        style :{textAlign : 'center'}}}
        >
          <option value="India">India</option>
          <option value='CANADA'>Canada</option>
        </NativeSelect>
      </FormControl>
      
      {/*<FormControl className={classes.formControl}>
        <NativeSelect
          //value={state.age}
          //onChange={handleChange}
          name="age"
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'age' }}
        >
          <option value='+91'>+91</option>
          <option value='+1'>+1</option>
        </NativeSelect>
      </FormControl>*/}
      <div className='phn-details'>
      <TextField
        className={classes.textField}
        id="input-with-icon-textfield"
        defaultValue="91"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              +
            </InputAdornment>
          ),
          style :{textAlign : 'center'}
        }}
      />
      <TextField
        className={classes.textField2}
        id="input-with-icon-textfield"
        placeholder="phone number"
        inputProps = {{
        style :{textAlign : 'center'}
      }}
        onChange={(e)=>{console.log(e.target.value)}}
        
      />
      </div>
      
                </div>
                <div className="inform-message">
                    Carrier SMS charges may apply
                </div>
            </div>
            <div className="bottom">
                <button onClick={()=>{props.history.push('/verifyotp')}} >NEXT</button>
            </div>
        </div>
    );
}
export default withRouter(PhoneDetailsPage);