Triplet Sum Close to Target (medium)


Problem Statement

Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

Example 1:

Input: [-2, 0, 1, 2], target=2
Output: 1
Explanation: The triplet [-2, 1, 2] has the closest sum to the target.
Example 2:

Input: [-3, -1, 1, 2], target=1
Output: 0
Explanation: The triplet [-3, 1, 2] has the closest sum to the target.
Example 3:

Input: [1, 0, 1, 1], target=100
Output: 3
Explanation: The triplet [1, 1, 1] has the closest sum to the target.

Solution

This problem follows the Two Pointers pattern and is quite similar to Triplet Sum to Zero.

We can follow a similar approach to iterate through the array, taking one number at a time. At every step, we will save the difference between the triplet and the target number, so that in the end, we can return the triplet with the closest sum.

Code  

Here is what our algorithm will look like:

Java
```
import java.util.*;

class TripletSumCloseToTarget {

  public static int searchTriplet(int[] arr, int targetSum) {
    if (arr == null || arr.length < 3)
      throw new IllegalArgumentException();

    Arrays.sort(arr);
    int smallestDifference = Integer.MAX_VALUE;
    for (int i = 0; i < arr.length - 2; i++) {
      int left = i + 1, right = arr.length - 1;
      while (left < right) {
        // comparing the sum of three numbers to the 'targetSum' can cause overflow
        // so, we will try to find a target difference
        int targetDiff = targetSum - arr[i] - arr[left] - arr[right];
        if (targetDiff == 0) //  we've found a triplet with an exact sum
          return targetSum; // return sum of all the numbers

        // the second part of the above 'if' is to handle the smallest sum when we have 
        // more than one solution
        if (Math.abs(targetDiff) < Math.abs(smallestDifference)
            || (Math.abs(targetDiff) == Math.abs(smallestDifference) 
                                   && targetDiff > smallestDifference))
          smallestDifference = targetDiff; // save the closest and the biggest difference

        if (targetDiff > 0)
          left++; // we need a triplet with a bigger sum
        else
          right--; // we need a triplet with a smaller sum
      }
    }
    return targetSum - smallestDifference;
  }

  public static void main(String[] args) {
    System.out.println(
       TripletSumCloseToTarget.searchTriplet(new int[] { -2, 0, 1, 2 }, 2));
    System.out.println(
       TripletSumCloseToTarget.searchTriplet(new int[] { -3, -1, 1, 2 }, 1));
    System.out.println(
       TripletSumCloseToTarget.searchTriplet(new int[] { 1, 0, 1, 1 }, 100));
  }
}
```
Python3
```
import math


def triplet_sum_close_to_target(arr, target_sum):
  arr.sort()
  smallest_difference = math.inf
  for i in range(len(arr)-2):
    left = i + 1
    right = len(arr) - 1
    while (left < right):
      target_diff = target_sum - arr[i] - arr[left] - arr[right]
      if target_diff == 0:  # we've found a triplet with an exact sum
        return target_sum  # return sum of all the numbers

      # the second part of the following 'if' is to handle the smallest sum when we have
      # more than one solution
      if abs(target_diff) < abs(smallest_difference) or 
                       (abs(target_diff) == abs(smallest_difference) and 
                                           target_diff > smallest_difference):
        smallest_difference = target_diff  # save the closest and the biggest difference

      if target_diff > 0:
        left += 1  # we need a triplet with a bigger sum
      else:
        right -= 1  # we need a triplet with a smaller sum

  return target_sum - smallest_difference


def main():
  print(triplet_sum_close_to_target([-2, 0, 1, 2], 2))
  print(triplet_sum_close_to_target([-3, -1, 1, 2], 1))
  print(triplet_sum_close_to_target([1, 0, 1, 1], 100))


main()
```

C++
```
using namespace std;

#include <algorithm>
#include <iostream>
#include <limits>
#include <vector>

class TripletSumCloseToTarget {
 public:
  static int searchTriplet(vector<int>& arr, int targetSum) {
    sort(arr.begin(), arr.end());
    int smallestDifference = numeric_limits<int>::max();
    for (int i = 0; i < arr.size() - 2; i++) {
      int left = i + 1, right = arr.size() - 1;
      while (left < right) {
        // comparing the sum of three numbers to the 'targetSum' can cause overflow
        // so, we will try to find a target difference
        int targetDiff = targetSum - arr[i] - arr[left] - arr[right];
        if (targetDiff == 0) {  //  we've found a triplet with an exact sum
          return targetSum;  // return sum of all the numbers
        }

        if (abs(targetDiff) < abs(smallestDifference) ||
              (abs(targetDiff) == abs(smallestDifference) && 
                             targetDiff > smallestDifference)) {
          smallestDifference = targetDiff;  // save the closest difference
        }

        if (targetDiff > 0) {
          left++;  // we need a triplet with a bigger sum
        } else {
          right--;  // we need a triplet with a smaller sum
        }
      }
    }
    return targetSum - smallestDifference;
  }
};

int main(int argc, char* argv[]) {
  vector<int> vec = {-2, 0, 1, 2};
  cout << TripletSumCloseToTarget::searchTriplet(vec, 2) << endl;
  vec = {-3, -1, 1, 2};
  cout << TripletSumCloseToTarget::searchTriplet(vec, 1) << endl;
  vec = {1, 0, 1, 1};
  cout << TripletSumCloseToTarget::searchTriplet(vec, 100) << endl;
}
```

JS
```
function triplet_sum_close_to_target(arr, targetSum) {
  arr.sort((a, b) => a - b);
  let smallest_difference = Infinity;
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1,
      right = arr.length - 1;
    while (left < right) {
      const target_diff = targetSum - arr[i] - arr[left] - arr[right];
      if (target_diff === 0) { // we've found a triplet with an exact sum
        return targetSum; // return sum of all the numbers
      }

      // the second part of the following 'if' is to handle the smallest sum when we 
      // have more than one solution
      if (Math.abs(target_diff) < Math.abs(smallest_difference) ||
        (Math.abs(target_diff) === Math.abs(smallest_difference) && 
                                 target_diff > smallest_difference)) {
        smallest_difference = target_diff; // save the closest and the biggest difference
      }


      if (target_diff > 0) {
        left += 1; // we need a triplet with a bigger sum
      } else {
        right -= 1; // we need a triplet with a smaller sum
      }
    }
  }
  return targetSum - smallest_difference;
}


console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2));
console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1));
console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100));
```

Time Complexity


Sorting the array will take O(N* logN). Overall, the function will take O(N * logN + N^2)
​​ ), which is asymptotically equivalent to O(N^2).

Space Complexity

The above algorithm’s space complexity will be O(N), which is required for sorting.

