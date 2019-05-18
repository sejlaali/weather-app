import React, { Component } from "react";
import "./Components.css"
import axios from "axios";
import WeatherDetails from "./WeatherDetails"

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      city: "",
      currentTemp: "",
      description: "",
      minTemp: "",
      maxTemp:"",
      icon: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(evt) {
    this.setState({
      value: evt.currentTarget.value
    });
  }

  async handleSubmit(evt) {
    let weatherUrl =
      "http://api.openweathermap.org/data/2.5/weather?&units=imperial&q=";
    let appId = "&APPID=7603679594054f43e107dc12c7368816";
    let value = evt.currentTarget.value;
    evt.preventDefault();
    const res = await axios(weatherUrl + [this.state.value] + appId);
    let iconImage = ("http://openweathermap.org/img/w/" + res.data.weather[0].icon + ".png")
    this.setState({
        city: res.data.name,
        currentTemp: res.data.main.temp,
        description: res.data.weather[0].description,
        minTemp: res.data.main.temp_min,
        maxTemp: res.data.main.temp_max,
        icon: iconImage,
        value: ""
    })
  }

  render() {
    return (
        <div>
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="location"
          value={this.state.value}
          placeholder="Type in City or Zip"
          onChange={this.handleInput}
        />
        <button>Submit</button>
      </form>
      <WeatherDetails info={this.state.city} />
      <WeatherDetails info={this.state.currentTemp} />
      <WeatherDetails info={this.state.description} />
      <WeatherDetails info={this.state.minTemp} />
      <WeatherDetails info={this.state.maxTemp} />
      <WeatherDetails image={this.state.icon} />
      </div>
    )
  }
}

export default Input;