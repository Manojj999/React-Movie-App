import React from "react";
import Header from "./elements/Header";
import Home from "./Home";
import { GlobalStyle } from './styles/GlobalStyle'


const App = () => (
  <div>
    <Header /> 
    <Home />
    <GlobalStyle />
  </div>
);

export default App;
