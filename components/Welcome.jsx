import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return <h1>{this.props.name} Welcomes to {this.props.cityName}</h1>
    }
}
export default Welcome