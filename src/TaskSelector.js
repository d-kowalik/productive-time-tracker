import React from 'react'

import './TaskSelector.css'

const TaskSelector = ({ onClick }) => (
  <div className="TaskSelector">
    <div className="button sleep active" onClick={onClick}>
      Sleep
    </div>
    <div className="button work" onClick={onClick}>
      Work
    </div>
    <div className="button play" onClick={onClick}>
      Play
    </div>
  </div>
)

export default TaskSelector
