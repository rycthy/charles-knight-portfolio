import React from 'react';
import Project from './Project';

export default () => (
  <div>
    <div className="container__item" id="projects-header">
      <h2>Projects</h2>
    </div>
    <div className="container__item" id="projects">
      <Project />
      <Project />
      <Project />
    </div>
  </div>
);