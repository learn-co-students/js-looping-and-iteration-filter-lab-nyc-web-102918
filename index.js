// Code your solution in this file
function findMatching(drivers, name) {
  const matchingDrivers = drivers.filter(function (driver) {
    return driver.toLowerCase() === name.toLowerCase();
  })
  return matchingDrivers;
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function (driver) {
    return driver.startsWith(string);
  })
}

function matchName(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.name === name;
  })
}
