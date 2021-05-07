import React from 'react';
import AppRoute from 'router/AppRoute';
import { Switch } from 'react-router-dom';
import ScrollReveal from 'utils/ScrollReveal';

// Layouts
import LayoutDefault from 'modules/layout/components/LayoutDefault';

// Pages
import { Home } from 'modules/home';

const AppRouter = ({
  trackPAge,
  childRef
}) => {
  return (<ScrollReveal
    ref={childRef}
    children={() => (
      <Switch>
        <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
      </Switch>
    )} />)
}

export default AppRouter
