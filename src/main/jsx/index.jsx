/**
 * @author Yuhuan Jiang
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Profile } from "./resume/Profile"
import { Education } from "./resume/Education"
import { Project } from "./resume/Project"
import { Experience } from "./resume/Experience"
import { Skills } from "./resume/Skills"
import { TagList, Tag } from "./resume/Gadgets"
import { Resume, Section, Document } from "./resume/Resume"
import { SideInfo, MainInfo } from "./resume/Skeleton"
import { Story } from "./resume/Story"
import { resume } from "../resources/resume"


let educationsSection
if (resume.educations) {
  educationsSection = (
    <Section icon="material.school" title="Education" >
      {resume.educations.map(e => 
        <Education 
            institution={e.institution} 
            location={e.location} 
            degree={e.degree}
            duration={e.duration}
            comment={e.comment}
        />
      )}
    </Section>
  )
}

let projectSection
if (resume.projects) {
  projectSection = (
    <Section icon="material.code" title="Projects" >
      {resume.projects.map(p => 
        <Project title={p.title} duration={p.duration} tags={p.tags} achievements={p.achievements} />
      )}
    </Section>
  )
}

let experiencesSection
if (resume.experiences) {
  experiencesSection = (
    <Section icon="material.work" title="Experience" >
      {resume.experiences.map(e =>
        <Experience title={e.title} location={e.location} duration={e.duration} employer={e.employer} duty={e.duty} />
      )}
    </Section>
  )
}

ReactDOM.render(
  (
      <Resume>
        <SideInfo>
          <Profile name={resume.name} otherName={resume["other-name"]} bio={resume.bio} links={resume.links} />
          <Skills>
          </Skills>
        </SideInfo>
        <MainInfo>
          <Document>
            {educationsSection}
            {projectSection}
            {experiencesSection}
          </Document>
        </MainInfo>
      </Resume>
  ), 
  document.getElementById('root')
);
