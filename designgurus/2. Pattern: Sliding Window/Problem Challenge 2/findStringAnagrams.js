findStringAnagrams = (str, pattern) => {
    let result = [],
        windowStart = 0;
    matched = 0;
    charFrequency = {};

    for (let i = 0; i < pattern.length; i++) {
        let char = pattern[i];
        if (!(char in charFrequency)) {
            charFrequency[char] = 0;
        }
        charFrequency[char] += 1;
    }

    // our goal is to match all the characters from the 'charFrequency' with the current window
    // try to extend the range [windowStart, windowEnd]
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        let rightChar = str.charAt(windowEnd);
        if (rightChar in charFrequency) {
            charFrequency[rightChar] -= 1;
            if (charFrequency[rightChar] === 0) {
                matched++;
            }
        }
        console.log(`mathced: ${matched} and Object.keys(charFrequency).length: ${Object.keys(charFrequency).length}`)
        if (matched === Object.keys(charFrequency).length) {
            console.log('########  matched at position: ',windowStart);
            result.push(windowStart);
        }

        // shrink the window
        if (windowEnd >= pattern.length - 1) {
            let leftChar = str.charAt(windowStart);
            if (leftChar in charFrequency) {
                if (charFrequency[leftChar] === 0) {
                    matched--;
                }
                charFrequency[leftChar]++;
            }

            windowStart++;
        }
    }

    return result;
}

// console.log('findStringAnagrams', findStringAnagrams('pdsfpqp', 'pq'));
console.log('findStringAnagrams', findStringAnagrams('abbcabc', 'abc'));