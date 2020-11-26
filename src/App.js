import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import routes from "./Components/routes";
import Loading from "./Components/Loading";
import Layout from "./Components/layout";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

//-------------------------------------

let theme = createMuiTheme({});

theme = responsiveFontSizes(theme);

const App = React.memo(() => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Switch>
        <Route path="/">
          <Layout>
            {routes.map((route, i) => {
              return (
                <Route key={i} exact trict path={route.path}>
                  <Suspense fallback={<Loading />}>
                    <route.component />
                  </Suspense>
                </Route>
              );
            })}
          </Layout>
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
));

export default App;
