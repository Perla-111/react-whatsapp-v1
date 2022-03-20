import { withRouter } from "react-router-dom"
import './chatpage.css';

import Footer from '../footer/footer';
import ChatBody from "./body/chatbody";
import ChatHeader from "./header/chat-header";

import { useEffect } from 'react';
import { connect } from 'react-redux';

const ChatPage = (props) => {

    
    useEffect(()=>{
        if(props.mystate.states.loggedInUserdata.length === 0){
            props.history.push('/');
        }
    },[]);
    

    return (
        <div className="chat">

            <ChatHeader />

            <ChatBody />

            <Footer />
        </div>
    )
}

function mapStateToProps(state, ownProps) {
    return {
        mystate: state
    };
}


export default connect(mapStateToProps,)(withRouter(ChatPage));