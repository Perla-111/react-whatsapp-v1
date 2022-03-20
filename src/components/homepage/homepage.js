import React from 'react';
import './homepage.css';
import {withRouter} from 'react-router-dom';

import Footer from '../footer/footer';
import ChatTiles from './body';
import Header from './header';

import { useEffect } from 'react';
import { connect } from 'react-redux';

const HomePage =(props) => {

        useEffect(()=>{
                if(props.mystate.states.enteredPhoneNumber === 0){
                    props.history.push('/');
                }
                else             props.history.push('/home');
            },[]);

        return(
            <div className="HomePage">

                    <Header  />
                    <ChatTiles />
                    <Footer />

            </div>
        );
    
}



function mapStateToProps(state, ownProps) {
        return {
            mystate: state
        };
    }
    

export default connect(mapStateToProps,)(withRouter(HomePage));