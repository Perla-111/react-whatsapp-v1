import './camera.css';

import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

import Footer from '../footer/footer';
import { withRouter } from 'react-router-dom';

import cx from 'classnames';
import { useEffect } from 'react';
import { connect } from 'react-redux';

function CameraPage(props) {

    useEffect(()=>{
        if(props.mystate.states.loggedInUserdata.length === 0){
            props.history.push('/');
        }
        else             props.history.push('/cam');
    },[]);

    const [isShowVideo, setIsShowVideo] = useState(false);
    const [buttonName, setButtonName] = useState('Start');
    const videoElement = useRef(null);
    
    const videoConstraints = {
        width: 375,
        height: 667,
        facingMode: "user"
    }

    const startCam = () => {
        if(isShowVideo){
            setIsShowVideo(false);
            setButtonName('Start');
        }
        else{
            setIsShowVideo(true);
            setButtonName('Stop');

        }
    }
/*
    const stopCam = () => {
        let stream = videoElement.current.stream;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        setIsShowVideo(false);
    }
    */

    return (
        <div className="camPage">
        
            <div className="camView">
                {isShowVideo &&
                    <Webcam audio={false} ref={videoElement} videoConstraints={videoConstraints} />
                }
            </div>
            <button className={cx({'btn1':isShowVideo,'btn2':!isShowVideo})} onClick={startCam}>{buttonName}</button>
            {/*<button className='btn2' onClick={stopCam}>Stop</button>*/}
        
        <Footer />
        </div>
    );
};


function mapStateToProps(state, ownProps) {
    return {
        mystate: state
    };
}


export default connect(mapStateToProps,)(withRouter(CameraPage));