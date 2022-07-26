// Toptal
// Second Task

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
console.log('604799: retutn 1w (6d23h60m59s)', solution(604799));
