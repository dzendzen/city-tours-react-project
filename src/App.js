import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "./components/NavBar/NavBar.js";
import TourList from "./components/TourList/TourList";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <TourList />
      </>
    );
  }
}

export default App;
