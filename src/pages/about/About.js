import React from 'react';
import Heading from "../../components/heading/Heading";
import Image from "../../components/image/Image";

import AboutImg from "../../assets/about.svg";
import ResumeImg from "../../assets/resume.svg";

import Resume from "../../assets/resume.pdf";

import "./about-style.css";
import { Fade } from 'react-reveal';




export default function About(props){

    return(
        <div className="about-page">
            <Heading className="heading">About</Heading>

            <div className="about-img">
                <Image src={AboutImg} alt="about-img.svg" />
            </div>

            <Fade right>

            <div className="about-text">
                <p>
                    Hi, my name is <b>Yonathan Cahyadi</b>.
                    I have a <b>Bachelor of Information Technology (Computer Science)</b> degree. 
                    I am interested in <b>Web Development, System Programming and Network Security</b>.
                </p>
            </div>
            </Fade>


                <button className="download-resume" onClick={() => window.open(Resume)}>
                    <img src={ResumeImg} alt="resume.svg" className="resume-download-img"/>
                    Resume
                </button>

        </div>
    )
}
