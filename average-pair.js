'use strict';

/*
Inputs: Array of numbers and a numeric target average
Output: boolean value (true/false) if there is a pair of numbers that average the target number

Examples:
averagePair([1, 2, 3], 2.5);         // true
averagePair([3, 3, 6, 12, 19], 8);   // false
averagePair([1, 2, 3], 2);           // true
averagePair([], 4);                  // false

Pseudocode:
1. Initialize left and right pointer variables to the first and last index of the paramenter array
2. Using a while loop check that left < right
3. Initialize an average value by adding the values at both pointers and dividing by 2.
4. Then checking if the avg. is equal to our target average
5. If true, return True
6. If average value > target value => decrease right pointer by 1
7. Else, increase left pointer by 1
8. Return False
*/

function averagePair(nums, targetAvg) {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while (leftPointer < rightPointer) {
    let avgValue = (nums[leftPointer] + nums[rightPointer]) / 2;

    if (avgValue === targetAvg) {
      return true;
    }

    if (avgValue > targetAvg) {
      rightPointer--;

    } else {
      leftPointer++;
    }
  }

  return false;
}

