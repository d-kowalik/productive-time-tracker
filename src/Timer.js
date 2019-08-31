import React from 'react'

import './Timer.css'

const Timer = ({ time }) => (
  <div className="Timer">
    <p className="hour-display">{time}</p>
  </div>
)

export default Timer
