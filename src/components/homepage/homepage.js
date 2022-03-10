import React from 'react';
import './homepage.css';
import {withRouter} from 'react-router-dom';

import Footer from '../footer/footer';
import ChatTiles from './body';
import Header from './header';


class HomePage extends React.Component{

    render(){
        return(
            <div className="HomePage">

                    <Header />
                    <ChatTiles />
                    <Footer />

            </div>
        );
    }
}
export default withRouter(HomePage);