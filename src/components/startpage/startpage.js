import './startpage.css';
import {withRouter} from 'react-router-dom';
import dp2 from '../../data/dp/start1.png';
import StartPage2 from './startpage2';

const StartPage = (props) => {
    return (
        <div>{true?
        <div className="startPages" >
            <img onClick={()=>{props.history.push('/home')}}
            height='250px' width='250px' 
            style={{cursor:'pointer',borderRadius:'25px',marginTop:'10vh'}} src={dp2} alt='centezz' />
            <div className="footers" >
                <div className="one"> from</div>
                <div className="two">FACEBOOK</div>
                <div ><span className="three" >designed by </span>
                <span className="four">Perla Kalyan Kumar</span></div>
            </div>
        </div>:<StartPage2 />}
        </div>
    );
}
export default withRouter(StartPage);