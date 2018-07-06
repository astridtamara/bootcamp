// @flow
let studentsByID = new Map();

studentsByID.set('123',{
    name: 'Astrid',
    classes: ['Math'],
});

studentsByID.set('567',{
    name: 'Budi',
    classes: ['English'],
});

function arrayFrom(thing): Array<mixed> {
    let result = [];
    for(let item of thing){
        result.push(item);
    }
    return result;
}

// Built in function
let array = Array.from(studentsByID);
console.log(array);

// New function
let arrOne = arrayFrom(studentsByID);
console.log(arrOne);

// Spread operator
let arrTwo = [...studentsByID];
console.log(arrTwo);

let stuffs = new Set();
stuffs.add(1);
stuffs.add(3);
stuffs.add(5);
stuffs.add(7);
stuffs.add(9);

console.log(...stuffs);

let [firstNum, secondNum, ...otherNums] = stuffs;

console.log(firstNum);
console.log(secondNum);
console.log(otherNums);