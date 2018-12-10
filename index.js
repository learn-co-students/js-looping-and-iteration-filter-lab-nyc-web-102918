// Code your solution in this file
function findMatching(drivers, name) {
  const foundDrivers = drivers.filter(function (driver) {
    return driver.toLowerCase() === name.toLowerCase()
  })
  return foundDrivers
}

function fuzzyMatch(drivers, letters) {
 const foundDrivers = drivers.filter(function (driver) {
   return driver.slice(0,2) === letters
 })
 return foundDrivers
}

function matchName(drivers, name) {
  const foundDrivers = drivers.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase()
  })
  return foundDrivers
}
