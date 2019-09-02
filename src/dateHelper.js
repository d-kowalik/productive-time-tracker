export const dateDMY = date =>
  `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`

export const todayDMY = () => dateDMY(new Date())

export const yesterdayDMY = () => {
  const date = new Date()
  date.setDate(date.getDate() - 1)
  return dateDMY(date)
}
