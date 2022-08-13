nonRepeatSubstring = (str) => {
    let maxLength = 0,
        windowStart = 0,
        charIndexMap = {};

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        let rightChar = str.charAt(windowEnd);

        // console.log('charIndexMap',charIndexMap);
        if (rightChar in charIndexMap) {
            // let previousStart = windowStart;
            windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
            // console.log(`For rightChar ${rightChar}:${windowEnd} => windowStart:${windowStart} = Math.max(${previousStart}, ${charIndexMap[rightChar]} + 1)`);
            // console.log(`Update windowStart ====> For rightChar ${rightChar} with previous index ${charIndexMap[rightChar]} the previousStart was ${previousStart} and updated windowStart is ${windowStart} and present windowEnd is ${windowEnd}`);
        }

        charIndexMap[rightChar] = windowEnd;
        // console.log(`For rightChar: ${rightChar}:${windowEnd} => current maxLength is ${maxLength} , current windowEnd is ${windowEnd} and windowStart is ${windowStart}, Now distance ${windowEnd} - ${windowStart} + 1 is ${windowEnd - windowStart + 1} and maxLength is ${Math.max(maxLength, windowEnd - windowStart + 1)} ## Math.max(${maxLength}, ${windowEnd} - ${windowStart} + 1)`);
        // console.log('---- updated charIndexMap',charIndexMap);
        // let previousMaxLength = maxLength;
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
        // console.log(`maxLength(${maxLength}) = Math.max(${previousMaxLength}, ${windowEnd} - ${windowStart} + 1) `);
    }
    // console.log('finished')
    return maxLength;
}


// console.log('nonRepeatSubstring', nonRepeatSubstring('aabccbb'));
console.log('nonRepeatSubstring', nonRepeatSubstring('aabccbbefgaabcdefghhabc'));
// console.log('nonRepeatSubstring', nonRepeatSubstring('aabccbbefghijkl'));
// console.log('nonRepeatSubstring', nonRepeatSubstring('abbbb'));
// console.log('nonRepeatSubstring', nonRepeatSubstring('abccde'));