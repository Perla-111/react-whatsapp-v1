import './footer.css';
import {withRouter} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';

const Footer = (props) => {
    return (
        <div className="footer" onClick={()=>{props.history.push('/home')}}>
        < MenuIcon style={{fontSize : '30px'}} />
            <HomeOutlinedIcon style={{fontSize : '30px'}}/>
            <ArrowBackIosOutlinedIcon style={{fontSize : '30px'}}/>
        </div>
    );
}
export default withRouter(Footer);