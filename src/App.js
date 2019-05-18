import React, { Component } from "react";
import "./App.css";
import Input from "./Components/Input"

class App extends Component {
  render() {
    return <div className="App">
    <h1>Weather App!</h1>
    <Input />
    </div>

  }
}

export default App;
