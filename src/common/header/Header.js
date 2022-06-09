import React from "react";
import "./Header.css";
import logo from '../../assets/logo.svg';

function Header(props) {
    return (
        <div className="header">
            <img src={logo} alt="My logo" className="logo" />
            <button className={props.btnType3}>{props.buttonName3}</button>
            <button className={props.btnType2}>{props.buttonName2}</button>
            <button className={props.btnType} id="btn3">{props.buttonName}</button>
            
        </div>
    );
}

export default Header;