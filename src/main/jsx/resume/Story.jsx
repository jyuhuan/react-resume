import React from "react"
import { HBox, VBox, ExpandableBoxItem } from "../core/Box"

export function Story(props) {
  return (
    <VBox className="story">
      <HBox className="head">
        <ExpandableBoxItem>{props.title}</ExpandableBoxItem>
        <div>{props.date}</div>
      </HBox>
      <div className="body">{props.children} </div>     
    </VBox>
  )
}
