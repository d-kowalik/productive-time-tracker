import React, { Component } from 'react'

import './TaskSelector.css'

class TaskSelector extends Component {
  render() {
    return (
      <div className="TaskSelector">
        <div className="button">Sleep</div>
        <div className="button">Work</div>
        <div className="button">Play</div>
      </div>
    )
  }
}

export default TaskSelector
