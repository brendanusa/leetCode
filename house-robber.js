/**
 * @param {number[]} nums
 * @return {number}
 */


var rob = function(nums) {

  // this will return the max possible sum of non-consecutive nums by subtracting the smallest non-consecutive values from the total sum

  const numsMap = {};
  const usedIndexes = {};
  let moneyTotal = 0;
  let deleteCount = 0;
  let i = 0;

  // for each num...
  for (; i < nums.length; i++) {
    // map its index to the value
    if (numsMap[nums[i]]) {
      numsMap[nums[i]].push(i);
    } else {
      numsMap[nums[i]] = [i];
    }
    // add index to list of available indexes
    usedIndexes[i] = 1;
    // add value to total value
    moneyTotal += nums[i];
  }

  // list of nums sorted from smallest to largest
  sortedHouseValues = Object.keys(numsMap).sort((a, b) => parseInt(a) - parseInt(b))

  for (i = 0; i < sortedHouseValues.length; i++) {
    for (let j = 0; j < numsMap[sortedHouseValues[i]].length; j++) {

      // index of this value in orig array
      let index = numsMap[sortedHouseValues[i]][j];

      // if neither of the adjacent nums have been removed
      if (usedIndexes[index - 1] && usedIndexes[index + 1]) {
        // remove index from list of used indexes
        delete usedIndexes[index];
        // remove index from list of available indexes for that num
        numsMap[sortedHouseValues[i]].splice(j, 1);
        // remove num from money total
        moneyTotal -= sortedHouseValues[i];
        // increment number of deleted nums
        deleteCount++;
      }
    }
    // if no instances of that value remain in nums, remove it from map
    if (numsMap[sortedHouseValues[i]].length === 0) {
      delete numsMap[sortedHouseValues[i]];
    }
    // break the loop when half of the nums have been eliminated
    if (deleteCount === Math.floor(nums.length / 2) - 1) {
      break;
    }
  }

  // list of used indexes
  let usedIndexesList = Object.keys(usedIndexes);

  // if any consecutive nums remain, remove the smaller one
  for (i = 1; i < usedIndexesList.length; i++) {
    if (parseInt(usedIndexesList[i]) === parseInt(usedIndexesList[i - 1]) + 1) {
      nums[parseInt(usedIndexesList[i])] > nums[parseInt(usedIndexesList[i - 1])] ? moneyTotal -= nums[parseInt(usedIndexesList[i - 1])] : moneyTotal -= nums[parseInt(usedIndexesList[i])];
    }
  }

  return moneyTotal;

}

console.log(rob([226,174,214,16,218,48,153,131,128,17,157,142,88,37,43,157]))

// [226,x174,214,x16,218,x48,153,x131,128,x17,157,x142,88,x37,x43,157]

console.log(226+214+218+153+128+157+88+157)

 //  console.log(nums.length)

 // // NAIVE
 //  let highestTotal = 0;

 //  const addTotal = (tempTotal, i) => {
 //    if (i >= nums.length) {
 //      return highestTotal = tempTotal > highestTotal ? tempTotal : highestTotal;
 //    }
 //    tempTotal += nums[i];
 //    addTotal(tempTotal, i + 2);
 //    addTotal(tempTotal, i + 3);
 //  }

 //  addTotal(0, 0);
 //  addTotal(0, 1);

 //  return highestTotal;

  // numsMap = nums.reduce((acc, val, i) => {
  //   acc.push([val, i])
  //   return acc;
  // }, []).sort((a, b) => a[0] - b[0]);

  // console.log(numsMap)
