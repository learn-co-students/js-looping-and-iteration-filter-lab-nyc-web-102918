// Code your solution in this

function findMatching(drivers, string) {
  return drivers.filter(function (str){
    return str.toUpperCase() === string.toUpperCase();})
}

function fuzzyMatch(drivers, string) {
  let lengthName = string.length;

  return drivers.filter(function (str){
    return str.slice(0, lengthName) === string;
  })
}

function matchName(drivers, string) {
return drivers.filter(function (element){
  return element.name === string;
})
}
