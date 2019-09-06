import React from 'react'

const combineIntoPercentages = states => {
  const res = {}
  let lastPercent = 0
  let lastState

  for (const [k, v] of Object.entries(states)) {
    if (res[v] === undefined) res[v] = k - lastPercent
    else res[v] += k - lastPercent
    lastPercent = k
    lastState = v
  }
  res[lastState] += 100 - lastPercent
  return res
}

const YesterdayStats = ({ taskStates }) => {
  console.log(combineIntoPercentages(taskStates))

  return (
    <div className="YesterdayStats">
      <h3>Yesterday, you spent..</h3>
    </div>
  )
}

export default YesterdayStats
