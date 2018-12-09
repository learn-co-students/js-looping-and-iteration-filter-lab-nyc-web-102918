function findMatching(drivers, string) {
  lowerString = string.toLowerCase()
  return drivers.filter(function (driver) {return driver.toLowerCase() === lowerString})
}

function fuzzyMatch(drivers, string) {
  lowerString = string.toLowerCase()
  return drivers.filter(function (driver) {return driver.toLowerCase().startsWith(lowerString)})
}

function matchName(drivers, string) {
  lowerString = string.toLowerCase()
  return drivers.filter(function (driver) {return driver.name.toLowerCase() === lowerString})
}
