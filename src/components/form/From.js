import React from "react";
import PropTypes from "prop-types";
import { Fade } from "react-reveal";

import "./form-style.css";

function Form(props) {
  return <form className={props.className}>{props.children}</form>;
}

Form.propTypes = {
  className: PropTypes.string
}

function Input(props) {
  return (
    <input
      className="input"
      type="text"
      placeholder={props.name}
      value={props.value}
      onChange={props.onChange}
      required={props.required}
    />
  );
}

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
}



function TextArea(props) {
  return (
    <textarea
      className="text-area"
      placeholder={props.name}
      value={props.value}
      onChange={props.onChange}
      required={props.required}
    />
  );
}

TextArea.propTypes = {
  name: PropTypes.string,
  value: PropTypes.value,
  onChange: PropTypes.func
}

function Invalid(props) {
  return (
    <Fade bottom collapse when={props.visibility}>
      <div className="invalid-input">{props.message}</div>
    </Fade>
  );
}

Invalid.propTypes = {
  visibility: PropTypes.bool,
  message: PropTypes.string
}

export { Form, Input, TextArea, Invalid };
