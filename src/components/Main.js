import React from 'react';
import Frame from './Frame';
import Top from './Top';
import Bio from './Bio';
import Projects from './Projects';
import Footer from './Footer';

export default () => (
	<div>
		<Frame />
		<div className="container">
			<Top />
			<Bio />
			<Projects />
		</div>
		<Footer />
	</div>
);
