import React from 'react'

import './YesterdayStats.css'

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

const mapDataToText = data => {
  let res = ''
  const length = Object.keys(data).length
  let i = 0
  for (const [name, percentage] of Object.entries(data)) {
    i++
    res +=
      percentage +
      '% of the day ' +
      name.toLowerCase() +
      'ing' +
      (i === length ? '' : i === length - 1 ? ', and ' : ', ')
  }
  return res
}

const YesterdayStats = ({ taskStates }) => {
  const data = combineIntoPercentages(taskStates)
  const text = mapDataToText(data)
  return (
    <div className="YesterdayStats">
      <h3>Yesterday, you spent {text}.</h3>
    </div>
  )
}

export default YesterdayStats
