
bruteforceCalcualteAverage = (numbers, k) => {

    let start = 0;
    let end = k;
    let result = [];
    for (let i = 0; i <= numbers.length - 5; i++) {
        let sum = 0;
        for (let j = start; j < end; j++) {
            sum += numbers[j];
        }
        result.push(sum / k);
        end++;
        start++;
    }

    return result;
}

console.log('bruteforceCalcualteAverage: ',bruteforceCalcualteAverage([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));


simpleAverage = (num) => {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }

    return sum / 5;
}

console.log(simpleAverage([1, 3, 2, 6, -1]));
console.log(simpleAverage([3, 2, 6, -1, 4]));


// Sliding window
calcualteAverage = (numbers, k) => {
    console.log('K: ',k);
    const result = [];
    let windowSum = 0.0,
        windowStart = 0;
    for(let windowEnd = 0; windowEnd < numbers.length; windowEnd++) {
        windowSum += numbers[windowEnd]
        console.log('windoEnd: '+windowEnd+', windowEnd Value: '+numbers[windowEnd] +', windowSum: '+windowSum);

        if(windowEnd >= k-1) {
            console.log('Average is: ',windowSum/k);
            result.push(windowSum/k);
            console.log('windowEnd: '+windowEnd + '>= k-1 = '+(k-1)+' and present windowSum: '+windowSum);
            windowSum -= numbers[windowStart];
            console.log('subtracting the window start value: '+numbers[windowStart]+' Updated windowSum: '+windowSum);
            windowStart++;
        }
    }

    return result;
}

console.log('calcualteAverage: ',calcualteAverage([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));


// code breakdown
/** 

K:  5
windoEnd: 0, windowEnd Value: 1, windowSum: 1
windoEnd: 1, windowEnd Value: 3, windowSum: 4
windoEnd: 2, windowEnd Value: 2, windowSum: 6
windoEnd: 3, windowEnd Value: 6, windowSum: 12
windoEnd: 4, windowEnd Value: -1, windowSum: 11
Average is:  2.2
windowEnd: 4>= k-1 = 4 and present windowSum: 11
subtracting the window start value: 1 Updated windowSum: 10
windoEnd: 5, windowEnd Value: 4, windowSum: 14
Average is:  2.8
windowEnd: 5>= k-1 = 4 and present windowSum: 14
subtracting the window start value: 3 Updated windowSum: 11
windoEnd: 6, windowEnd Value: 1, windowSum: 12
Average is:  2.4
windowEnd: 6>= k-1 = 4 and present windowSum: 12
subtracting the window start value: 2 Updated windowSum: 10
windoEnd: 7, windowEnd Value: 8, windowSum: 18
Average is:  3.6
windowEnd: 7>= k-1 = 4 and present windowSum: 18
subtracting the window start value: 6 Updated windowSum: 12
windoEnd: 8, windowEnd Value: 2, windowSum: 14
Average is:  2.8
windowEnd: 8>= k-1 = 4 and present windowSum: 14
subtracting the window start value: -1 Updated windowSum: 15

calcualteAverage:  [ 2.2, 2.8, 2.4, 3.6, 2.8 ]

*/