import React, { lazy } from "react";
import styled from "styled-components";

import logo from "./assets/yonathan-cahyadi-logo.svg";

import { Layout, Navigation, ContentDiv } from "./components/layout/Layout";

import HomePage from "./components/pages/Home";

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Navigation logo={logo} />
        <ContentDiv id="home">
            Home
          <HomePage />
        </ContentDiv>
        <ContentDiv id="about">
            About
          <HomePage />
        </ContentDiv>
        <ContentDiv id="projects">
            Projects
          <HomePage />
        </ContentDiv>
        <ContentDiv id="contact">
            Contacts
          <HomePage />
        </ContentDiv>
      </Layout>
    );
  }
}

export default App;
