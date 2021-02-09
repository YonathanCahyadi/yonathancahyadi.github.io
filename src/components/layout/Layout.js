import React, { useEffect, createRef, useCallback, useState } from "react";
import { Link } from "react-scroll";
import { Fade } from "react-reveal";
import "./style.css";

function Layout(props) {
  return <div className="layout">{props.children}</div>;
}

function ContentDiv(props) {
  return (
    <Fade>
      <div className="content" id={props.id ?? "content-default-id"}>
        {props.children}
      </div>
    </Fade>
  );
}

function NavigationSpacer(props) {
  return <div className="navigation-spacer" />;
}

function Navigation(props) {
  const duration = 300;
  const [offset, setOffset] = useState(78.48);
  const navRef = createRef();

  // update the offset for scroller spy
  useEffect(() => {
    setOffset(navRef.current.clientHeight);
  }, [navRef]);

  return (
    <div className="navigation" ref={navRef}>
      <nav className="navigation-menu">
        <img className="navigation-logo" src={props.logo} alt="logo" />
        <ul className="navigation-items">
          <li className="navigation-item">
            <Link
              activeClass="navigation-active-link"
              to="home"
              className="navigation-item-link"
              spy={true}
              smooth={true}
              offset={-offset}
              duration={duration}
            >
              Home
            </Link>
          </li>
          <li className="navigation-item">
            <Link
              activeClass="navigation-active-link"
              to="about"
              className="navigation-item-link"
              spy={true}
              smooth={true}
              offset={-offset}
              duration={duration}
            >
              About
            </Link>
          </li>
          <li className="navigation-item">
            <Link
              activeClass="navigation-active-link"
              to="projects"
              className="navigation-item-link"
              spy={true}
              smooth={true}
              offset={-offset}
              duration={duration}
            >
              Projects
            </Link>
          </li>
          <li className="navigation-item">
            <Link
              activeClass="navigation-active-link"
              to="contact"
              className="navigation-item-link"
              spy={true}
              smooth={true}
              offset={-offset}
              duration={duration}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <NavigationSpacer />
    </div>
  );
}

export { Layout, Navigation, ContentDiv };

export default {
  Navigation,
  ContentDiv,
};
