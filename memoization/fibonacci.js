// Memoization method, still using recurssive method but not doing recurssive on every memorized node tree
// JS object, keys will be arg to fn, value will be the return value
const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

// Recurssively implementation with brute force
// This type of implementation wont run on the larger number
// const fib = (n) => {
//   if (n < 2) return 1;
//   return fib(n - 1) + fib(n - 2); // --> Bruteforce and stuck at larger number
// };

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50)); // Will not work witn brute force
