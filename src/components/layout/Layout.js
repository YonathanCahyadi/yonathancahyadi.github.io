import React from 'react';

import "./style.css";



function Layout(props) {
    return(
        <div className="layout">
            {props.children}
        </div>
    )
}

function ContentDiv(props) {
    return (
        <div className="content">
            {props.children}
        </div>
    )   
}


function NavigationSpacer(props) {
    return(
        <div className="navigation-spacer">

        </div>
    )
}

function Navigation(props) {
    return (
        <nav className="navigation-menu">
            <img className="navigation-logo" src={props.logo} alt='logo' />
            <ul className="navigation-items">
                <li className="navigation-item">
                    <a href='/' className="navigation-item-link">Home</a>
                </li>
                <li className="navigation-item">
                    <a href='/' className="navigation-item-link">About</a>
                </li>
                <li className="navigation-item">
                    <a href='/' className="navigation-item-link">Projects</a>
                </li>
                <li className="navigation-item">
                    <a href='/' className="navigation-item-link">Contact</a>
                </li>
            </ul>
        </nav>
    )
}


export {
    Layout,
    Navigation, 
    ContentDiv
}

export default {
    Navigation,
    ContentDiv
}