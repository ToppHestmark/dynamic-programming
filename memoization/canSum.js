const canSum = (targetSum, numbers, memo = {}) => {
  // First thing first, handle the base cases
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainer = targetSum - num;
    if (canSum(remainer, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }

  memo[targetSum] = false;
  return false;
};

// // Brute force solution, got error en larger target sum
// const canSum = (targetSum, numbers) => {
//   // First thing first, handle the base cases
//   if (targetSum === 0) return true;
//   if (targetSum < 0) return false;

//   for (let num of numbers) {
//     const remainer = targetSum - num;
//     if (canSum(remainer, numbers) === true) {
//       return true;
//     }
//   }

//   return false;
// };

console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); //true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3, 5])); // true
console.log(canSum(300, [7, 14])); // false
