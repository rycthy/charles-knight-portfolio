import React from 'react';

export default (props) => (
  <div id="projects__item">
    <div id="header-image">
      <img src={props.image} />
    </div>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
    <br />
    <p><a target="_blank" href={props.link}>{props.linkText} →</a></p>
  </div>
)