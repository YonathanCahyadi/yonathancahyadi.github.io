import React from 'react';
import PropTypes from 'prop-types';

import "./style.css";

export default function Button(props){

    return(
            <button className={"button " + (props.primary ? "primary" : "secondary")} onClick={props.onClick}>
                {props.children}
            </button>
    )
}

Button.propTypes = {
    primary: PropTypes.bool,
    onClick: PropTypes.func
}

Button.defaultProps = {
    primary: false,
    onClick: null
}
