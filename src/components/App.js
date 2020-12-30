import React from "react";
import Header from "./elements/Header";
import Home from "./Home";
import {Router} from '@reach/router'
import { GlobalStyle } from "./styles/GlobalStyle";
import Movie from "../components/Movie";
import NotFound from "../components/NotFound";

const App = () => (
  <>
    <Header />
    <Router>

    <Home path="/" />
    <Movie path="/:movieId" />
    <NotFound default />
    </Router>
    <GlobalStyle />
  </>
);

export default App;
