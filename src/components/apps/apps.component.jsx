
import { useState, useEffect } from "react";

import Item from '../item/item.component';
import SearchBox from "../search-box/search-box.component";
import Popup from '../popup/popup.component';

import DATA from '../../store/data';

import './apps.styles.scss';



export default function  Apps () {
    const [apps, setApps] = useState([]);
    const [popupContent, setPopupContent] = useState([]);
    const [popupToggle, setPopupToggle] = useState(false);
    const [searchField, setSearchField] = useState('');


    useEffect(() => {
            setApps(DATA);
    }, []);

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    };

    const filterApps = apps.filter((apps) => {
        return apps.title.toLocaleLowerCase().includes(searchField);
    });

    const changeContent = (post) => {
        setPopupContent([post]);
        setPopupToggle(!popupToggle);
    };

    return (
        <div className='apps'>
            <div className='apps__body'>

                <div className='apps__header'>
                    <h1 className='apps__header__title'>All apps</h1>
                    <SearchBox placeholder='Search for apps...' onSearchHandler={onSearchChange} />
                </div>

                <div className='apps__main'>
                    <div className='apps__main__items'>
                        {filterApps.map((post, index) => <Item post={post} key={index} changeContent={changeContent} />)}
                    </div>
                </div>

            </div>

            {popupToggle && popupContent.map((popup, index) => <Popup key={index} popup={popup} Close={changeContent} />)}
        </div>
    );
}



