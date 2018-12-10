// Code your solution in this file
function findMatching(drivers, string){
return drivers.filter(function (driver) {return driver.toLowerCase() === string.toLowerCase()})

}

// This function takes an array of drivers and a string as arguments, and returns the
// matching list of drivers. The function should be case insensitive.


function fuzzyMatch(drivers, string) {

   return drivers.filter(function (driver) { return driver.slice(0, string.length) === string })
}

// lowerString = string.toLowerCase()
//  return drivers.filter(function (driver) {return driver.toLowerCase().startsWith(lowerString)})
//  // This function takes an array of drivers and a string as arguments for querying the array,
 // and returns all drivers whose names begin with the provided letters.


function matchName(drivers,string) {
    return drivers.filter(function (driver) { return driver.name === string})
}
// lowerString = string.toLowerCase()
//   return drivers.filter(function (driver) {return driver.name.toLowerCase() === lowerString})
// This function takes an array of drivers and a string as arguments. In this function,
// each element of the drivers array is a JavaScript object that has a property of name.
// The function should return each element whose name property matches the provided string argument.
