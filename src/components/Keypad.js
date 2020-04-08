import React, { Component } from "react"

export default class keypad extends Component {

    onKeyUpEvent = () => {
        console.log('Entering password...')
    }

    render() {
        return (
            <form>
                <input onKeyUp={this.onKeyUpEvent} type="password"></input>
            </form>
        )
    }
}
