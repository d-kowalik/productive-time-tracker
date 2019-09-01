import React, { Component } from 'react'

import './TaskSelector.css'

class TaskSelector extends Component {
  render() {
    return (
      <div className="TaskSelector">
        <div className="button sleep active" onClick={this.props.onClick}>
          Sleep
        </div>
        <div className="button work" onClick={this.props.onClick}>
          Work
        </div>
        <div className="button play" onClick={this.props.onClick}>
          Play
        </div>
      </div>
    )
  }
}

export default TaskSelector
