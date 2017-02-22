const React = require("react")

export function Tag({tag}) {
  return <div className="tag">{tag}</div>
}

export function TagList({tags}) {
  return (
    <div className="tag-list">
      {tags.map(tag => <Tag tag={tag} />)}
    </div>
  )
}