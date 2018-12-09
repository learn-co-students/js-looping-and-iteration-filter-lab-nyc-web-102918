// Code your solution in this file
let findMatching = (drivers, name) => {
    return drivers.filter(x => x.toLowerCase() === name.toLowerCase());
}

let fuzzyMatch = (drivers, partial) => {
    return drivers.filter(x => x.slice(0,partial.length) === partial);
}

let matchName = (drivers, name) => {
   return drivers.filter(driver => driver.name === name);
}