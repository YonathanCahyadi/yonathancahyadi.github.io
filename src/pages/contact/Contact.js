import React, { useState } from "react";

import Button from "../../components/button/Button";
import { Form, Input, Invalid, TextArea } from "../../components/form/From";
import Heading from "../../components/heading/Heading";

import "./contact-style.css";

export default function ContactPage(props) {
  const [email, setEmail] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);

  const [subject, setSubject] = useState("");
  const [subjectInvalid, setSubjectInvalid] = useState(false);

  const [message, setMessage] = useState("");
  const [messageInvalid, setMessageInvalid] = useState(false);

  const isEmpty = (str) => {
    return str.split(" ").join("").length === 0;
  };

  const checkEmail = (e) => {
    if (!isEmpty(e)) {
      if (e.includes("@")) {
        setEmailInvalid(false);
        return true;
      }
    }
    setEmailInvalid(true);
    return false;
  };

  const checkSubject = (e) => {
    if (!isEmpty(e)) {
      setSubjectInvalid(false);
      return true;
    }

    setSubjectInvalid(true);
    return false;
  };

  const checkMessage = (e) => {
    if (!isEmpty(e)) {
      setMessageInvalid(false);
      return true;
    }

    setMessageInvalid(true);
    return false;
  };

  const handleEmailChange = (e) => {
    checkEmail(e);
    setEmail(e);
  };

  const handleSubjectChange = (e) => {
    checkSubject(e);
    setSubject(e);
  };

  const handleMessageChange = (e) => {
    checkMessage(e);
    setMessage(e);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(email, subject, message);
  };

  return (
    <div className="contact-page">
      <Heading>Contact</Heading>
      <Form className="form">
        <Input
          name="E-mail"
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
        />
        <Invalid message="*invalid e-mail" visibility={emailInvalid} />

        <Input
          name="Subject"
          value={subject}
          onChange={(e) => handleSubjectChange(e.target.value)}
        />
        <Invalid
          message="*invalid subject, cannot be empty"
          visibility={subjectInvalid}
        />

        <TextArea
          name="Your message"
          value={message}
          onChange={(e) => handleMessageChange(e.target.value)}
        />
        <Invalid
          message="*invalid message, cannot be empty"
          visibility={messageInvalid}
        />

        <Button onClick={(e) => sendEmail(e)}>Submit</Button>
      </Form>
    </div>
  );
}
