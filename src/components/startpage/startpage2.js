import { withRouter } from 'react-router';
import './startpage2.css';

import start2 from '../../data/dp/start2.png';

const StartPage2 = (props) => {
    return (
        <div className="startpage-2">
            <div className="top">
                <div className="header">
                    <h1>Welcome to WhatsApp</h1>
                </div>
                <div className="brand">
                    <img src={start2} height='250px' width='250px' alt='start2-pic'  />
                </div>
                <div className="agreement">
                    <label>Read our <span className="links">Privacy Policy</span>. Tap 
                    "Agree and continue" to accept the 
                    <span className="links"> Terms of Service</span>.</label><br/>
                    
                        <button className="button" onClick={()=>{props.history.push('/verify')}}
                         >AGREE AND CONTINUE</button>
                    
                </div>

            </div>
            <div className="footers">
                <label className="footer1">from</label><br/>
                <label className="footer2" >FACEBOOK</label>
            </div>
        </div>
    );
}
export default withRouter(StartPage2);