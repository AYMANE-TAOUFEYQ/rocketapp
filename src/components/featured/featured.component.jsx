import { useState, useEffect } from "react";


import FeaturedItem from '../featured-item/featured-item.component';
import Popup from '../popup/popup.component';

import DATA from '../../store/data';

import './featured.styles.scss';



const Featured = () =>{
    const [apps, setApps] = useState([]);
    const [popupContent, setPopupContent] = useState([]);
    const [popupToggle , setPopupToggle ] = useState(false);

    const [items, setItems] = useState();


    useEffect(()=>{
        setApps(DATA);
    },[]);

    const changeContent = (post) => {
        setPopupContent([post]);
        setPopupToggle (!popupToggle);
    };





    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
    });
    const setDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth,
        })
    }

    //this in load page
    useEffect(() => {
        if (window.innerWidth>650) {
            setItems(5);
        } else if(window.innerWidth>500){
            setItems(4);
        } else if (window.innerWidth>370) {
            setItems(3);
        } else if (window.innerWidth>200) {
            setItems(2);
        }
    }, []);

    //and here if if page is get smaller or bigger
    useEffect(() => {
        window.addEventListener('resize', setDimension);

        return(() => {
            if (screenSize.dynamicWidth>650) {
                setItems(5);
            } else if(screenSize.dynamicWidth>500){
                setItems(4);
            } else if (screenSize.dynamicWidth>370) {
                setItems(3);
            } else if (screenSize.dynamicWidth>200) {
                setItems(2);
            }
            window.removeEventListener('resize', setDimension);
        })
    }, [screenSize]);


    return(
        <div className='featured'>
            <div className='featured__body'>
                <h3 className='featured__title'>Featured apps</h3>
                <div className='featured__items'>
                    {apps.map((post, index) => index >= items ? console.log(':) welcome') : <FeaturedItem key={index} post={post} changeContent={changeContent} />)}
                </div>
            </div>
            {popupToggle&&popupContent.map((popup) => <Popup popup={popup} Close={changeContent} />)}
        </div>
    );
}

export default Featured;