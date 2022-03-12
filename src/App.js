import './App.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './components/homepage/homepage';
import Settings from './components/settings/settings';
import ChatPage from './components/chatpage/chatpage';
import StartPage from './components/startpage/startpage';
import CallPage from './components/callpage';
import PhoneDetails from './components/verificationpages/phonedetails';
import OtpPage from './components/verificationpages/otppage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route  path='/home' component={HomePage}  ></Route>
        <Route path="/inChat" component={ChatPage} ></Route>
        <Route path="/settings" component={Settings} ></Route>
        <Route path='/call' component={CallPage} ></Route>
        <Route path='/verify' component={PhoneDetails} ></Route>
        <Route path="/verifyotp" component={OtpPage} />
        <Route exact path='/'  ><StartPage/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
