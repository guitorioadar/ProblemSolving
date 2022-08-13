Maximum Sum Subarray of Size K (easy)

Problem Statement

Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

Example 1:

Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].
Example 2:

Input: [2, 3, 4, 1, 5], k=2 
Output: 7
Explanation: Subarray with maximum sum is [3, 4].

Solution

A basic brute force solution will be to calculate the sum of all ‘k’ sized subarrays of the given array to find the subarray with the highest sum. We can start from every index of the given array and add the next ‘k’ elements to find the subarray’s sum. Following is the visual representation of this algorithm for Example-1:


Code

Here is what our algorithm will look like:

Java
```
class MaxSumSubArrayOfSizeK {
    public static int findMaxSumSubArray(int k, int[] arr) {
        int maxSum = 0, windowSum;
        for (int i = 0; i <= arr.length - k; i++) {
            windowSum = 0;
            for (int j = i; j < i + k; j++) {
                windowSum += arr[j];
            }
            maxSum = Math.max(maxSum, windowSum);
        }

        return maxSum;
    }

    public static void main(String[] args) {
        System.out.println("Maximum sum of a subarray of size K: "
                + MaxSumSubArrayOfSizeK.findMaxSumSubArray(3, new int[] { 2, 1, 5, 1, 3, 2 }));
        System.out.println("Maximum sum of a subarray of size K: "
                + MaxSumSubArrayOfSizeK.findMaxSumSubArray(2, new int[] { 2, 3, 4, 1, 5 }));
    }
}
```
Python3
```
def max_sub_array_of_size_k(k, arr):
    max_sum = 0
    window_sum = 0

    for i in range(len(arr) - k + 1):
        window_sum = 0
        for j in range(i, i+k):
            window_sum += arr[j]
        max_sum = max(max_sum, window_sum)
    return max_sum


def main():
    print("Maximum sum of a subarray of size K: " +
          str(max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])))
    print("Maximum sum of a subarray of size K: " +
          str(max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])))


main()
```
C++
```
using namespace std;

#include <iostream>
#include <vector>

class MaxSumSubArrayOfSizeK
{
public:
    static int findMaxSumSubArray(int k, const vector<int> &arr)
    {
        int maxSum = 0, windowSum;
        for (int i = 0; i <= arr.size() - k; i++)
        {
            windowSum = 0;
            for (int j = i; j < i + k; j++)
            {
                windowSum += arr[j];
            }
            maxSum = max(maxSum, windowSum);
        }

        return maxSum;
    }
};

int main(int argc, char *argv[])
{
    cout << "Maximum sum of a subarray of size K: "
         << MaxSumSubArrayOfSizeK::findMaxSumSubArray(3, vector<int>{2, 1, 5, 1, 3, 2})
         << endl;
    cout << "Maximum sum of a subarray of size K: "
         << MaxSumSubArrayOfSizeK::findMaxSumSubArray(2, vector<int>{2, 3, 4, 1, 5})
         << endl;
}
```

JS
```
function max_sub_array_of_size_k(k, arr) {
    let maxSum = 0,
        windowSum = 0;

    for (i = 0; i < arr.length - k + 1; i++) {
        windowSum = 0;
        for (j = i; j < i + k; j++) {
            windowSum += arr[j];
        }
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}


console.log(
    `Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])}`);
console.log(
    `Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])}`);
```
The above algorithm’s time complexity will be O(N∗K), where ‘N’ is the total number of elements in the given array. Is it possible to find a better algorithm than this?

A better approach

If you observe closely, you will realize that to calculate the sum of a contiguous subarray, we can utilize the sum of the previous subarray. For this, consider each subarray as a Sliding Window of size ‘k.’ To calculate the sum of the next subarray, we need to slide the window ahead by one element. So to slide the window forward and calculate the sum of the new position of the sliding window, we need to do two things:

Subtract the element going out of the sliding window, i.e., subtract the first element of the window.
Add the new element getting included in the sliding window, i.e., the element coming right after the end of the window.
This approach will save us from re-calculating the sum of the overlapping part of the sliding window. Here is what our algorithm will look like:

Java
```
class MaxSumSubArrayOfSizeK {
    public static int findMaxSumSubArray(int k, int[] arr) {
        int windowSum = 0, maxSum = 0;
        int windowStart = 0;
        for (int windowEnd = 0; windowEnd < arr.length; windowEnd++) {
            windowSum += arr[windowEnd]; // add the next element
            // slide the window, no need to slide if we've not hit the window size of 'k'
            if (windowEnd >= k - 1) {
                maxSum = Math.max(maxSum, windowSum);
                windowSum -= arr[windowStart]; // subtract the element going out
                windowStart++; // slide the window ahead
            }
        }

        return maxSum;
    }

    public static void main(String[] args) {
        System.out.println("Maximum sum of a subarray of size K: "
                + MaxSumSubArrayOfSizeK.findMaxSumSubArray(3, new int[] { 2, 1, 5, 1, 3, 2 }));
        System.out.println("Maximum sum of a subarray of size K: "
                + MaxSumSubArrayOfSizeK.findMaxSumSubArray(2, new int[] { 2, 3, 4, 1, 5 }));
    }
}
```
Python3
```
def max_sub_array_of_size_k(k, arr):
    max_sum, window_sum = 0, 0
    window_start = 0

    for window_end in range(len(arr)):
        window_sum += arr[window_end]  # add the next element
        # slide the window, no need to slide if we've not hit the required window size of 'k'
        if window_end >= k-1:
            max_sum = max(max_sum, window_sum)
            window_sum -= arr[window_start]  # subtract the element going out
            window_start += 1  # slide the window ahead
    return max_sum


def main():
    print("Maximum sum of a subarray of size K: " +
          str(max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])))
    print("Maximum sum of a subarray of size K: " +
          str(max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])))


main()
```
C++
```
using namespace std;

#include <iostream>
#include <vector>

class MaxSumSubArrayOfSizeK
{
public:
    static int findMaxSumSubArray(int k, const vector<int> &arr)
    {
        int windowSum = 0, maxSum = 0;
        int windowStart = 0;
        for (int windowEnd = 0; windowEnd < arr.size(); windowEnd++)
        {
            windowSum += arr[windowEnd]; // add the next element
            // slide the window, no need to slide if we've not hit the window size of 'k'
            if (windowEnd >= k - 1)
            {
                maxSum = max(maxSum, windowSum);
                windowSum -= arr[windowStart]; // subtract the element going out
                windowStart++;                 // slide the window ahead
            }
        }

        return maxSum;
    }
};

int main(int argc, char *argv[])
{
    cout << "Maximum sum of a subarray of size K: "
         << MaxSumSubArrayOfSizeK::findMaxSumSubArray(3, vector<int>{2, 1, 5, 1, 3, 2})
         << endl;
    cout << "Maximum sum of a subarray of size K: "
         << MaxSumSubArrayOfSizeK::findMaxSumSubArray(2, vector<int>{2, 3, 4, 1, 5})
         << endl;
}
```
JS
```
function max_sub_array_of_size_k(k, arr) {
    let maxSum = 0,
        windowSum = 0,
        windowStart = 0;

    for (window_end = 0; window_end < arr.length; window_end++) {
        windowSum += arr[window_end]; // add the next element
        // slide the window, no need to slide if we've not hit the window size of 'k'
        if (window_end >= k - 1) {
            maxSum = Math.max(maxSum, windowSum);
            windowSum -= arr[windowStart]; // subtract the element going out
            windowStart += 1; // slide the window ahead
        }
    }
    return maxSum;
}
```

console.log(`Maximum sum of a subarray of size K: `
    + max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2]));
console.log(`Maximum sum of a subarray of size K: `
    + max_sub_array_of_size_k(2, [2, 3, 4, 1, 5]));


Time Complexity

The time complexity of the above algorithm will be O(N)O(N).

Space Complexity

The algorithm runs in constant space O(1)O(1).