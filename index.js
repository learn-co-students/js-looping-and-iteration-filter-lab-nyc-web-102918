// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(driver => {
    const lowerDriver = driver.toLowerCase()
    const lowerString = string.toLowerCase()
    return lowerDriver === lowerString

  })
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(driver => {
    return driver[0] === string[0]
  })
}

function matchName(drivers, string) {
  return drivers.filter(driver => {
    return driver.name === string
  })
}
