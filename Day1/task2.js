function compare(arr1, arr2){
    let length1 = arr1.length;
    let length2 = arr2.length;

    if(length1 != length2) return false;

    for(let i =0; i < length1;i++){
        if(arr1[i] != arr2[i]) {
            return false;
        }
    }
    return true;
}

let result = compare([1,3,5], [1,3,5]);
console.log(result);