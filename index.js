// Code your solution in this file
function findMatching (list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(list,string) {
  let stringlength = string.length;
  return list.filter(function (driverName){
    return driverName.slice(0,stringlength) === string;
  })
}

function matchName(list, string){
  return list.filter(function (driver){
    return driver.name.toLowerCase() === string.toLowerCase()
  })
}
