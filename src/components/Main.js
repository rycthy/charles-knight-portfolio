import React from 'react';
import Frame from './Frame';
import Top from './Top';
import Bio from './Bio';
import Projects from './Projects';

export default () => (
	<div>
		<Frame />
		<div className="container">
			<Top />
			<Bio />
			<Projects />
		</div>
	</div>
);
