import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Root from './container/root';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
function Router() {
  return (
    <HashRouter>
      <Switch>
        <ThemeProvider theme={theme}>
          <Route path="/" exact>
            <Root />
          </Route>
        </ThemeProvider>
      </Switch>
      {/* 重定向到首页 */}
      <Redirect to="/" />
    </HashRouter>
  );
}

export default Router;
