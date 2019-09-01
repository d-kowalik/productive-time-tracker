import React, { Component } from 'react'

import Timer from './Timer'
import DynamicCircle from './DynamicCircle'
import TaskSelector from './TaskSelector'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date(),
      taskState: 'SLEEP'
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

  handleTaskButtonClick = e => {
    // Gets second class in upper case, being either SLEEP, WORK or PLAY
    const taskState = e.target.className.toUpperCase().split(' ')[1]

    for (const element of document.querySelectorAll('.TaskSelector .button')) {
      element.classList.remove('active')
    }

    e.target.classList.add('active')

    this.setState({ taskState })
  }

  render() {
    const today = this.state.time

    return (
      <div className="App">
        <DynamicCircle today={today} taskState={this.state.taskState}>
          <Timer time={today} />
        </DynamicCircle>
        <TaskSelector onClick={this.handleTaskButtonClick} />
      </div>
    )
  }
}

export default App
