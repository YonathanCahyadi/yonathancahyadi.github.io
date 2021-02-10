import React from "react";
import PropTypes from "prop-types";

import "./button-style.css";

export default function Button(props) {
  return (
    <button
      className={"button " + (props.primary ? "primary" : "secondary")}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  primary: PropTypes.bool,
  onClick: PropTypes.func
};

