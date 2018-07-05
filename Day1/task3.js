const arr = [
    { name: 'Astrid', job: 'Programmer', age: 17},
    { name: 'Budi', job: 'Designer', age: 22},
    { name: 'Charlie', job: 'Manager', age: 34}
];

function getProperty(arr, property){
    let newArr = [];
    arr.forEach((data) => {
      let obj = {};
      property.forEach((prop) => {
        obj[prop] = data[prop];
      })
      newArr.push(obj);
    });
    return newArr;
}

let newArr = getProperty(arr, ["name", "job"]);
console.log(newArr);
