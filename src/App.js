import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";

import DataVisualizer from "./components/dataVisualizer";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <DataVisualizer />
      </React.Fragment>
    );
  }
}

export default App;
