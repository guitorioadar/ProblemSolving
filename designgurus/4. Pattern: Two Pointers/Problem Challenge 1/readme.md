Problem Challenge 1: Quadruple Sum to Target (medium)


Problem Statement

Given an array of unsorted numbers and a target number, find all unique quadruplets in it, whose sum is equal to the target number.

Example 1:

Input: [4, 1, 2, -1, 1, -3], target=1
Output: [-3, -1, 1, 4], [-3, 1, 1, 2]
Explanation: Both the quadruplets add up to the target.
Example 2:

Input: [2, 0, -1, 1, -2, 2], target=2
Output: [-2, 0, 2, 2], [-1, 0, 1, 2]
Explanation: Both the quadruplets add up to the target.

Solution

This problem follows the Two Pointers pattern and shares similarities with Triplet Sum to Zero.

We can follow a similar approach to iterate through the array, taking one number at a time. At every step during the iteration, we will search for the quadruplets similar to Triplet Sum to Zero whose sum is equal to the given target.

Code  

Here is what our algorithm will look like:

Java
```
import java.util.*;

class QuadrupleSumToTarget {

  public static List<List<Integer>> searchQuadruplets(int[] arr, int target) {
    Arrays.sort(arr);
    List<List<Integer>> quadruplets = new ArrayList<>();
    for (int i = 0; i < arr.length - 3; i++) {
      // skip same element to avoid duplicate quadruplets
      if (i > 0 && arr[i] == arr[i - 1]) 
        continue;
      for (int j = i + 1; j < arr.length - 2; j++) {
        // skip same element to avoid duplicate quadruplets
        if (j > i + 1 && arr[j] == arr[j - 1]) 
          continue;
        searchPairs(arr, target, i, j, quadruplets);
      }
    }
    return quadruplets;
  }

  private static void searchPairs(int[] arr, int targetSum, int first, 
                                  int second, List<List<Integer>> quadruplets) {
    int left = second + 1;
    int right = arr.length - 1;
    while (left < right) {
      int sum = arr[first] + arr[second] + arr[left] + arr[right];
      if (sum == targetSum) { // found the quadruplet
        quadruplets.add(Arrays.asList(arr[first], arr[second], arr[left], arr[right]));
        left++;
        right--;
        while (left < right && arr[left] == arr[left - 1])
          left++; // skip same element to avoid duplicate quadruplets
        while (left < right && arr[right] == arr[right + 1])
          right--; // skip same element to avoid duplicate quadruplets
      } else if (sum < targetSum)
        left++; // we need a pair with a bigger sum
      else
        right--; // we need a pair with a smaller sum
    }
  }

  public static void main(String[] args) {
    System.out.println(
        QuadrupleSumToTarget.searchQuadruplets(new int[] { 4, 1, 2, -1, 1, -3 }, 1));
    System.out.println(
        QuadrupleSumToTarget.searchQuadruplets(new int[] { 2, 0, -1, 1, -2, 2 }, 2));
  }
}
```
Python3
```
def search_quadruplets(arr, target):
  arr.sort()
  quadruplets = []
  for i in range(0, len(arr)-3):
    # skip same element to avoid duplicate quadruplets
    if i > 0 and arr[i] == arr[i - 1]:
      continue
    for j in range(i + 1, len(arr)-2):
      # skip same element to avoid duplicate quadruplets
      if j > i + 1 and arr[j] == arr[j - 1]:
        continue
      search_pairs(arr, target, i, j, quadruplets)
  return quadruplets


def search_pairs(arr, target_sum, first, second, quadruplets):
  left = second + 1
  right = len(arr) - 1
  while (left < right):
    quad_sum = arr[first] + arr[second] + arr[left] + arr[right]
    if quad_sum == target_sum:  # found the quadruplet
      quadruplets.append(
        [arr[first], arr[second], arr[left], arr[right]])
      left += 1
      right -= 1
      while (left < right and arr[left] == arr[left - 1]):
        left += 1  # skip same element to avoid duplicate quadruplets
      while (left < right and arr[right] == arr[right + 1]):
        right -= 1  # skip same element to avoid duplicate quadruplets
    elif quad_sum < target_sum:
      left += 1  # we need a pair with a bigger sum
    else:
      right -= 1  # we need a pair with a smaller sum


def main():
  print(search_quadruplets([4, 1, 2, -1, 1, -3], 1))
  print(search_quadruplets([2, 0, -1, 1, -2, 2], 2))


main()
```

C++
```
using namespace std;

#include <algorithm>
#include <iostream>
#include <vector>

class QuadrupleSumToTarget {
 public:
  static vector<vector<int>> searchQuadruplets(vector<int> &arr, int target) {
    sort(arr.begin(), arr.end());
    vector<vector<int>> quadruplets;
    for (int i = 0; i < arr.size() - 3; i++) {
      // skip same element to avoid duplicate quadruplets
      if (i > 0 && arr[i] == arr[i - 1]) { 
        continue;
      }
      for (int j = i + 1; j < arr.size() - 2; j++) {
        if (j > i + 1 &&
            arr[j] == arr[j - 1]) {  // skip same element to avoid duplicate quadruplets
          continue;
        }
        searchPairs(arr, target, i, j, quadruplets);
      }
    }
    return quadruplets;
  }

 private:
  static void searchPairs(const vector<int> &arr, int targetSum, int first, int second,
                          vector<vector<int>> &quadruplets) {
    int left = second + 1;
    int right = arr.size() - 1;
    while (left < right) {
      int sum = arr[first] + arr[second] + arr[left] + arr[right];
      if (sum == targetSum) {  // found the quadruplet
        quadruplets.push_back({arr[first], arr[second], arr[left], arr[right]});
        left++;
        right--;
        while (left < right && arr[left] == arr[left - 1]) {
          left++;  // skip same element to avoid duplicate quadruplets
        }
        while (left < right && arr[right] == arr[right + 1]) {
          right--;  // skip same element to avoid duplicate quadruplets
        }
      } else if (sum < targetSum) {
        left++;  // we need a pair with a bigger sum
      } else {
        right--;  // we need a pair with a smaller sum
      }
    }
  }
};

int main(int argc, char *argv[]) {
  vector<int> vec = {4, 1, 2, -1, 1, -3};
  auto result = QuadrupleSumToTarget::searchQuadruplets(vec, 1);
  for (auto vec : result) {
    cout << "[";
    for (auto num : vec) {
      cout << num << " ";
    }
    cout << "]";
  }
  cout << endl;

  vec = {2, 0, -1, 1, -2, 2};
  result = QuadrupleSumToTarget::searchQuadruplets(vec, 2);
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
function search_quadruplets(arr, target) {
  arr.sort((a, b) => a - b)
  const quadruplets = [];
  for (let i = 0; i < arr.length - 3; i++) {
    // skip same element to avoid duplicate quadruplets
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < arr.length - 2; j++) {
      // skip same element to avoid duplicate quadruplets
      if (j > i + 1 && arr[j] === arr[j - 1]) {
        continue;
      }
      search_pairs(arr, target, i, j, quadruplets);
    }
  }
  return quadruplets;
}


function search_pairs(arr, targetSum, first, second, quadruplets) {
  let left = second + 1,
    right = arr.length - 1;
  while ((left < right)) {
    sum = arr[first] + arr[second] + arr[left] + arr[right];
    if (sum === targetSum) { // found the quadruplet
      quadruplets.push([arr[first], arr[second], arr[left], arr[right]]);
      left += 1;
      right -= 1;
      while ((left < right && arr[left] === arr[left - 1])) {
        left += 1; // skip same element to avoid duplicate quadruplets
      }
      while ((left < right && arr[right] === arr[right + 1])) {
        right -= 1; // skip same element to avoid duplicate quadruplets
      }
    } else if (sum < targetSum) {
      left += 1; // we need a pair with a bigger sum
    } else {
      right -= 1; // we need a pair with a smaller sum
    }
  }
}


console.log(search_quadruplets([4, 1, 2, -1, 1, -3], 1));
console.log(search_quadruplets([2, 0, -1, 1, -2, 2], 2));

```

Time Complexity


Sorting the array will take O(N*logN). Overall searchQuadruplets() will take O(N * logN + N^3), which is asymptotically equivalent to O(N^3).

Space Complexity

The space complexity of the above algorithm will be O(N) which is required for sorting.

