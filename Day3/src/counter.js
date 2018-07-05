function createCounter(num) {
  let count = num || 0;
  return {
    inc: (incNum = 1) => {
      count += incNum;
    },
    dec: (decNum = 1) => {
      count -= decNum;
    },
    getCount: () => count
  };
}

export { createCounter };
