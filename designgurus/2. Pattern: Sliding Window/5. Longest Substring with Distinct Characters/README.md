Longest Substring with Distinct Characters (hard)


Problem Statement

Given a string, find the length of the longest substring, which has all distinct characters.

 Example 1:
Input: String="aabccbb"
Output: 3
Explanation: The longest substring with distinct characters is "abc".
Example 2:

Input: String="abbbb"
Output: 2
Explanation: The longest substring with distinct characters is "ab".
Example 3:

Input: String="abccde"
Output: 3
Explanation: Longest substrings with distinct characters are "abc" & "cde".

Solution

This problem follows the Sliding Window pattern, and we can use a similar dynamic sliding window strategy as discussed in Longest Substring with K Distinct Characters. We can use a HashMap to remember the last index of each character we have processed. Whenever we get a duplicate character, we will shrink our sliding window to ensure that we always have distinct characters in the sliding window.

Code

Here is what our algorithm will look like:

Java
```
import java.util.*;

class NoRepeatSubstring {
    public static int findLength(String str) {
        int windowStart = 0, maxLength = 0;
        Map<Character, Integer> charIndexMap = new HashMap<>();
        // try to extend the range [windowStart, windowEnd]
        for (int windowEnd = 0; windowEnd < str.length(); windowEnd++) {
            char rightChar = str.charAt(windowEnd);
            // if the map already contains the 'rightChar', shrink the window from the
            // beginning so that we have only one occurrence of 'rightChar'
            if (charIndexMap.containsKey(rightChar)) {
                // this is tricky; in the current window, we will not have any 'rightChar' after
                // its previous index and if 'windowStart' is already ahead of the last index of
                // 'rightChar', we'll keep 'windowStart'
                windowStart = Math.max(windowStart, charIndexMap.get(rightChar) + 1);
            }
            charIndexMap.put(rightChar, windowEnd); // insert the 'rightChar' into the map
            // remember the maximum length so far
            maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
        }

        return maxLength;
    }

    public static void main(String[] args) {
        System.out.println("Length of the longest substring: "
                + NoRepeatSubstring.findLength("aabccbb"));
        System.out.println("Length of the longest substring: "
                + NoRepeatSubstring.findLength("abbbb"));
        System.out.println("Length of the longest substring: "
                + NoRepeatSubstring.findLength("abccde"));
    }
}
```
Python3

```
def non_repeat_substring(str1):
    window_start = 0
    max_length = 0
    char_index_map = {}

    # try to extend the range [windowStart, windowEnd]
    for window_end in range(len(str1)):
        right_char = str1[window_end]
        # if the map already contains the 'right_char', shrink the window from the beginning
        # so that we have only one occurrence of 'right_char'
        if right_char in char_index_map:
            # this is tricky; in the current window, we will not have any 'right_char' after
            # its previous index and if 'window_start' is already ahead of the last index of
            # 'right_char', we'll keep 'window_start'
            window_start = max(window_start, char_index_map[right_char] + 1)
        # insert the 'right_char' into the map
        char_index_map[right_char] = window_end
        # remember the maximum length so far
        max_length = max(max_length, window_end - window_start + 1)
    return max_length


def main():
    print("Length of the longest substring: " +
          str(non_repeat_substring("aabccbb")))
    print("Length of the longest substring: " +
          str(non_repeat_substring("abbbb")))
    print("Length of the longest substring: " +
          str(non_repeat_substring("abccde")))


main()
```

C++
```
using namespace std;

#include <iostream>
#include <string>
#include <unordered_map>

class NoRepeatSubstring
{
public:
    static int findLength(const string &str)
    {
        int windowStart = 0, maxLength = 0;
        unordered_map<char, int> charIndexMap;
        // try to extend the range [windowStart, windowEnd]
        for (int windowEnd = 0; windowEnd < str.length(); windowEnd++)
        {
            char rightChar = str[windowEnd];
            // if the map already contains the 'rightChar', shrink the window from the
            // beginning so that we have only one occurrence of 'rightChar'
            if (charIndexMap.find(rightChar) != charIndexMap.end())
            {
                // this is tricky; in the current window, we will not have any 'rightChar' after
                // its previous index and if 'windowStart' is already ahead of the last index of
                // 'rightChar', we'll keep 'windowStart'
                windowStart = max(windowStart, charIndexMap[rightChar] + 1);
            }
            charIndexMap[rightChar] = windowEnd; // insert the 'rightChar' into the map
            // remember the maximum length so far
            maxLength = max(maxLength, windowEnd - windowStart + 1);
        }

        return maxLength;
    }
};

int main(int argc, char *argv[])
{
    cout << "Length of the longest substring: " << NoRepeatSubstring::findLength("aabccbb")
         << endl;
    cout << "Length of the longest substring: " << NoRepeatSubstring::findLength("abbbb")
         << endl;
    cout << "Length of the longest substring: " << NoRepeatSubstring::findLength("abccde")
         << endl;
}
```
JS
```
function non_repeat_substring(str) {
    let windowStart = 0,
        maxLength = 0,
        charIndexMap = {};

    // try to extend the range [windowStart, windowEnd]
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        // if the map already contains the 'rightChar', shrink the window from the beginning 
        // so that we have only one occurrence of 'rightChar'
        if (rightChar in charIndexMap) {
            // this is tricky; in the current window, we will not have any 'rightChar' after 
            // its previous index and if 'windowStart' is already ahead of the last index of 
            // 'rightChar', we'll keep 'windowStart'
            windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
        }
        // insert the 'rightChar' into the map
        charIndexMap[rightChar] = windowEnd;
        // remember the maximum length so far
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
}


console.log(`Length of the longest substring: ${non_repeat_substring('aabccbb')}`);
console.log(`Length of the longest substring: ${non_repeat_substring('abbbb')}`);
console.log(`Length of the longest substring: ${non_repeat_substring('abccde')}`);
```

Time Complexity

The above algorithm’s time complexity will be O(N)O(N), where ‘N’ is the number of characters in the input string.

Space Complexity

The algorithm’s space complexity will be O(K)O(K), where KK is the number of distinct characters in the input string. This also means K<=NK<=N, because in the worst case, the whole string might not have any duplicate character, so the entire string will be added to the HashMap. Having said that, since we can expect a fixed set of characters in the input string (e.g., 26 for English letters), we can say that the algorithm runs in fixed space O(1)O(1); in this case, we can use a fixed-size array instead of the HashMap.



