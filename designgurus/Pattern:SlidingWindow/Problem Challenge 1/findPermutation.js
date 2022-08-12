findPermutation = (str, pattern) => {
    let windowStart = 0,
        matched = 0,
        charFrequency = {};

    for (let i = 0; i < pattern.length; i++) {
        // get char frequency
        let char = pattern.charAt(i);
        if (!(char in charFrequency)) {
            charFrequency[char] = 0;
        }
        charFrequency[char]++;


    }

    // Our goal is to match all the characters from the 'charFrequency' with the current window
    // try to extend the range [windowStart, windowEnd]
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        let rightChar = str.charAt(windowEnd);
        if(rightChar in charFrequency){
            charFrequency[rightChar] -= 1;
            if(charFrequency[rightChar] === 0){
                console.log(`Match for char: ${rightChar} at windowEnd: ${windowEnd} and starting at ${windowStart}`);
                console.log(charFrequency)
                matched += 1;
            }
        }

        if (matched === Object.keys(charFrequency).length){
            return true;
        }

        // shrink the window
        if(windowEnd >= pattern.length - 1){
            let leftChar = str.charAt(windowStart);
            if (leftChar in charFrequency){
                console.log(`for char: ${leftChar} and windowStart: ${windowStart} while windowEnd ${windowEnd}`);
                if (charFrequency[leftChar] === 0) {
                    matched -= 1;
                    console.log(`matched reduced to ${matched} for ${leftChar} at position ${windowStart}`)
                }
                charFrequency[leftChar] += 1;
                console.log('updated: ',charFrequency)
            }
            windowStart += 1;
        }
    }

    return false;
}

// console.log('findPermutation', findPermutation('oidbcaf', 'abc'));
console.log('findPermutation', findPermutation('eidboaoooabc', 'abc'));
// console.log('findPermutation', findPermutation('odicf', 'dc'));
// console.log('findPermutation', findPermutation('bcdxabcdy', 'bcdyabcdx'));
// console.log('findPermutation', findPermutation('aaacb', 'abc'));