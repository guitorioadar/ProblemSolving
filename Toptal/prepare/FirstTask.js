// Total

// While a user is downloading a file which is X bytes in size, your job is to
// provide a function to estimate the time remaining in minutes. The system
// has a record of the amount (in bytes) B downloaded each minute.
// If the file is not completely downloaded, estimate the rate by taking the
// simple average of the last Z observations.
// Write a function:
// function solution(X, B, 2);
// that returns the amount of time remaining in minute:| X is an integer
// representing the file size. B is an array of integers listing the bytes
// downloaded at each minute starting from the beginning of the download
// until now. Return an integer representing the number of minutes
// remaining. Z is an integer. You may assume that all the values are
// reasonable.

// Example:
// 1. X=100. B=[10.6.6.81. Z=2
// 30 bytes = 10+6+6+8 have been downloaded.
// So 70 bytes remain.
// The average of the last two minutes (Z=2) is 7=(6+8)/2.
// So the function should return 10 minutes (=70/7).

// Note that:
// * If there are fewer than Z observations, use what you do have.
// * Your estimate should be rounded up to the nearest integer (ceiling).
// * If the download is done, return 0
// * If the file is larger than the maximum integer, return -1


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, B, Z) {
    // write your code in JavaScript (Node.js 8.9.4)
    let bytes = B.reduce((a, b) => a + b, 0);
    console.log(bytes);
    let length = B.length;
    let sum = 0;
    for (let i = length - Z; i < length; i++) {
        sum += B[i];
    }
    let average = sum / Z;
    let minutes = Math.ceil((X - bytes) / average);
    return minutes;
}


console.log(solution(100, [10, 6, 6, 8], 2));