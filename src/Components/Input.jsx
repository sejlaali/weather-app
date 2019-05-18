import React, {Component} from 'react'
import axios from 'axios'

// 
class Input extends Component {
    constructor(props) {
        super(props)


    }

async handleInput (evt) {
    let weatherUrl = "http://api.openweathermap.org/data/2.5/weather?&units=imperial&q="
   let appId = "&APPID=7603679594054f43e107dc12c7368816"
   let value = evt.currentTarget.value
    evt.preventDefault()
    const res = await axios(weatherUrl +value + appId)
    console.log(res)
}

handleSubmit() {
    
}

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="place" placeholder="Type in City or Zip" onChange={this.handleInput}/>
                <button>Submit</button>
            </form>
        )
    }


}

export default Input