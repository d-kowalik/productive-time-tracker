import React, { Component } from 'react'

import './DynamicCircle.css'

const SLEEP_COLOR = '#add8b6'
const WORK_COLOR = '#ffcccb'
const PLAY_COLOR = '#fed8b1'

const TaskStateAsColor = {
  SLEEP: SLEEP_COLOR,
  WORK: WORK_COLOR,
  PLAY: PLAY_COLOR
}

class DynamicCircle extends Component {
  state = {
    lastPercentage: 0
  }

  componentDidMount() {
    const percentage = this.calculateDayPercentage()

    this.setState({ lastPercentage: percentage })
    this.drawCircleToPercentage(percentage, true)
  }

  drawCircleToPercentage(percentage, anim = false) {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext('2d')
    const x = canvas.width / 2
    const y = canvas.height / 2
    const radius = 150
    const endPercent = percentage
    const circ = Math.PI * 2
    const quart = Math.PI / 2
    const counterClockwise = false
    ctx.lineWidth = 10
    ctx.strokeStyle = TaskStateAsColor[this.props.taskState]
    // ctx.shadowOffsetX = 0
    // ctx.shadowOffsetY = 0
    // ctx.shadowBlur = 10
    // ctx.shadowColor = '#656565'
    if (!anim) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.beginPath()
      ctx.arc(
        x,
        y,
        radius,
        -quart,
        circ * (endPercent / 100) - quart,
        counterClockwise
      )
      ctx.stroke()
    } else {
      let curPercent = 0
      function animate(current) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.beginPath()
        ctx.arc(x, y, radius, -quart, circ * current - quart, counterClockwise)
        ctx.stroke()
        curPercent++
        if (curPercent < endPercent) {
          requestAnimationFrame(function() {
            animate(curPercent / 100)
          })
        }
      }
      animate()
    }
  }

  componentDidUpdate(prevProps) {
    // update canvas here
    // redraw every 1%
    const percentage = this.calculateDayPercentage()

    if (
      percentage - this.state.lastPercentage > 0.005 ||
      prevProps.taskState !== this.props.taskState
    ) {
      this.drawCircleToPercentage(percentage)
      this.setState({ lastPercentage: percentage })
    }
  }

  calculateDayPercentage() {
    const secondsInADay = 24 * 60 * 60
    const now = this.props.today
    const hours = now.getHours() * 60 * 60
    const minutes = now.getMinutes() * 60
    const seconds = now.getSeconds()
    const totalSeconds = hours + minutes + seconds

    return (100 * totalSeconds) / secondsInADay
  }

  render() {
    return (
      <div className="DynamicCircle">
        <canvas
          ref="canvas"
          className="dynamic-circle-canvas"
          width={350}
          height={350}
        ></canvas>
        <div className="children">{this.props.children}</div>
      </div>
    )
  }
}

export default DynamicCircle
