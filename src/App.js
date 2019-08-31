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

  padTo2with0(text) {
    text = text.toString()
    if (text.length === 1) return '0' + text
    return text
  }

  render() {
    const today = this.state.time
    const time = `${this.padTo2with0(today.getHours())}:${this.padTo2with0(
      today.getMinutes()
    )}:${this.padTo2with0(today.getSeconds())}`

    return (
      <div className="App">
        <DynamicCircle today={today}>
          <Timer time={time} />
        </DynamicCircle>
      </div>
    )
  }
}

export default App
