findMaxSum = (numbers,k) => {
    let maxSum = 0;
    let windowSum = 0,
    windowStart = 0;

    for (let windowEnd = 0; windowEnd < numbers.length; windowEnd++){
        windowSum += numbers[windowEnd];
        if(windowEnd >= k-1){
            maxSum = Math.max(maxSum,windowSum);
            windowSum -= numbers[windowStart];
            windowStart++;
        }
    }

    return maxSum;
}

console.log('findMaxSum',findMaxSum([2, 1, 5, 1, 3, 2],3))