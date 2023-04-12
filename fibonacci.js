/** @format */
// Create Fibonacci Fonction :
// Big-O = O(n);
const fibonacci = (n) => {
  const arr = [0, 1];
  if (n >= 2) {
    for (let i = 2; i < n; i++) {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
  } else return;
  return arr;
};

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(5));
console.log(fibonacci(7));
