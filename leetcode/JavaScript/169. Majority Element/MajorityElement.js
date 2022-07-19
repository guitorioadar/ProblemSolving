// Leetcode
// 169. Majority Element

majorityElement = (nums) => {
    let majorElm = null;
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in map) {
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        }
    }
    majorElm = getKeyByValue(map, Math.max(...Object.values(map)));
    return majorElm;
}

// Get Key by value
getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));