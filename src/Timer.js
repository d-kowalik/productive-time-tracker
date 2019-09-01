import React from 'react'

import './Timer.css'

const padTo2with0 = text => text.toString().padStart(2, '0')

const Timer = ({ time }) => {
  const displayTime = `${padTo2with0(time.getHours())}:${padTo2with0(
    time.getMinutes()
  )}:${padTo2with0(time.getSeconds())}`

  return (
    <div className="Timer">
      <p className="hour-display">{displayTime}</p>
    </div>
  )
}

export default Timer
