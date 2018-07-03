function compareArrays(arrOne, arrTwo){
    if(arrOne.length !== arrTwo.length){
        return false;
    }
    else{
        
    }
}

function compareObjects(objOne, objTwo){
    let keysOne = Object.keys(objOne);
    let keysTwo = Object.keys(objTwo);
    if(keysOne.length !== keysTwo.length){
        return false;
    }
    for (let key of keysOne){
        if(objOne[key] !== objTwo[key]) {
            return false;
        }
    }
    for (let key of keysTwo){
        if(objOne[key] !== objTwo[key]) {
            return false;
        }
    }
    return true;
}

export {compareObjects, compareArrays};