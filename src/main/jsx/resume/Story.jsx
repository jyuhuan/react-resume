import React from "react"
import { HBox, VBox, ExpandableBoxItem } from "../core/Box"

export function Story(props) {

  let className = "story"
  if (props.className) className = "story " + props.className

  return (
    <VBox className={className}>
      <HBox className="head">
        <ExpandableBoxItem className="title">{props.title}</ExpandableBoxItem>
        <div className="subtitle">{props.subtitle}</div>
      </HBox>
      <div className="body">{props.children} </div>     
    </VBox>
  )
}
