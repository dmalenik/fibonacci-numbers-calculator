const calcFibonacciNums = (limitNumber) => {
  const storage = [0, 1];
  let prev = 0;
  let curr = 1;
  let sum = 0;

  while (sum < limitNumber) {
    sum = prev + curr;

    if (sum <= limitNumber) {
      storage.push(sum);

      prev = curr;
      curr = sum;
    } else {
      break;
    }
  }

  return storage;
};

export default calcFibonacciNums;
