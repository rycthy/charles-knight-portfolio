import React from 'react';
import Project from './Project';

export default () => (
  <div>
    <div className="container__item" id="projects-header">
      <h2>Work</h2>
    </div>
    <div className="container__item" id="projects">
      <Project
        image={"https://res.cloudinary.com/dnqc6pmtp/image/upload/v1538596428/charles-knight/isaia-santoni-header.png"}
        title={"Isaia & Santoni"}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus magna id finibus commodo. Fusce et nulla vel odio ornare eleifend a in sapien. Nunc fringilla nisl vel dui elementum, ac luctus magna sagittis. Proin sed elementum sapien. In efficitur in est ac commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam feugiat rutrum elementum. Praesent pellentesque tortor lorem, rutrum accumsan justo faucibus in."}
      />
      <Project
        image={"https://res.cloudinary.com/dnqc6pmtp/image/upload/v1538598553/charles-knight/valentines-3.png"}
        title={"Client Name?"}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus magna id finibus commodo. Fusce et nulla vel odio ornare eleifend a in sapien. Nunc fringilla nisl vel dui elementum, ac luctus magna sagittis. Proin sed elementum sapien. In efficitur in est ac commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam feugiat rutrum elementum. Praesent pellentesque tortor lorem, rutrum accumsan justo faucibus in."}
      />
      <div className="container__item" id="projects-header">
      <h2>Projects</h2>
    </div>
      <Project
        image={"https://res.cloudinary.com/dnqc6pmtp/image/upload/v1538603769/charles-knight/burberry-header.png"}
        title={"Burberry Remerchandising"}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus magna id finibus commodo. Fusce et nulla vel odio ornare eleifend a in sapien. Nunc fringilla nisl vel dui elementum, ac luctus magna sagittis. Proin sed elementum sapien. In efficitur in est ac commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam feugiat rutrum elementum. Praesent pellentesque tortor lorem, rutrum accumsan justo faucibus in."}
      />
      <Project
        image={"https://res.cloudinary.com/dnqc6pmtp/image/upload/v1538604095/charles-knight/vans-header.png"}
        title={"Vans Ad Campaigns"}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus magna id finibus commodo. Fusce et nulla vel odio ornare eleifend a in sapien. Nunc fringilla nisl vel dui elementum, ac luctus magna sagittis. Proin sed elementum sapien. In efficitur in est ac commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam feugiat rutrum elementum. Praesent pellentesque tortor lorem, rutrum accumsan justo faucibus in."}
      />
    </div>
  </div>
);