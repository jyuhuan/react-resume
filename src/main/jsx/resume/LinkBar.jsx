import React from "react"

import { HBox, VBox, ExpandableBoxItem } from "../core/Box"

export function LinkBar({links}) {

  /**
   * Supported links
   *  - GitHub
   *  - LinkedIn
   *  - Website
   *  - Email
   *  - VCF Card
   *  - PDF Resume
   */

  let githubLink
  let linkedInLink
  let websiteLink
  let emailLink
  let vcfCardLink
  let pdfResumeLink

  if (links["github"])     githubLink    = <a href={links["github"]}><i className="fa fa-github" aria-hidden="true"></i></a>
  if (links["linkedin"])   linkedInLink  = <a href={links["linkedin"]}><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
  if (links["website"])    websiteLink   = <a href={links["website"]}><i className="fa fa-globe" aria-hidden="true"></i></a>
  if (links["email"])      emailLink     = <a href={links["email"]}><i className="fa fa-envelope" aria-hidden="true"></i></a>
  if (links["vcf-card"])   vcfCardLink   = <a href={links["vcf-card"]}><i className="fa fa-address-card" aria-hidden="true"></i></a>
  if (links["resume-pdf"]) pdfResumeLink = <a href={links["resume-pdf"]}><i className="fa fa-file-text" aria-hidden="true"></i></a>
  

  return (
    <HBox className="link-bar">
      {githubLink}
      {linkedInLink}
      {websiteLink}
      {emailLink}
      {vcfCardLink}
      {pdfResumeLink}
    </HBox>
  )
}
