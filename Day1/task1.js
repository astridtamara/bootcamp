function map(array, fn){
    let newArray = array.map(fn);
    return newArray;
}

function doubled(num) {
  return num * 2;
}

let numbers = [1,2,3];
let result = numbers.map(doubled);
console.log(result);

numbers.forEach((...arg) => {
  console.log('arguments : ', arg);
})
