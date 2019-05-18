import React, {Component} from 'react'
import "./Components.css"

class WeatherDetails extends Component {

render() {
    return (
        <div className="weather-details">
            <h4>{this.props.info}</h4>
            <img src={this.props.image} />
        </div>
    )
}
}

export default WeatherDetails;