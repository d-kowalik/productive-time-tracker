import React, { Component } from 'react'

import './DynamicCircle.css'

import { TaskStateAsColor } from './colorConstants'

class DynamicCircle extends Component {
  state = {
    lastPercentage: 0
  }

  componentDidMount() {
    const percentage = this.props.dayPercentage

    this.drawCircleToPercentage(percentage, true)
    this.setState({ lastPercentage: percentage })
  }

  drawCircleToPercentage = (percentage, firstLaunch = false) => {
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
    ctx.strokeStyle = firstLaunch
      ? this.props.taskStates[0]
      : TaskStateAsColor[this.props.taskState]

    if (firstLaunch) {
      let curPercent = 0
      let lastPercent = curPercent
      const animate = (last, current) => {
        ctx.beginPath()
        ctx.arc(
          x,
          y,
          radius,
          circ * last - quart - 0.01,
          circ * current - quart,
          counterClockwise
        )
        if (this.props.taskStates[curPercent] !== undefined) {
          ctx.strokeStyle = this.props.taskStates[curPercent]
        }
        ctx.stroke()
        lastPercent = curPercent
        curPercent++
        if (curPercent < endPercent) {
          requestAnimationFrame(function() {
            animate(lastPercent / 100, curPercent / 100)
          })
        }
      }
      animate()
    } else {
      ctx.beginPath()
      ctx.arc(
        x,
        y,
        radius,
        circ * ((this.state.lastPercentage - 1) / 100) - quart,
        circ * (percentage / 100) - quart,
        counterClockwise
      )
      ctx.stroke()
    }
  }

  componentDidUpdate(prevProps) {
    // update canvas here
    // redraw every 1%
    const percentage = this.props.dayPercentage

    if (percentage - this.state.lastPercentage > 0.01) {
      this.drawCircleToPercentage(percentage)
      this.setState({ lastPercentage: percentage })
    }
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
