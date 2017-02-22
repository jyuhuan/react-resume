/**
 * @author Yuhuan Jiang
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { AppForm } from "./core/AppForm"
import {TagList, Tag} from "./resume/Gadgets"
import { Resume } from "./resume/Resume"

import { SideInfo, MainInfo } from "./resume/Skeleton"

import { Story } from "./resume/Story"

ReactDOM.render(
  (
    <AppForm>
      <Resume>
        <SideInfo>
          <span>side info 1</span>
          <span>side info 2</span>
          <span>side info 3</span>
        </SideInfo>
        <MainInfo>
          <Story title="Story Title" date="Spring 2014">
            This is a story <br/>
            This is a story <br/>
            This is a story <br/>
            This is a story <br/>
            This is a story <br/>
            This is a story <br/>
            This is a story <br/>
            This is a story 
          </Story>
          <Story title="Story Title" date="Spring 2014">
            This is a story <br/>
            This is a story <br/>
            This is a story <br/>
            This is a story <br/>
            This is a story <br/>
            This is a story <br/>
            This is a story <br/>
            This is a story 
          </Story>
          <Story title="Story Title" date="Spring 2014">
            This is a story <br/>
            This is a story <br/>
            This is a story <br/>
            This is a story <br/>
            This is a story <br/>
            This is a story <br/>
            This is a story <br/>
            This is a story 
          </Story>
        </MainInfo>
      </Resume>
    </AppForm>
  ), 
  document.getElementById('root')
);
