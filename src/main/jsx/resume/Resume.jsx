import React from "react"
import { HBox, VBox, ExpandableBoxItem } from "../core/Box"


export function Resume(props) {
  return (
    <HBox className="resume">{props.children}</HBox>
  )
}
