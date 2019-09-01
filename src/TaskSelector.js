import React, { Component } from 'react'

import './TaskSelector.css'

class TaskSelector extends Component {
  render() {
    return (
      <div className="TaskSelector">
        <div className="button sleep">Sleep</div>
        <div className="button work">Work</div>
        <div className="button play">Play</div>
      </div>
    )
  }
}

export default TaskSelector
