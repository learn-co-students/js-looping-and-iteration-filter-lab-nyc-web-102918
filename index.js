// Code your solution in this file
function findMatching(array, name){
  return array.filter(function (driver){
    return driver.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(array, letters){
  let nameLength = letters.length
  return array.filter(function (name) {
    return name.slice(0, nameLength) === letters
  });
}

function matchName(array, name){
  return array.filter(function (driver){
    return driver.name.toLowerCase() === name.toLowerCase()
  })
}
