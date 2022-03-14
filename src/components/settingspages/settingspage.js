import React from 'react';
import './settingspage.css';

import {withRouter } from 'react-router-dom';

class SettingsPage extends React.Component{

    render(){
        return(
            <div className="SettingsPage">
                <div className="header">
            <p>this is settings page</p>
            <button className="btn btn-info" 
            onClick={()=>{this.props.history.push('/')}}
            > go to homepage</button>
            </div>
            </div>
        );
    }
}
export default withRouter(SettingsPage);