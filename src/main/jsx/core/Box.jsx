const React = require("react")

export function ExpandableBoxItem(props) {
  let className = "expandable-box-item"
  if (props.className) className += " " + props.className
  return <div className={className}>{props.children}</div>
}

export function HBox(props) {
  let className = "hbox"
  if (props.className) className = "hbox " + props.className
  return <div className={className}>{props.children}</div>
  
}

export function VBox(props) {
  let className = "vbox"
  if (props.className) className = "vbox " + props.className
  return <div className={className}>{props.children}</div>
}

