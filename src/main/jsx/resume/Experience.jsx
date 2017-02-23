import React from "react"

import { Story } from "./Story"

export function Experience({title, duration, location, employer, duty}) {
  return (
    <Story className="experience" title={title} subtitle={duration}>
      <div className="employer">{employer}</div>
      <div className="duty">{duty}</div>
    </Story>
  )
}
