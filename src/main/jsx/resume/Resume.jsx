import React from "react"
import { HBox, VBox, ExpandableBoxItem } from "../core/Box"


export function Resume(props) {
  return <HBox className="resume">{props.children}</HBox>
}

export function Document(props) {
  return <VBox className="document">{props.children}</VBox>
}

export function Section(props) {
  const iconParts = props.icon.split(".")
  const iconSet = iconParts[0]
  const iconName = iconParts[1]
  let icon;

  if (iconSet == "material") icon = <i className="material-icons">{iconName}</i>
  else if (iconSet == "fontawesome") icon = <i className={`fa fa-${iconName}`} aria-hidden="true"></i>

  return (
    <div style={{display: "flex", flexDirection: "column"}} className="section">
      <HBox className="head">
        <div className="icon">{icon}</div>
        <ExpandableBoxItem className="text">{props.title}</ExpandableBoxItem>
      </HBox>
      <div className="body">{props.children} </div>     
    </div>
  )
}