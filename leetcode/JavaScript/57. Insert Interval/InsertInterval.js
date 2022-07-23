// Leetcode
//57. Insert Interval
//Runtime: 72 ms, faster than 100.00% of JavaScript online submissions for Insert Interval.
//Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Insert Interval.
// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
// Return intervals after the insertion.
// Example 1:
// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:
// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
// Example 3:
// Input: intervals = [], newInterval = [5,7]
// Output: [[5,7]]
// Example 4:
// Input: intervals = [[1,5]], newInterval = [2,3]
// Output: [[1,5]]

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
insertInterval = (intervals, newInterval) => {

    let result = [];
    let start = newInterval[0]; // 4
    let end = newInterval[1]; // 8
    let i = 0;
    // ([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16],[19,20],[23,24]], [4, 8])

                                          //0,2     //4 //  restult = [[1,2]]
                                        //   only one iteration and i = 1;
    while (i < intervals.length && intervals[i][1] < start) {
        result.push(intervals[i]);
        i++;
    }
        // 1                              // 3    // 8
        // 2                              // 6    // 8
        // 3                              // 8    // 8
        // only 3 iteration and i = 4 , start = 3 and end = 10
    while (i < intervals.length && intervals[i][0] <= end) {
//for i=1->3            // 4            // 3 
//for i=2->3            // 3            // 6 
//for i=3->1            // 3            // 8 
        start = Math.min(start, intervals[i][0]);
//for i=1->8           // 8            // 5 
//for i=2->8           // 8            // 7 
//for i=3->10           // 8            // 10 
        end = Math.max(end, intervals[i][1]);
        i++;
    }
    result.push([start, end]); // restult = [[1,2], [3,10]] and i = 4
    while (i < intervals.length) {
        // For i = 4 -> result => [[1,2], [3,10],[12,16]]
        // For i = 5 -> result => [[1,2], [3,10],[12,16],[19,20]]
        // For i = 6 -> result => [[1,2], [3,10],[12,16],[19,20],[23,24]]
        result.push(intervals[i]);
        i++;
    }
    return result;

}




console.log(insertInterval([[1, 3], [11, 12]], [6, 7])); // [[1,3],[6,7],[11,12]]
console.log(insertInterval([[1, 3], [6, 9]], [2, 5])); // [[1,5],[6,9]]
console.log(insertInterval([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16],[19,20],[23,24]], [4, 8])) // [[1,2],[3,10],[12,16]]
console.log(insertInterval([], [5, 7])) // [[5,7]]


// let activities = [
//     ['Work', 9],
//     ['Eat', 1],
//     ['Commute', 2],
//     ['Play Game', 1],
//     ['Sleep', 7]
// ];

// activities.forEach((activity) => {
//     activity.forEach((data,index) => {
//         console.log(index+': '+data);
//     });
// });

// loop the outer array
// for (let i = 0; i < activities.length; i++) {
//     // get the size of the inner array
//     var innerArrayLength = activities[i].length;
//     // loop the inner array
//     for (let j = 0; j < innerArrayLength; j++) {
//         console.log('[' + i + ',' + j + '] = ' + activities[i][j]);
//     }
// }