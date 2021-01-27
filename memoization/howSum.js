const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers, memo);
    if (remainderResult) {
      memo[targetSum] = [...remainderResult, num]; // Storing remainder number in the memo
      return memo[targetSum];
    }
  }

  memo[targetSum] = 0;
  return null;
};

// m = target sum
// n = numbers.length
//
// Brute force
// time: P(n^m * m)
// Space: O(m)

// Memoized
// time: O(n*m^2)
// space: O(m^2)

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));
