import { useState, useEffect } from "react";


import FeaturedItem from '../featured-item/featured-item.component';
import Popup from '../popup/popup.component';

import DATA from '../../store/data';

import './featured.styles.scss';



const Featured = () =>{
    const [apps, setApps] = useState([]);
    const [popupContent, setPopupContent] = useState([]);
    const [popupToggle , setPopupToggle ] = useState(false);


    const [items,setItems] = useState(5);

    useEffect(()=>{
        setApps(DATA);
    },[]);

    const changeContent = (post) => {
        setPopupContent([post]);
        setPopupToggle (!popupToggle);
    };


    
    return(
        <div className='featured'>
            <div className='featured__body'>
                <h3 className='featured__title'>Featured apps</h3>
                <div className='featured__items'>
                    {apps.map((post, index) => index >= items ? console.log(false) : <FeaturedItem key={index} post={post} changeContent={changeContent} />)}
                </div>
            </div>
            {popupToggle&&popupContent.map((popup) => <Popup popup={popup} Close={changeContent} />)}
        </div>
    );
}

export default Featured;