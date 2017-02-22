const React = require("react")

export function Project({name, time, tags, achievements}) {
  return (
    <div className="project-box">
      <div>{name}</div>
      <TagList tags={tags} />
    </div>
  )
}
