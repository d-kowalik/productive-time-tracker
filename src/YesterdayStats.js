import React from 'react'

const combineIntoPercentages = states => {
  const res = {}
  for (const [k, v] of Object.entries(states)) {
    if (res[k] === undefined) res[k] = v
    else res[k] += v
  }
  return res
}

const YesterdayStats = ({ taskStates }) => (
  <div className="YesterdayStats">
    <h3>Yesterday, you spent..</h3>
  </div>
)

export default YesterdayStats
