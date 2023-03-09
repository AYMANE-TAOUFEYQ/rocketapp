import { useState, useEffect, Fragment } from 'react';
import apple from '../../assets/apple.png';
import android from '../../assets/android.png';
import star from '../../assets/star.png';
import downloadP from '../../assets/download.png';
import './popup.styles.scss';

import settings from "../../assets/settings.png";



let interval = undefined;

const Popup =({ popup, Close }) => {
    const { urlImage, rating, download, author, title, paragraph, Link_Download } = popup;
    const [verificationToggle , setVerificationToggle ] = useState(false);

    const [running, setRunning] = useState(false);
    const [progress, setProgress] = useState(0);
    const [des, setDes] = useState("");

    const res = title.replace(/ /g, '')

    // eslint-disable-next-line no-unused-vars
    function CPABuildComplete(){
        window.open(Link_Download, "_blank");
        console.log("thank you!");
    }

    const locker = () => {
        // eslint-disable-next-line no-undef
        CPABuildLock();
    }

    useEffect(() => {
        if (running) {
            interval = setInterval(() => {
            setProgress((prev) => prev + 1);
        }, 100);
        } else {
            clearInterval(interval);
        }
    }, [running]);
    
    useEffect(() => {
        if (progress === 100) {
            setRunning(false);
            clearInterval(interval);
        }
    }, [progress]);

    useEffect(() => {
        if (progress === 1) {
            setDes(`Downloading ${res}.gz`);
        } if (progress === 30) {
            setDes(`Unpacking ${res}.gz`);
        } if (progress === 80) {
            setDes("starting injection...");
        } if (progress === 98) {
            setDes("setting up final stage...");
        } if (progress === 100) {
            setTimeout(()=>{
                locker();
            }, 1000);
        }
    }, [progress, res]);


    return (
        <div className="apps__popup">

            <div className="apps__popup__body">
                <p className="apps__popup__exit" onClick={Close}>X</p>

                <div className="apps__popup__details">
                        <img
                            src={urlImage}
                            alt='item'
                            className='apps__popup__details--image'
                        />

                        <div className="apps__popup__details--icons">
                            <div className="apps__popup__details--icons-1 apps__popup__details--icons-right">
                                <img
                                    src={apple}
                                    alt='item'
                                    className='apps__main__item--icons-apple'
                                />
                                <img
                                    src={android}
                                    alt='item'
                                    className='apps__main__item--icons-android'
                                />
                            </div>

                            <div className='featured__item--rating apps__popup__details--icons-right'>
                                <img src={star} alt='rating' className='featured__item--rating--image'/><span>{rating}</span>
                            </div>

                            <div className="apps__popup__details--icons-2 apps__popup__details--icons-right">
                                <img
                                    src={downloadP}
                                    alt='item'
                                    className='apps__popup__details--icons-2-img'
                                />
                                <p className="apps__popup__details--icons-2-down">{download}+</p>
                            </div>
                        </div>

                        <div className='apps__popup__details__detail'>
                            <div className='apps__popup__details__detail--author'>Author: <span className='apps__main__item--details--author--blue'>{author}</span></div>
                            <div className='apps__popup__details__detail--title'>{title}</div>
                            <div className='apps__popup__details__detail--paragraph'>{paragraph}</div>
                        </div>

                    <div className='apps__popup__details--download'>
                        <h1 className='apps__popup__details--download--heading'>Download ready</h1>
                        <p className='apps__popup__details--download--paragraph'>Click the button below in order to start with your app download</p>
                        
                        <p className='apps__popup__details--download--link' onClick={() => {
                                                                                        setVerificationToggle (!verificationToggle);
                                                                                        setRunning(true);
                                                                                        setProgress(0);

                                                                                    }}>
                        DOWNLOAD NOW
                    </p>
                    </div>
                </div>
            </div>
            {verificationToggle&& 
                        <div className="valid">
                            <div className="valid__body">
                                <img
                                    src={settings}
                                    alt="settings"
                                    className="valid__body__image"
                                />
                                {progress<100 ? 
                                    <Fragment>
                                        <p className="valid__body__title">PROCCESSING...</p>
                                        <p className="valid__body__description" style={{ fontSize : progress >= 80 ? '1.8rem' : '2rem', width : progress >= 80 ? '24rem' : '16rem'}}>{des}</p>
                                        <div className="valid__body__progress">
                                            <div className="valid__body__progress__valid" style={{width: `${progress}%`}}></div>
                                        </div>
                                    </Fragment>:

                                    <Fragment>
                                        <p className="valid__body__title__waiting">Waiting...</p>
                                    </Fragment>
                                }
                                
                            </div>
                        </div>
            }
        </div>
    );
}
export default Popup;  


/* <p className='secondary' onClick={locker}>DOWNLOAD NOW</p> */