import React, { Component } from 'react'
import { withCookies } from 'react-cookie'

import Timer from './Timer'
import DynamicCircle from './DynamicCircle'
import TaskSelector from './TaskSelector'
import { SLEEP_COLOR, WORK_COLOR, PLAY_COLOR } from './colorConstants'
import { todayDMY } from './dateHelper'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    const { cookies } = props
    let taskStates = cookies.get(todayDMY())
    taskStates = taskStates === undefined ? {} : taskStates

    this.state = {
      time: new Date(),
      taskState: 'SLEEP',
      taskStates
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

    const taskStates = this.state.taskStates
    const percentage = Math.round(this.calculateDayPercentage())

    this.setState(
      {
        taskState,
        taskStates: { ...taskStates, [percentage]: taskState }
      },
      () => {
        const { cookies } = this.props
        cookies.set(todayDMY(), this.state.taskStates, { path: '/' })
      }
    )
  }

  calculateDayPercentage() {
    const secondsInADay = 24 * 60 * 60
    const now = this.state.time
    const hours = now.getHours() * 60 * 60
    const minutes = now.getMinutes() * 60
    const seconds = now.getSeconds()
    const totalSeconds = hours + minutes + seconds

    return (100 * totalSeconds) / secondsInADay
  }

  render() {
    const today = this.state.time

    return (
      <div className="App">
        <DynamicCircle
          today={today}
          taskState={this.state.taskState}
          taskStates={this.state.taskStates}
          dayPercentage={this.calculateDayPercentage()}
        >
          <Timer time={today} />
        </DynamicCircle>
        <TaskSelector onClick={this.handleTaskButtonClick} />
      </div>
    )
  }
}

export default withCookies(App)
