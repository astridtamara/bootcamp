function compareArrays(arrOne, arrTwo) {
  let length1 = arrOne.length;
  let length2 = arrTwo.length;

  if (length1 !== length2) {
    return false;
  }

  for (let i = 0; i < length1; i++) {
    if (arrOne[i] !== arrTwo[i]) {
      return false;
    }
  }
  return true;
}

function compareObjects(objOne, objTwo) {
  let keysOne = Object.keys(objOne);
  let keysTwo = Object.keys(objTwo);
  if (keysOne.length !== keysTwo.length) {
    return false;
  }
  for (let key of keysOne) {
    if (objOne[key] !== objTwo[key]) {
      return false;
    }
  }
  for (let key of keysTwo) {
    if (objOne[key] !== objTwo[key]) {
      return false;
    }
  }
  return true;
}

export { compareObjects, compareArrays };
