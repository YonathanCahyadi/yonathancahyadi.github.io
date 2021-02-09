import React, { lazy } from "react";

import logo from "./assets/yonathan-cahyadi-logo.svg";

import { Layout, Navigation, ContentDiv } from "./components/layout/Layout";

import HomePage from "./pages/home/Home";
import ContactPage from "./pages/contact/Contact";

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Navigation logo={logo} />
        <ContentDiv primary id="home">
            Home
          <HomePage />
        </ContentDiv>
        <ContentDiv id="about">
            About
          <HomePage />
        </ContentDiv>
        <ContentDiv primary id="projects">
            Projects
          <HomePage />
        </ContentDiv>
        <ContentDiv id="contact">
            Contacts
          <ContactPage />
        </ContentDiv>
      </Layout>
    );
  }
}

export default App;
