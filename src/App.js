import logo from './logo.svg';
import './App.css';
import Home from './modules/components/Home';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LyricsPlayer from './modules/components/LyricsPlayer/LyricsPlayer';
import { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Divider, Grid, ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import PropertiesContextProvider from './modules/context/PropertiesContext';
const theme = createTheme({
  palette: {
    primary: {
      main: "#BDBDBD",
      //  contrastText: "#fff" //button text white instead of black
    },
    secondary: {
      main: "#000"

    }

  },

})
function App() {




  return (
    <ThemeProvider theme={theme}>
      <PropertiesContextProvider>
        <Router>
          <Switch>
            <Route exact path={"/"} render={props => <Home  {...props} />} />
            <Route exact path="/player/:lyricsId" component={LyricsPlayer} />
          </Switch>

        </Router>
      </PropertiesContextProvider>
    </ThemeProvider>
  );
}

export default App;
