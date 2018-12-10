// Code your solution in this file

function findMatching(drivers,string){
  return drivers.filter(function(driver){
    return  driver.toLowerCase()===string.toLowerCase();
  })
}

function fuzzyMatch(drivers,letters){
  function matchfirst(driver){
    return driver.slice(0,letters.length).toLowerCase()===letters.toLowerCase();
  }
  return drivers.filter(matchfirst);
}

function matchName(drivers,string){
  function nameMatches(driver){
    return driver['name'].toLowerCase()===string.toLowerCase();
  }
  let matches=[];
  for(const driver of drivers){
    if (nameMatches(driver)){matches.push(driver);}
  }
  return matches
}
