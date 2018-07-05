function compare(arr1, arr2){
    let length1 = arr1.length;
    let length2 = arr2.length;

    if (length1 != length2) return false;

    if(Array.isArray(arr1) && Array.isArray(arr2)) {
      for(let i =0; i < length1;i++){
          if(arr1[i] !== arr2[i]) {
              return false;
          }
      }
      return true;
    } else return false;
}

console.log(compare([1, 2, 3], [1,2,3]));
