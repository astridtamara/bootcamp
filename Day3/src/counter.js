function createCounter() {
  let count = 0;
  return {
    inc: () => {
      count += 1;
    },
    dec: () => {
      count -= 1;
    },
    getCount: () => count
  };
}

export { createCounter };
