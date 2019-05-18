import React, {Component} from 'react'
import "./Components.css"

class WeatherDetails extends Component {

render() {
    return (
        <div className="weather-details">
            <h2>{this.props.info}</h2>
            <img src={this.props.image} />
        </div>
    )
}
}

export default WeatherDetails;