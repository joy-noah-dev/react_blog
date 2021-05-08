import React from 'react';
import { Switch, Route } from 'react-router';

const SitemapRouter = () => (
	<Switch>
		<Route path='/' />
		<Route path='/home' />
		<Route path='/about' />
		<Route path='/projects'>
			<Route path=':projectName'>
				<Route path='view' />
			</Route>
		</Route>
		<Route path='/contacts' />
		<Route path='/auth' />
		<Route path='*' />
	</Switch>
);

export default SitemapRouter
