import React from "react";
import "./Projects.scss";
import { Tabs } from "antd";

import Project1 from "./Project1";
import Project2 from "./Project2";

const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: "project1",
    label: "Project 1",
    // children: "Image",
    children: <Project1 />,
  },
  {
    key: "project2",
    label: "Project 2",
    children: <Project2 />,
  },
  {
    key: "project3",
    label: "Project 3",
    children: "Content of Tab Pane 3",
  },
  {
    key: "project4",
    label: "Project 4",
    children: "Content of Tab Pane 4",
  },
  {
    key: "project5",
    label: "Project 5",
    children: "Content of Tab Pane 4",
  },
];

const Projects = () => {
  return (
    <div className="Projects" id="Projects">
      <div className="tabs_container">
        <Tabs
          defaultActiveKey="project1"
          items={items}
          onChange={onChange}
          indicatorSize={(origin) => origin - 1}
        />
      </div>
    </div>
  );
};

export default Projects;
