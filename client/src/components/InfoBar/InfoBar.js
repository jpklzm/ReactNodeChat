import React from 'react';
import './InfoBar.css';
import closeIcon from '../../icons/closeIcon.png';

const InfoBar = ({room}) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
            <a href="/"><img src={closeIcon} alt="close" /></a>
        </div>
    </div>
)

export default InfoBar;