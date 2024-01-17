function validateNumsArray(numsAsStrings) {
  let result = [];

  for (let i = 0; i < numsAsStrings.length; i++) {
    let valToNumber = Number(numsAsStrings[i]);

    if (Number.isNaN(valToNumber)) {
      throw new Error(
        `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
      );
    }

    result.push(valToNumber);
  }
  return result;
}

function findMean(nums) {
  const numbers = nums;

  if (numbers.length === 0) {
    return 0; // Return 0 for an empty array
  }

  if (numbers.every(num => !isNaN(num))) {
    const total = numbers.reduce((sum, num) => sum + num, 0);
    const average = total / numbers.length;

    return average;
  } else {
    const invalidNum = numbers.find(num => isNaN(num));
    throw new Error(`${invalidNum} is not a valid number.`);
  }
}

function findMedian(nums) {
  const numbers = nums.sort((a, b) => a - b);

  if (numbers.every(num => !isNaN(num))) {
    const numberCount = numbers.length;

    if (numberCount % 2 === 0) {
      const midpointIndex1 = numberCount / 2 - 1;
      const midpointIndex2 = numberCount / 2;
      const midpoint = (numbers[midpointIndex1] + numbers[midpointIndex2]) / 2;
      return midpoint;
    } else {
      const midpointIndex = Math.floor(numberCount / 2);
      const midpoint = numbers[midpointIndex];
      return midpoint;
    }
  } else {
    throw new Error(`${numbers.find(num => isNaN(num))} is not a valid number.`);
  }
}

function findMode(nums) {
  const numbers = nums;

  const countMap = {};

  for (const num of numbers) {
    countMap[num] = (countMap[num] || 0) + 1;
  }

  let maxCount = 0;
  let mostFrequentItems = [];

  for (const num in countMap) {
    const count = countMap[num];

    if (count > maxCount) {
      maxCount = count;
      mostFrequentItems = [num];
    } else if (count === maxCount) {
      mostFrequentItems.push(num);
    }
  }

  return mostFrequentItems;
}

module.exports = {
  validateNumsArray,
  findMean,
  findMedian,
  findMode,
};
