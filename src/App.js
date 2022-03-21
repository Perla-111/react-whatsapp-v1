import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/homepage/homepage';
import Settings from './components/settings/settings';
import Profile from './components/settingspages/profile/profile';
import ChatPage from './components/chatpage/chatpage';
import StartPage from './components/startpage/startpage';
import CallPage from './components/callpage';
import StatusPage from './components/statuspage/statuspage';
import PhoneDetails from './components/verificationpages/phonedetails';
import OtpPage from './components/verificationpages/otppage';
import CameraPage from './components/camera/camera';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


function App(props) {
  return (
    <div className="App">
      <Router>
        <Switch>


          <Route path='/verify' component={PhoneDetails} ></Route> 
          <Route path='/home' component={HomePage}  ></Route>
          <Route path="/inChat/:x/:y" component={ChatPage} ></Route>
          <Route path="/settings" component={Settings} ></Route>
          <Route path='/call' component={CallPage} ></Route>
          <Route path='/status' component={StatusPage} ></Route>
          <Route path='/profile' component={Profile} ></Route>
          <Route path='/cam' component={CameraPage} ></Route>
          <Route path="/verifyotp" component={OtpPage} />
          <Route exact path='/'  ><StartPage /></Route>
          <Redirect to='/' ></Redirect>



{/*
          {props.mystate.states.loggedInUserdata.length === 0 ?
            <Route exact path='/'  ><StartPage /></Route> :
            <Redirect to='/home' component={HomePage}  ></Redirect>}

{props.mystate.states.loggedInUserdata.length === 0 ?
            <Route path='/verify' component={PhoneDetails} ></Route> :
            <Redirect to='/home' component={HomePage}  ></Redirect>}
            

            {props.mystate.states.loggedInUserdata.length === 0 ?
              <Route path="/verifyotp" component={OtpPage} />
              : <Redirect to="/home" component={HomePage} /> }
            */}

        </Switch>
      </Router>
    </div>
  );
}


function mapStateToProps(state, ownProps) {
  return {
    mystate: state
  };
}


export default connect(mapStateToProps,)(App);
