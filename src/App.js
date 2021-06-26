import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import './App.css';
import Home from './pages/Home';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    overflow: 'hidden'
  },
}));


function App() {
  const THEME = createMuiTheme({
    typography: {
      fontFamily: "Noto Sans KR, sans-serif",
    },
    palette: {
      primary: {
        main: '#4285f4',
      },
    },
  });
  const classes = useStyles();
  return (
    <div className="App">
      <MuiThemeProvider theme={THEME}>
        {/* Common Pages for All roles */}
        <div className={classes.root}>
          <Suspense fallback={<div></div>}>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </Suspense>
        </div>
      </MuiThemeProvider>
    </div>
  )
}
export default App;
