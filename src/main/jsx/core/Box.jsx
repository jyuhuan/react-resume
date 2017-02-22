const React = require("react")

export function ExpandableBoxItem(props) {
  return (
    <div className="expandable-box-item">
      {props.children}
    </div>
  )
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

