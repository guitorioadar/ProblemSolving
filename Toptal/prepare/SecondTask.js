// From an integer X representing a time duration in seconds produce a simplified string representation.
// For example, given:
// 100
// You should output:
// "1m40s"
// Use the following abbreviations w,d,h,m,storepresent:
// * 1w is 1 week
// * 1d is 1 day
// * 1h is 1 hour
// * 1m is 1 minute
// * 1s is 1 second
// Only the two largest non-zero units should be used. Round up the second
// unit if necessary so that the output only has two units even though this
// might mean the output is for slightly more time than X seconds.
// Write a function:
// function solution(X);
// that, given an integer X, returns a string representing the duration.
// Examples:
// 1. Given X=100, return "1m40s"
// 2. Given X=7263, return "2h2m". (7263s=2h1m3s, but this uses too many units, so we round the second largest unit up to 2h2m)
// 3. Given X=0, return "0s"
// 4. Given X=1, return "1s"
// 5. Given X=60, return "1m"
// 6. Given X=3600, return "1h"
// 7. Given X=86400, return "1d"
// 8. Given X=86399, return "1d". (86399=23h60m59s, but this uses too many units, so we round the second largest unit up to 1d)
// 9. Given X=604800, return "1w"
// 10. Given X=604799, return "1W". (604799=6d23h60m59s, but this uses too many units, so we round the second largest unit up to 1W)
// 11. Given X=6263, return "1h46m" . (6263=1h44m23s, but this uses too many units, so we round the second largest unit up to 2w)




// console.log('100:',solution(100));
// console.log('7263:',solution(7263));
// console.log('0:',solution(0));
// console.log('1:',solution(1));
// console.log('60',solution(60));
// console.log('604800:',solution(604800));
// console.log('604799: ',solution(604799));


// function solution(X) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let count = 0;
//     let seconds = X % 60;
//     let minutes = Math.floor(X / 60) % 60;
//     let hours = Math.floor(X / 3600) % 24;
//     let days = Math.floor(X / 86400) % 7;
//     let weeks = Math.floor(X / 604800);
//     let result = "";

//     let arr = [];

//     if (X <= 0) {
//         return 0 + 's';
//     }
//     if (count < 2 && weeks > 0) {
//         arr.push(weeks + "w");
//         // count++;
//     }
//     if (count < 2 && days > 0) {
//         // result += days + "d";
//         arr.push(days + "d");
//         // count++;
//     }
//     if (count < 2 && hours > 0) {
//         // result += hours + "h";
//         arr.push(hours + "h");
//         // count++;
//     }
//     if (count < 2 && minutes > 0) {
//         // result += minutes + "m";
//         if (seconds > 0) {
//             arr.push((minutes + 1) + "m");
//         } else {
//             arr.push(minutes + "m");
//         }
//         // count++;
//     }
//     if (count < 2 && seconds > 0) {
//         // result += seconds + "s";
//         arr.push(seconds + "s");
//         // count++;
//     }
//     if (arr.length >= 3) {
//         result = arr[0] + arr[1];
//     }
//     return result;
// }

// console.log(solution(100));
// console.log(solution(7263));
// console.log(solution(0));
// console.log(solution(1));
// console.log(solution(60));
// console.log(solution(604800));



// Submitted Answer
// function solution(X) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let count = 0;
//     let seconds = X % 60;
//     let minutes = Math.floor(X / 60) % 60;
//     let hours = Math.floor(X / 3600) % 24;
//     let days = Math.floor(X / 86400) % 7;
//     let weeks = Math.floor(X / 604800);
//     let result = "";

//     if(X <= 0){
//         return 0+'s';
//     }
//     if (count < 2 && weeks > 0) {
//         result += weeks + "w";
//         count++;
//     }
//     if (count < 2 && days > 0) {
//         result += days + "d";
//         count++;
//     }
//     if (count < 2 && hours > 0) {
//         result += hours + "h";
//         count++;
//     }
//     if (count < 2 && minutes > 0) {
//         result += minutes + "m";
//         count++;
//     }
//     if (count < 2 && seconds > 0) {
//         result += seconds + "s";
//         count++;
//     }
//     return result;
// }

// using array to store the time
function solution(X) {
    // write your code in JavaScript (Node.js 8.9.4)
    let count = 0;
    let seconds = X % 60;
    let minutes = Math.floor(X / 60) % 60;
    let hours = Math.floor(X / 3600) % 24;
    let days = Math.floor(X / 86400) % 7;
    let weeks = Math.floor(X / 604800);
    let result = "";

    let arr = [];

    if (X <= 0) {
        return 0 + 's';
    }
    if (weeks > 0) {
        arr.push(weeks + "w");
        // count++;
    }
    if (days > 0) {
        // result += days + "d";
        arr.push(days + "d");
        // count++;
    }
    if (hours > 0) {
        // result += hours + "h";
        arr.push(hours + "h");
        // count++;
    }
    if (minutes > 0) {
        // result += minutes + "m";
        if (seconds > 0) {
            arr.push((minutes + 1) + "m");
        } else {
            arr.push(minutes + "m");
        }
        // count++;
    }
    if (seconds > 0) {
        // result += seconds + "s";
        arr.push(seconds + "s");
        // count++;
    }

    // if (arr.length >= 3) {
    //     return result = arr[0] + arr[1];
    // }else{
    //     return arr.join('');
    // }

    return arr.join('');
}


console.log('100:',solution(100));
console.log('7263:',solution(7263));
console.log('6263:',solution(6263));
console.log('0:',solution(0));
console.log('1:',solution(1));
console.log('60',solution(60));
console.log('86400',solution(86400));
console.log('86399',solution(86399));
console.log('604800:',solution(604800));
console.log('604799: ',solution(604799));