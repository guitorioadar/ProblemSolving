// Leetcode
// 41. First Missing Positive
// https://leetcode.com/problems/first-missing-positive/
// Given an unsorted integer array nums, return the smallest missing positive integer.
// You must implement an algorithm that runs in O(n) time and uses constant extra space.
// Example 1:
// Input: nums = [1,2,0]
// Output: 3
// Example 2:
// Input: nums = [3,4,-1,1]
// Output: 2
// Example 3:
// Input: nums = [7,8,9,11,12]
// Output: 1


firstMissingPositive = (nums) => {
    // Solution Pending
    
}

console.log(firstMissingPositive([60,70,80,90]));
console.log(firstMissingPositive([1, 3, 6, 4, 1, 2]));
console.log(firstMissingPositive([1, 2, 0]));
console.log(firstMissingPositive([3, 4, -1, 1]));
console.log(firstMissingPositive([7, 8, 9, 11, 12]));
console.log(firstMissingPositive([-1, -3]));



















// firstMissingPositive = (nums) => {
//     let result = 1;
//     nums = nums.sort((a, b) => a - b);
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] > result) break;
//         if (nums[i] === result) {
//             result++;
//         }
//     }
//     return result;
// }