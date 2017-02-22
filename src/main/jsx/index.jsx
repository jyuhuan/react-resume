/**
 * @author Yuhuan Jiang
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { AppForm } from "./core/AppForm"
import {TagList, Tag} from "./resume/Gadgets"
import { Resume, Section, Document } from "./resume/Resume"

import { SideInfo, MainInfo } from "./resume/Skeleton"

import { Story } from "./resume/Story"

ReactDOM.render(
  (
      <Resume>
        <SideInfo>
          <Section icon="material.school" title="Education" >child</Section>
          <span>side info 1</span>
          <span>side info 2</span>
          <span>side info 3</span>
        </SideInfo>
        <MainInfo>
          <Document>
            <Section icon="material.school" title="Education" >
              <Story title="University of Pittsburgh" date="Aug. 2014 – Dec. 2017 (expected)"></Story>
            </Section>
            <Section icon="material.school" title="Education" >
              <Story title="University of Pittsburgh" date="Aug. 2014 – Dec. 2017 (expected)"></Story>
            </Section>
            <Section icon="material.school" title="Education" >
              <Story title="University of Pittsburgh" date="Aug. 2014 – Dec. 2017 (expected)"></Story>
            </Section>
            <Section icon="material.school" title="Education" >
              <Story title="University of Pittsburgh" date="Aug. 2014 – Dec. 2017 (expected)"></Story>
            </Section>
          </Document>
        </MainInfo>
      </Resume>
  ), 
  document.getElementById('root')
);
