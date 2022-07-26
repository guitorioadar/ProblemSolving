// Toptal
// Second Task

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
// 11. Given X=6263, return "1h46m" . (6263=1h44m23s, but this uses too many units, so we round the second largest unit up to 1h46m)
// 12. Given X=604799, return "1w" . (604799=6d23h60m59s, but this uses too many units, so we round the second largest unit up to 1w)


function solution(X) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (X <= 0) {
        return 0 + 's';
    }
    let time = {
        weeks: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    }
    let remainingTime = X;
    let timeUnit = {
        weeks: 604800,
        days: 86400,
        hours: 3600,
        minutes: 60,
        seconds: 1
    }
    let count = 0;
    properties = Object.keys(timeUnit);
    for (var i = 0; i < properties.length; i++) {
        let initialKey = properties[i];
        if (remainingTime >= timeUnit[initialKey]) {
            let value = Math.floor(remainingTime / timeUnit[initialKey]);
            if (value > 0 && count < 2) {
                time[initialKey] = value;
                remainingTime = remainingTime % timeUnit[initialKey];
                count++;
            } else {
                let keyUpdate = properties[i - 1];
                time[keyUpdate]++;
                // reverser loopp to times
                let keys = Object.keys(time).reverse();
                for (let j = 0; j < keys.length; j++) {
                    let key = keys[j];
                    if (key === 'days') {
                        if (time[key] === 7) {
                            time.weeks += 1;
                            time.days = 0;
                        }
                    } else if (key === 'hours') {
                        if (time[key] === 24) {
                            time.days += 1;
                            time.hours = 0;
                        }
                    } else if (key === 'minutes') {
                        if (time[key] === 60) {
                            time.hours += 1;
                            time.minutes = 0;
                        }
                    } else if (key === 'seconds') {
                        if (time[key] === 60) {
                            time.minutes += 1;
                            time.seconds = 0;
                        }
                    }
                }
                break;
            }
        }
    }
    let result = '';
    for (let key in time) {
        if (time[key] > 0) {
            result += time[key] + key.substring(0, 1);
        }
    }
    return result;
}

console.log('100: return 1m40s => ', solution(100));
console.log('7263: return 2h2m (2h1m3s) => ', solution(7263));
console.log('6263: return 1h45m (1h44m23s) => ', solution(6263));
console.log('0: return 0s => ', solution(0));
console.log('1: return 1s => ', solution(1));
console.log('60: return 1m => ', solution(60));
console.log('86400: return 1d => ', solution(86400));
console.log('86399: return 1d (23h60m59s) => ', solution(86399));
console.log('604800: return 1w => ', solution(604800));
console.log('604799: retutn 1w (6d23h60m59s) => ', solution(604799));
