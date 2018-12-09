// Code your solution in this file


function findMatching(drivers, name) {
    return drivers.filter(function (driver){ 
        return driver.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch(drivers, section) {
    return drivers.filter(function (driver){ 
        return driver.slice(0, section.length)=== section;
    });
}



function matchName(drivers, name) {
    return drivers.filter(function (driver){ 
        return driver.name === name;
    });
}
