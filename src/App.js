import React, { Component } from 'react'

import Timer from './Timer'
import DynamicCircle from './DynamicCircle'
import TaskSelector from './TaskSelector'

import './App.css'

const SLEEP = 'SLEEP'
const WORK = 'WORK'
const PLAY = 'PLAY'

const SLEEP_COLOR = '#add8b6'
const WORK_COLOR = '#ffcccb'
const PLAY_COLOR = '#fed8b1'

const StateAsColor = {
  SLEEP: SLEEP_COLOR,
  WORK: WORK_COLOR,
  PLAY: PLAY_COLOR
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date(),
      taskState: SLEEP
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

  handleTaskButtonClick(e) {
    // Gets second class in upper case, being either SLEEP, WORK or PLAY
    const taskState = e.target.className.toUpperCase().split(' ')[1]
    this.setState({ taskState })
  }

  render() {
    const today = this.state.time

    return (
      <div className="App">
        <DynamicCircle today={today}>
          <Timer time={today} />
        </DynamicCircle>
        <TaskSelector onClick={this.handleTaskButtonClick} />
      </div>
    )
  }
}

export default App
