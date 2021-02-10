import React from "react";
import Heading from "../../components/heading/Heading";
import { Cards } from "../../components/card/Card";
import ProjectsData from "../../data/projects-datas";

import "./projects-style.css";

export default function ProjectsPage(props) {
  return (
    <div className="projects-page">
      <Heading>Projects</Heading>
      <Cards className="projects-card" datas={ProjectsData} />
    </div>
  );
}
