import React, { Component } from "react";
import "./Components.css";
import axios from "axios";
import WeatherDetails from "./WeatherDetails";
import moment from "moment";

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      city: "",
      currentTemp: "",
      description: "",
      minTemp: "",
      maxTemp: "",
      icon: "",
      sunrise: "",
      sunset: ""
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
    let iconImage =
      "http://openweathermap.org/img/w/" + res.data.weather[0].icon + ".png";
    let surise = moment.unix(res.data.sys.sunrise).format("HH:mm a");
    let sunset = moment.unix(res.data.sys.sunset).format("HH:mm a");

    this.setState({
      city: res.data.name,
      currentTemp: res.data.main.temp + "°",
      description: res.data.weather[0].description,
      minTemp: res.data.main.temp_min + "°",
      maxTemp: res.data.main.temp_max + "°",
      icon: iconImage,
      sunrise: surise,
      sunset: sunset,
      value: ""
    });
  }

  render() {
    return (
      <div className="weather">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="location"
            value={this.state.value}
            placeholder="City or Zipcode"
            onChange={this.handleInput}
          />
          <button>Submit</button>
        </form>
        <div className="left-column">
          <h2 className="temp">
            <WeatherDetails info={this.state.currentTemp} />
          </h2>
          <h2 className="city">
            <WeatherDetails info={this.state.city} />
          </h2>
          <h2 className="description">
            <WeatherDetails info={this.state.description} />
            <WeatherDetails image={this.state.icon} />
          </h2>
        </div>
        <div className="right-column">
          <h2>
            {" "}
            Min temp:
            <WeatherDetails info={this.state.minTemp} />
          </h2>
          <h2>
            {" "}
            Max temp:
            <WeatherDetails info={this.state.maxTemp} />
          </h2>
          <h2>
            {" "}
            Sunrise:
            <WeatherDetails info={this.state.sunrise} />
          </h2>
          <h2>
            {" "}
            Sunset:
            <WeatherDetails info={this.state.sunset} />
          </h2>
        </div>
      </div>
    );
  }
}

export default Input;
