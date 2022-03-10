import './footer.css';
import {withRouter} from 'react-router-dom';

const Footer = (props) => {
    return (
        <div className="footer" onClick={()=>{props.history.push('/home')}}>
            <label>go back</label>
        </div>
    );
}
export default withRouter(Footer);