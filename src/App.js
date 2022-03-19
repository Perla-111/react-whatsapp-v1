import './App.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
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

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route  path='/home' component={HomePage}  ></Route>
        <Route path="/inChat" component={ChatPage} ></Route>
        <Route path="/settings" component={Settings} ></Route>
        <Route path='/call' component={CallPage} ></Route>
        <Route path='/status' component={StatusPage} ></Route>
        <Route path='/verify' component={PhoneDetails} ></Route>
        <Route path="/verifyotp" component={OtpPage} />
        <Route path='/profile' component={Profile} ></Route>
        <Route path='/cam' component={CameraPage} ></Route>
        <Route exact path='/'  ><StartPage/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
