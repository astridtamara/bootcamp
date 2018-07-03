function map(array, fn){
    let newArray = array.map(fn);
    return newArray;
}

let result = map([1,2,3], (num) => num * 2);
console.log(result);


