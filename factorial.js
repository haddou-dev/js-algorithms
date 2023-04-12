/** @format */
// Big-O = O(n);
const factorial = (n) => {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
};

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(4));
console.log(factorial(5));
