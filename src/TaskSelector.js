import React from 'react'

import './TaskSelector.css'

const TaskSelector = ({ onClick, taskState }) => (
  <div className="TaskSelector">
    <div
      className={'button sleep' + (taskState === 'SLEEP' ? ' active' : '')}
      onClick={onClick}
    >
      Sleep
    </div>
    <div
      className={'button work' + (taskState === 'WORK' ? ' active' : '')}
      onClick={onClick}
    >
      Work
    </div>
    <div
      className={'button play' + (taskState === 'PLAY' ? ' active' : '')}
      onClick={onClick}
    >
      Play
    </div>
  </div>
)

export default TaskSelector
