function getProperty(arr, property){
    let newArr = [];
    arr.forEach((data)=> newArr.push(data[property]));
    return newArr;
}

let arr = [
    { name: 'Astrid', job: 'Programmer', age: 17},
    { name: 'Budi', job: 'Designer', age: 22},
    { name: 'Charlie', job: 'Manager', age: 34}
];

let newArr = getProperty(arr, "name");
console.log(newArr);