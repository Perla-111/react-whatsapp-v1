import { withRouter } from "react-router-dom"
import './chatpage.css';

import Footer from '../footer/footer';
import ChatBody from "./body/chatbody";
import ChatHeader from "./header/chat-header";


const ChatPage = (props) => {

    return (
        <div className="chat">

            <ChatHeader />

            <ChatBody />

            <Footer />
        </div>
    )
}
export default withRouter(ChatPage);