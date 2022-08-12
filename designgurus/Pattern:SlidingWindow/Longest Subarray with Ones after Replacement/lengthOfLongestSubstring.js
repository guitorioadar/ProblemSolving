lengthOfLongestSubstring = (arr, k) => {
    let windowStart = 0,
        maxLength = 0,
        maxOnesCount = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {

        if (arr[windowEnd] === 1){
            maxOnesCount++;
        }

        // if the remaining 0 is greater then k then  shrink the start position by 1;
        // decrease the maxOnesCount by 1 if the value of the start is === 1
        let remaining = windowEnd - windowStart + 1 - maxOnesCount;
        console.log(`remaining ${remaining} and in position ${windowEnd}th for value: ${arr[windowEnd]}`);
        if((windowEnd - windowStart + 1 - maxOnesCount) > k){
            console.log(`inside remaing`)
            if (arr[windowStart] === 1) {
                maxOnesCount -= 1;
            }
            windowStart++;
        }

        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);

    }

    return maxLength;
}

console.log('lengthOfLongestSubstring', lengthOfLongestSubstring([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));