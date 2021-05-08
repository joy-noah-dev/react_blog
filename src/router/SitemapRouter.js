import React from 'react';
import { Route } from 'react-router';

const SitemapRouter = () => (
	<Route>
		<Route path='/' />
		<Route path='/about' />
		<Route path='/projects'>
			<Route path=':projectName'>
				<Route path='view' />
			</Route>
		</Route>
		<Route path='/contacts' />
		<Route path='/auth' />
		<Route path='*' />
	</Route>
);

export default SitemapRouter
