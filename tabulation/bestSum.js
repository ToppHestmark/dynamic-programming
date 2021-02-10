const bestSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        const combination = [...table[i], num];
        if (!table[i + num] || table[i + num].length > combination.length)
          table[i + num] = combination;
      }
    }
  }

  return table[targetSum];
};

// Return an array of the shortest containing combination of numbers that add up to exactly targetSub.

console.log(bestSum(7, [5, 3, 4])); // --> [ 3, 4 ]
console.log(bestSum(8, [2, 3, 5])); // --> [ 3, 5 ]
console.log(bestSum(8, [1, 4, 5])); // --> [ 4, 4 ]
console.log(bestSum(100, [1, 2, 5, 25])); // --> [ 25, 25, 25, 25 ]
