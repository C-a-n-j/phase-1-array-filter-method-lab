function findMatching(collection, namefilter){
    return collection.filter(
        (result) => result.toLowerCase() === namefilter.toLowerCase()
    );
}


function fuzzyMatch(collection, nameString){
    return collection.filter((result) => 
    result.toLowerCase().indexOf(nameString.toLowerCase())===0)
}

function matchName(collection, nameDetails){
    return collection.filter((result) => result.name===nameDetails)
}
