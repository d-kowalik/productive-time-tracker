import React, { Component } from 'react'

import Timer from './Timer'
import DynamicCircle from './DynamicCircle'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date()
    }
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  tick() {
    this.setState({ time: new Date() })
  }

  render() {
    const today = this.state.time

    return (
      <div className="App">
        <DynamicCircle today={today}>
          <Timer time={today} />
        </DynamicCircle>
      </div>
    )
  }
}

export default App
