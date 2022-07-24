// Leetcode
// 15. 3Sum

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:

// Input: nums = [0,1,1]
// Output: []

// Explanation: The only possible triplet does not sum up to 0.

// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]

// Explanation: The only possible triplet sums up to 0. 

// https://leetcode.com/problems/3sum/discuss/281302/JavaScript-with-lots-of-explanatory-comments!

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
threeSum = (nums) => {
    const result = [];

    if (nums.length < 3) return result

    nums = nums.sort((a, b) => a - b);
    let target = 0;
    for (let left = 0; left < nums.length - 2; left++) {
        if (nums[left] > target) break
        if (left > 0 && nums[left] === nums[left - 1]) continue

        middle = left + 1;
        right = nums.length - 1;
        while (middle < right) {
            let sum = nums[left] + nums[middle] + nums[right];
            if (sum === target) {
                result.push([nums[left], nums[middle], nums[right]]);

                while (nums[middle] === nums[middle + 1]) middle++
                while (nums[right] === nums[right - 1]) right--

                middle++;
                right--;
            } else if (sum < target) {
                middle++;
            } else {
                right--;
            }
        }
    }

    return result;
}


console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));

