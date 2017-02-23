import React from "react"

import { HBox, ExpandableBoxItem } from "../core/Box"
import { Section } from "./Resume"
import { Story } from "./Story"

export function Education({institution, duration, degree, location, comment}) {
  let commentNode;
  if (comment) commentNode = <div className="comment">{comment}</div>

  return (
      <Story className="education" title={institution} subtitle={location}>
        <HBox className="info">
          <ExpandableBoxItem>{degree}</ExpandableBoxItem>
          <div>{duration}</div>
        </HBox>
        {commentNode}
      </Story>
  )
}