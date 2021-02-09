import React from 'react';
import { Slide } from "react-reveal";
import "./heading-style.css";


export default function Heading(props) {
    return (
      <Slide left>
        <h2 className="page-heading">{props.children}</h2>
      </Slide>
    );
  }