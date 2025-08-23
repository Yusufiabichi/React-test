import React, { Component } from 'react'

class Count extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }


    changeCount(){
        this.setState({
            count: 0 + 1
        })
    }
    render() {
        return (
            <div>
                <h1>Count is: {this.state.count}</h1>
                <button onClick={()=>this.changeCount()}>Subscribe</button>
            </div>
        )
    }
}
export default Count