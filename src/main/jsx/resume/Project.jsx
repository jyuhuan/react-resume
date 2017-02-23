import React from "react"

import { Story } from "./Story"
import { TagList } from "./Gadgets"


export function Project({title, duration, tags, achievements}) {
  return (
    <Story className="project" title={title} subtitle={duration}>
      <TagList tags={tags} />
      <ul>
        {achievements.map(a => 
          <li>{a}</li>
        )}
      </ul>
    </Story>
  )
}
