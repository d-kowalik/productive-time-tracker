import React from 'react'

import './Timer.css'

const Timer = ({ time }) => (
  <div className="Timer circle">
    <p className="hour-display">{time}</p>
  </div>
)

export default Timer
