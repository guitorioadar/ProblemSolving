// Total
// First Problem

function solution(X, B, Z) {
    // write your code in JavaScript (Node.js 8.9.4)
    let bytes = B.reduce((a, b) => a + b);
    console.log('bytes',bytes);
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
console.log(solution(100, [10, 6, 6, 8, 10, 15, 2, 4], 3));