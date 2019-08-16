import React, { Component } from 'react'

class Stopwatch extends Component {

    state = {
        isRunning: false
    }

    componentDidMount() {
        this.intervalID = setInterval( () => this.tick(), 100)
        //console.log("mounted!")
    }

    handleStopwatch = () => {
        this.setState({
            isRunning: !this.state.isRunning
        })
    }

    tick = () => {
        
    }

    render() {
        return(
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">0</span>
                <button onClick={this.handleStopwatch}>
                    {this.state.isRunning ? "Stop" : "Start"}
                </button>
                <button>Reset</button>
            </div>
        )
    }
}

export default Stopwatch
