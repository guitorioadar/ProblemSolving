Triplet Sum to Zero (medium)


Problem Statement

Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

Example 1:

Input: [-3, 0, 1, 2, -1, 1, -2]
Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
Explanation: There are four unique triplets whose sum is equal to zero.
Example 2:

Input: [-5, 2, -1, -2, 3]
Output: [ [-5, 2, 3], [-2, -1, 3] ]
Explanation: There are two unique triplets whose sum is equal to zero.

Solution

This problem follows the Two Pointers pattern and shares similarities with Pair with Target Sum. A couple of differences are that the input array is not sorted and instead of a pair we need to find triplets with a target sum of zero.

To follow a similar approach, first, we will sort the array and then iterate through it taking one number at a time. Let’s say during our iteration we are at number ‘X’, so we need to find ‘Y’ and ‘Z’ such that X + Y + Z ==0. At this stage, our problem translates into finding a pair whose sum is equal to “-X” (as from the above equation Y + Z == -X).

Another difference from Pair with Target Sum is that we need to find all the unique triplets. To handle this, we have to skip any duplicate number. Since we will be sorting the array, so all the duplicate numbers will be next to each other and are easier to skip.

Code  

Here is what our algorithm will look like:

Java
```
import java.util.*;

class TripletSumToZero {

  public static List<List<Integer>> searchTriplets(int[] arr) {
    Arrays.sort(arr);
    List<List<Integer>> triplets = new ArrayList<>();
    for (int i = 0; i < arr.length - 2; i++) {
      if (i > 0 && arr[i] == arr[i - 1]) // skip same element to avoid duplicate triplets
        continue;
      searchPair(arr, -arr[i], i + 1, triplets);
    }

    return triplets;
  }

  private static void searchPair(int[] arr, int targetSum, 
                                 int left, List<List<Integer>> triplets) {
    int right = arr.length - 1;
    while (left < right) {
      int currentSum = arr[left] + arr[right];
      if (currentSum == targetSum) { // found the triplet
        triplets.add(Arrays.asList(-targetSum, arr[left], arr[right]));
        left++;
        right--;
        while (left < right && arr[left] == arr[left - 1])
          left++; // skip same element to avoid duplicate triplets
        while (left < right && arr[right] == arr[right + 1])
          right--; // skip same element to avoid duplicate triplets
      } else if (targetSum > currentSum)
        left++; // we need a pair with a bigger sum
      else
        right--; // we need a pair with a smaller sum
    }
  }

  public static void main(String[] args) {
    System.out.println(TripletSumToZero.searchTriplets(
                          new int[] { -3, 0, 1, 2, -1, 1, -2 }));
    System.out.println(TripletSumToZero.searchTriplets(new int[] { -5, 2, -1, -2, 3 }));
  }
}
```
Python3
```
def search_triplets(arr):
  arr.sort()
  triplets = []
  for i in range(len(arr)):
    if i > 0 and arr[i] == arr[i-1]:  # skip same element to avoid duplicate triplets
      continue
    search_pair(arr, -arr[i], i+1, triplets)

  return triplets


def search_pair(arr, target_sum, left, triplets):
  right = len(arr) - 1
  while(left < right):
    current_sum = arr[left] + arr[right]
    if current_sum == target_sum:  # found the triplet
      triplets.append([-target_sum, arr[left], arr[right]])
      left += 1
      right -= 1
      while left < right and arr[left] == arr[left - 1]:
        left += 1  # skip same element to avoid duplicate triplets
      while left < right and arr[right] == arr[right + 1]:
        right -= 1  # skip same element to avoid duplicate triplets
    elif target_sum > current_sum:
      left += 1  # we need a pair with a bigger sum
    else:
      right -= 1  # we need a pair with a smaller sum


def main():
  print(search_triplets([-3, 0, 1, 2, -1, 1, -2]))
  print(search_triplets([-5, 2, -1, -2, 3]))


main()
```

C++
```
using namespace std;

#include <algorithm>
#include <iostream>
#include <vector>

class TripletSumToZero {
public:
  static vector<vector<int>> searchTriplets(vector<int> &arr) {
    sort(arr.begin(), arr.end());
    vector<vector<int>> triplets;
    for (int i = 0; i < arr.size() - 2; i++) {
      // skip same element to avoid duplicate triplets
      if (i > 0 && arr[i] == arr[i - 1]) { 
        continue;
      }
      searchPair(arr, -arr[i], i + 1, triplets);
    }

    return triplets;
  }

private:
  static void searchPair(const vector<int> &arr, int targetSum, int left,
                         vector<vector<int>> &triplets) {
    int right = arr.size() - 1;
    while (left < right) {
      int currentSum = arr[left] + arr[right];
      if (currentSum == targetSum) { // found the pair
        triplets.push_back({-targetSum, arr[left], arr[right]});
        left++;
        right--;
        while (left < right && arr[left] == arr[left - 1]) {
          left++; // skip same element to avoid duplicate triplets
        }
        while (left < right && arr[right] == arr[right + 1]) {
          right--; // skip same element to avoid duplicate triplets
        }
      } else if (targetSum > currentSum) {
        left++; // we need a pair with a bigger sum
      } else {
        right--; // we need a pair with a smaller sum
      }
    }
  }
};

int main(int argc, char *argv[]) {
  vector<int> vec = {-3, 0, 1, 2, -1, 1, -2};
  auto result = TripletSumToZero::searchTriplets(vec);
  for (auto vec : result) {
    cout << "[";
    for (auto num : vec) {
      cout << num << " ";
    }
    cout << "]";
  }
  cout << endl;

  vec = {-5, 2, -1, -2, 3};
  result = TripletSumToZero::searchTriplets(vec);
  for (auto vec : result) {
    cout << "[";
    for (auto num : vec) {
      cout << num << " ";
    }
    cout << "]";
  }
}

```
JS
```
function search_triplets(arr) {
  arr.sort((a, b) => a - b);
  const triplets = [];
  for (i = 0; i < arr.length; i++) {
    // skip same element to avoid duplicate triplets
    if (i > 0 && arr[i] === arr[i - 1]) { 
      continue;
    }
    search_pair(arr, -arr[i], i + 1, triplets);
  }

  return triplets;
}


function search_pair(arr, target_sum, left, triplets) {
  let right = arr.length - 1;
  while (left < right) {
    const current_sum = arr[left] + arr[right];
    if (current_sum === target_sum) { // found the triplet
      triplets.push([-target_sum, arr[left], arr[right]]);
      left += 1;
      right -= 1;
      while (left < right && arr[left] === arr[left - 1]) {
        left += 1; // skip same element to avoid duplicate triplets
      }
      while (left < right && arr[right] === arr[right + 1]) {
        right -= 1; // skip same element to avoid duplicate triplets
      }
    } else if (target_sum > current_sum) {
      left += 1; // we need a pair with a bigger sum
    } else {
      right -= 1; // we need a pair with a smaller sum
    }
  }
}


console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
console.log(search_triplets([-5, 2, -1, -2, 3]));
```

Time Complexity


Sorting the array will take O(N * logN). The searchPair() function will take O(N^2). As we are calling searchPair() for every number in the input array, this means that overall searchTriplets() will take O(N∗logN+N^​2 ​), which is asymptotically equivalent to O(N^2).

Space Complexity

Ignoring the space required for the output array, the space complexity of the above algorithm will be O(N)which is required for sorting.

