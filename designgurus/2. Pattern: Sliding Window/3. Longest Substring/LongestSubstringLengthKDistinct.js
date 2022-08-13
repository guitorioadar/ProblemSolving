longestSubstringLengthKDistinct = (str, k) => {
    let length = 0;

    let windowStart = 0;
    let charFrequency = {};

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {

        const rightChar = str.charAt(windowEnd);
        console.log('rightChar', rightChar);

        // looping through all characters
        if (!(rightChar in charFrequency)) {
            console.log('updated freq: ', charFrequency);
            charFrequency[rightChar] = 0;
        }else {
            console.log('else');
            charFrequency[rightChar] += 1;
        }

        console.log(charFrequency[str[windowStart]]);
        console.log('length', Object.keys(charFrequency).length);
        console.log('------------')
        while (Object.keys(charFrequency).length > k) {
            const leftChar = str.charAt(windowStart);
            console.log(charFrequency);
            console.log('Start: ' + windowStart + ' char: ' + str[windowStart] + ' freq: ' + charFrequency[str[windowStart]]);

            if (charFrequency[leftChar] === 0) {
                console.log('Deleting: ',str[windowStart]);
                delete charFrequency[str[windowStart]];
            } else {
                charFrequency[leftChar] -= 1;
            }
            windowStart++;
        }
        length = Math.max(length, windowEnd - windowStart + 1);
    }

    return length;
}


// longestSubstringLengthKDistinct = (str, k) => {
//     let windowStart = 0,
//         maxLength = 0,
//         charFrequency = {};

//     // in the following loop we'll try to extend the range [window_start, window_end]
//     for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
//         const rightChar = str[windowEnd];
//         if (!(rightChar in charFrequency)) {
//             charFrequency[rightChar] = 0;
//         } else {
//             charFrequency[rightChar] += 1;
//         }
//         // shrink the sliding window, until we are left with 'k' distinct characters in 
//         // the char_frequency
//         while (Object.keys(charFrequency).length > k) {
//             const leftChar = str[windowStart];

//             if (charFrequency[leftChar] === 0) {
//                 delete charFrequency[leftChar];
//             } else {
//                 charFrequency[leftChar] -= 1;
//             }
//             windowStart += 1; // shrink the window
//         }
//         // remember the maximum length so far
//         maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
//     }

//     return maxLength;
// }

console.log('longestSubstringLengthKDistinct', longestSubstringLengthKDistinct('araaci', 2))

// Breakdown

/**
rightChar a
updated freq:  {}
0
length 1
------------
rightChar r
updated freq:  { a: 0 }
0
length 2
------------
rightChar a
else
1
length 2
------------
rightChar a
else
2
length 2
------------
rightChar c
updated freq:  { a: 2, r: 0 }
2
length 3
------------
{ a: 2, r: 0, c: 0 }
Start: 0 char: a freq: 2
{ a: 1, r: 0, c: 0 }
Start: 1 char: r freq: 0
Deleting:  r
rightChar i
updated freq:  { a: 1, c: 0 }
1
length 3
------------
{ a: 1, c: 0, i: 0 }
Start: 2 char: a freq: 1
{ a: 0, c: 0, i: 0 }
Start: 3 char: a freq: 0
Deleting:  a
longestSubstringLengthKDistinct 4
 */