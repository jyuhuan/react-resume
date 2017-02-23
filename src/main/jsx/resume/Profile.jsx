import React from "react"
import { VBox } from "../core/Box"
import { LinkBar } from "./LinkBar"

export function Profile({name, otherName, bio, links}) {
  const otherNameStr = []
  if (otherName) otherNameStr.push(otherName)
  return (
    <VBox className="profile">
      <VBox className="name-box">
        <div className="name">{name}</div>
        {otherNameStr.map(n => <div className="other-name">{n}</div>)}
      </VBox>
      <div className="bio">{bio}</div>
      <LinkBar links={links} />
    </VBox>
  )
}
