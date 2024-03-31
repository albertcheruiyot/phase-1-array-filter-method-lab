// Code your solution here
function findMatching(drivers, query){
    // For case insensitivity, convert the query to lowercase 
    var lowercaseQuery = query.toLowerCase();

    //To create a new array with drivers that match the query
    return drivers.filter(driver => driver.toLowerCase() === lowercaseQuery);
    //Case insensitivity solved
}

function fuzzyMatch(drivers, query){
    
    //returns all drivers whose names begin with the provided letters.
    return drivers.filter(driver => driver.startsWith(query));

}
function matchName(drivers, query){
    
    //return each element whose name property matches the provided string argument.
    return drivers.filter(driver => driver.name === query);

}