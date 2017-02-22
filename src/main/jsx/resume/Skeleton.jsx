import React from "react"

import { HBox, VBox, ExpandableBoxItem } from "../core/Box"

export function SideInfo(props) {
  return <VBox><VBox className="side-info">{props.children}</VBox></VBox>
}


export function MainInfo(props) {
  return <VBox><VBox className="main-info">{props.children}</VBox></VBox>
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
