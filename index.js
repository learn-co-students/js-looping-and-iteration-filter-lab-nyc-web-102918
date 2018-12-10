// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function (element) {return element.toLowerCase() === string.toLowerCase()})
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function (element) {return element.startsWith(string)})
  debugger
}

function matchName(drivers, string) {
  return drivers.filter(function (element) {return element.name === string})
}
