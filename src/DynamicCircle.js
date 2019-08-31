import React, { Component } from 'react'

import './DynamicCircle.css'

class DynamicCircle extends Component {
  componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext('2d')
    const x = canvas.width / 2
    const y = canvas.height / 2
    const radius = 150
    const endPercent = this.calculateDayPercentage()
    const circ = Math.PI * 2
    const quart = Math.PI / 2
    const counterClockwise = false

    let curPercent = 0

    ctx.lineWidth = 10
    ctx.strokeStyle = '#ad2323'
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    ctx.shadowBlur = 10
    ctx.shadowColor = '#656565'

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
