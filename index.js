// Code your solution in this file

function findMatching(drivers, name) {
  return drivers.filter(function(driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(function(driverName) {
    return driverName.startsWith(letters);
  });
}

function matchName(drivers, string) {
  return drivers.filter(function(driverName) {
    return driverName.name === string;
  });
}
