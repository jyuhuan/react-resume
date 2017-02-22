import React from "react"

import { HBox, VBox, ExpandableBoxItem } from "../core/Box"

export function SideInfo(props) {
  return <div className="side-column"><VBox className="side-info">{props.children}</VBox></div>
}


export function MainInfo(props) {
  return <div className="main-column"><VBox className="main-info">{props.children}</VBox></div>
}

/*
export function Resume() {
  return (
    <div className="resume-box" >
      <Project name="My Sample Project" time="2015 Spring" tags={["java", "tcp", "map-reduce"]} achievements={["achievement 1", "achievement 2"]} />
    </div>
  )
}
*/
