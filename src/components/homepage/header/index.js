import './index.css';

import { withRouter } from 'react-router-dom';


const Header = (props) => {
    return (
        <div className="header1" >

        <div className="header_title">
            <label  >WhatsApp</label>
            <label >
            <i className="bi bi-search one"></i>
            <i className="bi bi-three-dots-vertical"></i>
            </label>                        
        </div>


        <div className="header_menu">  
            <div className="camera" >
            <label >
                <i className="bi bi-camera"></i>
            </label>
            </div>                  
               
            <div className="spread">
            <label onClick={()=>{props.history.push('/home')}}>CHATS</label>
            <label>STATUS</label>
            <label onClick={()=>{props.history.push('/call')}}>CALLS</label>
            </div>
        </div>
        </div>
    );
}
export default withRouter(Header);