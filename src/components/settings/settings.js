import './settings.css';

import {withRouter} from 'react-router-dom';

const Settings = (props) =>{
    return(
        <div className='settingsPage'>
            <div className='settingsHeader'>
                <label className='backIcon' onClick={()=>{props.history.push('/home')}}>back icon</label>
                <label>Settings</label>
            </div>
            <div className='settingsProfile'>
                <label>Profile Name </label>
                <label>icon here</label>
            </div>
            <div className='settingsBody'>
                <div className="bodycontent">
                    <label>content 1</label>
                    <label>content 2</label>
                </div>
                <div className="bodycontent">
                    <label>content 1</label>
                    <label>content 2</label>
                </div>
            </div>
            <div className='settingsFooter'>
                <label className='footerheader'>from</label><br/>
                <label className='footerBrand'>icon Meta</label>
            </div>
        </div>
    );
}
export default withRouter(Settings)