import React from "react";
import { Fade } from "react-reveal";

import "./form-style.css";

function Form(props) {
  return <form className={props.className}>{props.children}</form>;
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

function Invalid(props) {
  return (
    <Fade bottom collapse when={props.visibility}>
      <div className="invalid-input">{props.message}</div>
    </Fade>
  );
}


export { Form, Input, TextArea, Invalid };
