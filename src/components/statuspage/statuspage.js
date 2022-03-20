import './statuspage.css';

import { withRouter } from 'react-router-dom';
import Header from '../homepage/header/index';

import Footer from '../footer/footer';
import HoverIcons from '../hoverIcons/hoverIcons';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';import dp1 from '../../data/dp/dp1.jpg';

import { useEffect } from 'react';
import { connect } from 'react-redux';

/*                    <svg width="55" height="55" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="48" fill="none" stroke="rgb(16, 248, 113)" stroke-width="6" stroke-dasharray="90 8" stroke-dashoffset="0"/>
  </svg>*/
const StatusPage = (props) => {

    useEffect(()=>{
        if(props.mystate.states.loggedInUserdata.length === 0){
            props.history.push('/');
        }
        else             props.history.push('/status');
    },[]);

    let a=[1,2,3,4,5,6];

    let b=[1,2];

    return (
        <div className="statusPage">
            <Header />


            <div className="callpage-2" >
            <div className='calllog' >
                    <div className='log-left'>
                        <div>
                        <PersonIcon style={{background:'lightgrey',color:'white',borderRadius:'25px',height:'49px',width:'49px'}}/>
                        <span className='statusIcon'><AddIcon style={{color:'white',background:'#128C7E',borderRadius:'25px'}}/></span>
                        </div>
    
                        <div className="log-text">
                            <div className= "log-name">My status</div>
                            <div className="log-details">
                            <label>Tap to add status update</label>
                            </div>
                        </div>
                    </div>
                </div>
            <div className='statusLine'>Recent updates</div>

            {b.map((value,index)=>(
                
                <div className='calllog' key ={index}>
                    
                    <div className='log-left-special'>
                    <span className='log-img-block1'></span>
                    <span className='log-img-block2'></span>
                        <div className='log-img1'>
                        <img src={dp1} style={{border:"2px solid white",borderRadius:'25px',height:'49px',width:'49px'}} alt='logleft' />
                        
                        </div>
    
                        <div className="log-text">
                            <div className= "log-name">Interviewer</div>
                            <div className="log-details">
                                
                            <label>Today, 10:32 am</label>
                            </div>
                        </div>
                    </div>
                </div>
                
            
                ))}

                
            
            <div className='statusLine'>Viewed updates</div>
            {a.map((value,index)=>(
                
                <div className='calllog' key ={index}>
                    <div className='log-left'>
                        <div className='log-img2'>
                        <img src={dp1} style={{border:"2px solid white",borderRadius:'25px',height:'49px',width:'49px'}} alt='logleft' />
                        </div>
    
                        <div className="log-text">
                            <div className= "log-name">Interviewer</div>
                            <div className="log-details">
                                
                            <label>Today, 10:32 am</label>
                            </div>
                        </div>
                    </div>
                </div>
            
                ))}

                
            </div>
        <HoverIcons props = 'StatusPage'/>
        <Footer/>
        </div>
    );
}

function mapStateToProps(state, ownProps) {
    return {
        mystate: state
    };
}


export default connect(mapStateToProps,)(withRouter(StatusPage));