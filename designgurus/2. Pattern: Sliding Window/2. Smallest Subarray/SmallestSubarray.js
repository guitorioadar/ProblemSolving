findSubArrayLength = (numbers, s) => {
    let minLength = Infinity;

    let windowStart = 0;
    let windowSum = 0;
    
    for(let windowEnd = 0 ; windowEnd < numbers.length ; windowEnd++) {
        windowSum += numbers[windowEnd]; // add the next element
        console.log('windowSum: '+windowSum+' windowEnd Index: '+windowEnd+ ' value: '+numbers[windowEnd]);
        // shrink the window as small as possible until the 'window_sum' is smaller than 's'
        while(windowSum >= s){
            console.log('while ---- windowSum: '+windowSum+' >= S: '+s);
            let previousSum = windowSum;
            minLength = Math.min(minLength, windowEnd - windowStart + 1);
            windowSum -= numbers[windowStart];
            console.log('updated windowSum: '+windowSum+ ' => previousSum: '+previousSum+' - '+numbers[windowStart]+' windowStart Index: '+windowStart+' value: '+numbers[windowStart]);
            windowStart ++;
        }
    }

    if(minLength === Infinity) {
        return 0;
    }

    return minLength;
}

console.log("findSubArrayLength", findSubArrayLength([3, 4, 1, 1, 6, 9], 8));


// Explanation

/**
windowSum: 3 windowEnd Index: 0 value: 3
windowSum: 7 windowEnd Index: 1 value: 4
windowSum: 8 windowEnd Index: 2 value: 1
while ---- windowSum: 8 >= S: 8
updated windowSum: 5 => previousSum: 8 - 3 windowStart Index: 0 value: 3
windowSum: 6 windowEnd Index: 3 value: 1
windowSum: 12 windowEnd Index: 4 value: 6
while ---- windowSum: 12 >= S: 8
updated windowSum: 8 => previousSum: 12 - 4 windowStart Index: 1 value: 4
while ---- windowSum: 8 >= S: 8
updated windowSum: 7 => previousSum: 8 - 1 windowStart Index: 2 value: 1
windowSum: 16 windowEnd Index: 5 value: 9
while ---- windowSum: 16 >= S: 8
updated windowSum: 15 => previousSum: 16 - 1 windowStart Index: 3 value: 1
while ---- windowSum: 15 >= S: 8
updated windowSum: 9 => previousSum: 15 - 6 windowStart Index: 4 value: 6
while ---- windowSum: 9 >= S: 8
updated windowSum: 0 => previousSum: 9 - 9 windowStart Index: 5 value: 9
findSubArrayLength 1
 */