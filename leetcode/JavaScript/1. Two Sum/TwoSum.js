// Get index of two sum

// Brute force solution
twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i === j) {
                continue;
            }
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return null;

}

// console.log(twoSum([2, 7, 15, 11], 9))
// console.log(twoSum([3, 2, 4], 6))
// console.log(twoSum([3, 3], 6))


// Efficient Solution
twoSumEfficient = (nums, target) => {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        console.log('map',map)
        const another = target - nums[i];
        if (another in map) {
            return [map[another], i];
        }
        map[nums[i]] = i;
    }

    return null;
}

console.log(twoSumEfficient([2, 7, 15, 11], 18))
// console.log(twoSumEfficient([3, 2, 4], 6))
// console.log(twoSumEfficient([3, 3], 6))