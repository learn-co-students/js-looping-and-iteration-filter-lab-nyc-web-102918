// Code your solution in this file
function findMatching(drivers, name) {
  const foundDrivers = drivers.filter(function (driver) {
    return driver.toLowerCase() === name.toLowerCase()
  })
  return foundDrivers
}
function fuzzyMatch(drivers, letter) {
  const foundDrivers = drivers.filter(function (driver) {
    return driver.slice(0,2) === letter
  })
  return foundDrivers
}
function matchName(drivers, name) {
  const matchedDriver = drivers.filter(function (driverObject) {
    return driverObject.name === name
  })
  return matchedDriver
}
