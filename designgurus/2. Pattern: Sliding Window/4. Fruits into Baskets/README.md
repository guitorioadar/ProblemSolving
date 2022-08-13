Fruits into Baskets (medium)


Problem Statement
You are visiting a farm to collect fruits. The farm has a single row of fruit trees. You will be given two baskets, and your goal is to pick as many fruits as possible to be placed in the given baskets.

You will be given an array of characters where each character represents a fruit tree. The farm has following restrictions:

Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold.
You can start with any tree, but you can’t skip a tree once you have started.
You will pick exactly one fruit from every tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
Write a function to return the maximum number of fruits in both baskets.


Example 1:
Input: Fruit=['A', 'B', 'C', 'A', 'C']
Output: 3
Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

Example 2:
Input: Fruit = ['A', 'B', 'C', 'B', 'B', 'C']
Output: 5
Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']

Solution
This problem follows the Sliding Window pattern and is quite similar to Longest Substring with K Distinct Characters. In this problem, we need to find the length of the longest subarray with no more than two distinct characters (or fruit types!). This transforms the current problem into Longest Substring with K Distinct Characters where K=2.


Code
Here is what our algorithm will look like, only the highlighted lines are different from Longest Substring with K Distinct Characters:

Java
```
import java.util.*;

class MaxFruitCountOf2Types {
    public static int findLength(char[] arr) {
        int windowStart = 0, maxLength = 0;
        Map<Character, Integer> fruitFrequencyMap = new HashMap<>();
        // try to extend the range [windowStart, windowEnd]
        for (int windowEnd = 0; windowEnd < arr.length; windowEnd++) {
            fruitFrequencyMap.put(arr[windowEnd],
                    fruitFrequencyMap.getOrDefault(arr[windowEnd], 0) + 1);
            // shrink the sliding window, until we're left with '2' fruits in the frequency
            // map
            while (fruitFrequencyMap.size() > 2) {
                fruitFrequencyMap.put(arr[windowStart],
                        fruitFrequencyMap.get(arr[windowStart]) - 1);
                if (fruitFrequencyMap.get(arr[windowStart]) == 0) {
                    fruitFrequencyMap.remove(arr[windowStart]);
                }
                windowStart++; // shrink the window
            }
            maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
        }

        return maxLength;
    }

    public static void main(String[] args) {
        System.out.println("Maximum number of fruits: " +
                MaxFruitCountOf2Types.findLength(new char[] { 'A', 'B', 'C', 'A', 'C' }));
        System.out.println("Maximum number of fruits: " +
                MaxFruitCountOf2Types.findLength(new char[] { 'A', 'B', 'C', 'B', 'B', 'C' }));
    }
}
```
Python3
```
def fruits_into_baskets(fruits):
    window_start = 0
    max_length = 0
    fruit_frequency = {}

    # try to extend the range [window_start, window_end]
    for window_end in range(len(fruits)):
        right_fruit = fruits[window_end]
        if right_fruit not in fruit_frequency:
            fruit_frequency[right_fruit] = 0
        fruit_frequency[right_fruit] += 1

        # shrink the sliding window, until we are left with '2' fruits in the fruit
        # frequency dictionary
        while len(fruit_frequency) > 2:
            left_fruit = fruits[window_start]
            fruit_frequency[left_fruit] -= 1
            if fruit_frequency[left_fruit] == 0:
                del fruit_frequency[left_fruit]
            window_start += 1  # shrink the window
        max_length = max(max_length, window_end-window_start + 1)
    return max_length


def main():
    print("Maximum number of fruits: "
          + str(fruits_into_baskets(['A', 'B', 'C', 'A', 'C'])))
    print("Maximum number of fruits: "
          + str(fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C'])))


main()
```

C++
```
using namespace std;

#include <iostream>
#include <unordered_map>
#include <vector>

class MaxFruitCountOf2Types
{
public:
    static int findLength(const vector<char> &arr)
    {
        int windowStart = 0, maxLength = 0;
        unordered_map<char, int> fruitFrequencyMap;
        // try to extend the range [windowStart, windowEnd]
        for (int windowEnd = 0; windowEnd < arr.size(); windowEnd++)
        {
            fruitFrequencyMap[arr[windowEnd]]++;
            // shrink the sliding window, until we're left with '2' fruits in the frequency map
            while ((int)fruitFrequencyMap.size() > 2)
            {
                fruitFrequencyMap[arr[windowStart]]--;
                if (fruitFrequencyMap[arr[windowStart]] == 0)
                {
                    fruitFrequencyMap.erase(arr[windowStart]);
                }
                windowStart++; // shrink the window
            }
            maxLength = max(maxLength, windowEnd - windowStart + 1);
        }

        return maxLength;
    }
};

int main(int argc, char *argv[])
{
    cout << "Maximum number of fruits: "
         << MaxFruitCountOf2Types::findLength(vector<char>{'A', 'B', 'C', 'A', 'C'})
         << endl;
    cout << "Maximum number of fruits: "
         << MaxFruitCountOf2Types::findLength(vector<char>{'A', 'B', 'C', 'B', 'B', 'C'})
         << endl;
}
```
JS
```
function fruits_into_baskets(fruits) {
    let windowStart = 0,
        maxLength = 0,
        fruitFrequency = {};

    // try to extend the range [windowStart, windowEnd]
    for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
        const rightFruit = fruits[windowEnd];
        if (!(rightFruit in fruitFrequency)) {
            fruitFrequency[rightFruit] = 0;
        }
        fruitFrequency[rightFruit] += 1;

        // shrink the sliding window, until we are left with '2' fruits in the fruit 
        // frequency dictionary
        while (Object.keys(fruitFrequency).length > 2) {
            const leftFruit = fruits[windowStart];
            fruitFrequency[leftFruit] -= 1;
            if (fruitFrequency[leftFruit] === 0) {
                delete fruitFrequency[leftFruit];
            }
            windowStart += 1; // shrink the window
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;
}


console.log(`Maximum number of fruits: `
    + fruits_into_baskets(['A', 'B', 'C', 'A', 'C']));
console.log(`Maximum number of fruits: `
    + fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C']));
```
Time Complexity
The above algorithm’s time complexity will be O(N), where ‘N’ is the number of characters in the input array. The outer 'for' loop runs for all characters, and the inner 'while' loop processes each character only once; therefore, the time complexity of the algorithm will be O(N+N), which is asymptotically equivalent to O(N).

Space Complexity
The algorithm runs in constant space O(1)O(1) as there can be a maximum of three types of fruits stored in the frequency map.

Similar Problems
Problem 1: Longest Substring with at most 2 distinct characters

Given a string, find the length of the longest substring in it with at most two distinct characters.

Solution: This problem is exactly similar to our parent problem.