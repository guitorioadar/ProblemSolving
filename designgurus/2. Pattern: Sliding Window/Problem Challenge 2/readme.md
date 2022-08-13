Problem Challenge 2: String Anagrams (hard)

Problem Statement

Given a string and a pattern, find all anagrams of the pattern in the given string.

Every anagram is a permutation of a string. As we know, when we are not allowed to repeat characters while finding permutations of a string, we get N!N! permutations (or anagrams) of a string having NN characters. For example, here are the six anagrams of the string “abc”:

abc
acb
bac
bca
cab
cba
Write a function to return a list of starting indices of the anagrams of the pattern in the given string.

Example 1:


Input: String="ppqp", Pattern="pq"
Output: [1, 2]
Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".
Example 2:

Input: String="abbcabc", Pattern="abc"
Output: [2, 3, 4]
Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".
Solution

This problem follows the Sliding Window pattern and is very similar to Permutation in a String. In this problem, we need to find every occurrence of any permutation of the pattern in the string. We will use a list to store the starting indices of the anagrams of the pattern in the string.

Code  

Here is what our algorithm will look like, only the highlighted lines have changed from Permutation in a String:

Java
```
import java.util.*;

class StringAnagrams {
    public static List<Integer> findStringAnagrams(String str, String pattern) {
        int windowStart = 0, matched = 0;
        Map<Character, Integer> charFrequencyMap = new HashMap<>();
        for (char chr : pattern.toCharArray())
            charFrequencyMap.put(chr, charFrequencyMap.getOrDefault(chr, 0) + 1);

        List<Integer> resultIndices = new ArrayList<Integer>();
        // our goal is to match all the characters from the map with the current window
        for (int windowEnd = 0; windowEnd < str.length(); windowEnd++) {
            char rightChar = str.charAt(windowEnd);
            // decrement the frequency of the matched character
            if (charFrequencyMap.containsKey(rightChar)) {
                charFrequencyMap.put(rightChar, charFrequencyMap.get(rightChar) - 1);
                if (charFrequencyMap.get(rightChar) == 0)
                    matched++;
            }

            if (matched == charFrequencyMap.size()) // have we found an anagram?
                resultIndices.add(windowStart);

            if (windowEnd >= pattern.length() - 1) { // shrink the window
                char leftChar = str.charAt(windowStart++);
                if (charFrequencyMap.containsKey(leftChar)) {
                    if (charFrequencyMap.get(leftChar) == 0)
                        matched--; // before putting the character back, decrement the matched count
                    // put the character back
                    charFrequencyMap.put(leftChar, charFrequencyMap.get(leftChar) + 1);
                }
            }
        }

        return resultIndices;
    }

    public static void main(String[] args) {
        System.out.println(StringAnagrams.findStringAnagrams("ppqp", "pq"));
        System.out.println(StringAnagrams.findStringAnagrams("abbcabc", "abc"));
    }
}

```
Python3
```
def find_string_anagrams(str1, pattern):
    window_start, matched = 0, 0
    char_frequency = {}

    for chr in pattern:
        if chr not in char_frequency:
            char_frequency[chr] = 0
        char_frequency[chr] += 1

    result_indices = []
    # Our goal is to match all the characters from the 'char_frequency' with the current
    # window try to extend the range [window_start, window_end]
    for window_end in range(len(str1)):
        right_char = str1[window_end]
        if right_char in char_frequency:
            # Decrement the frequency of matched character
            char_frequency[right_char] -= 1
            if char_frequency[right_char] == 0:
                matched += 1

        if matched == len(char_frequency):  # Have we found an anagram?
            result_indices.append(window_start)

        # Shrink the sliding window
        if window_end >= len(pattern) - 1:
            left_char = str1[window_start]
            window_start += 1
            if left_char in char_frequency:
                if char_frequency[left_char] == 0:
                    matched -= 1  # Before putting the character back, decrement the matched count
                char_frequency[left_char] += 1  # Put the character back

    return result_indices


def main():
    print(find_string_anagrams("ppqp", "pq"))
    print(find_string_anagrams("abbcabc", "abc"))


main()
```

C++
```
using namespace std;

#include <iostream>
#include <string>
#include <unordered_map>
#include <vector>

class StringAnagrams
{
public:
    static vector<int> findStringAnagrams(const string &str, const string &pattern)
    {
        int windowStart = 0, matched = 0;
        unordered_map<char, int> charFrequencyMap;
        for (auto chr : pattern)
        {
            charFrequencyMap[chr]++;
        }

        vector<int> resultIndices;
        // our goal is to match all the characters from the map with the current window
        for (int windowEnd = 0; windowEnd < str.length(); windowEnd++)
        {
            char rightChar = str[windowEnd];
            // decrement the frequency of the matched character
            if (charFrequencyMap.find(rightChar) != charFrequencyMap.end())
            {
                charFrequencyMap[rightChar]--;
                if (charFrequencyMap[rightChar] == 0)
                {
                    matched++;
                }
            }

            if (matched == (int)charFrequencyMap.size())
            { // have we found an anagram?
                resultIndices.push_back(windowStart);
            }

            if (windowEnd >= pattern.length() - 1)
            { // shrink the window
                char leftChar = str[windowStart++];
                if (charFrequencyMap.find(leftChar) != charFrequencyMap.end())
                {
                    if (charFrequencyMap[leftChar] == 0)
                    {
                        matched--; // before putting the char back, decrement the matched count
                    }
                    // put the character back
                    charFrequencyMap[leftChar]++;
                }
            }
        }

        return resultIndices;
    }
};

int main(int argc, char *argv[])
{
    auto result = StringAnagrams::findStringAnagrams("ppqp", "pq");
    for (auto num : result)
    {
        cout << num << " ";
    }
    cout << endl;

    result = StringAnagrams::findStringAnagrams("abbcabc", "abc");
    for (auto num : result)
    {
        cout << num << " ";
    }
    cout << endl;
}
```

JS
```
function find_string_anagrams(str, pattern) {
    let windowStart = 0,
        matched = 0,
        charFrequency = {};

    for (i = 0; i < pattern.length; i++) {
        const chr = pattern[i];
        if (!(chr in charFrequency)) {
            charFrequency[chr] = 0;
        }
        charFrequency[chr] += 1;
    }

    const resultIndices = [];
    // our goal is to match all the characters from the 'charFrequency' with the current 
    // window try to extend the range [windowStart, windowEnd]
    for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        if (rightChar in charFrequency) {
            // decrement the frequency of matched character
            charFrequency[rightChar] -= 1;
            if (charFrequency[rightChar] === 0) {
                matched += 1;
            }
        }

        if (matched === Object.keys(charFrequency).length) { // have we found an anagram?
            resultIndices.push(windowStart);
        }

        // shrink the sliding window
        if (windowEnd >= pattern.length - 1) {
            leftChar = str[windowStart];
            windowStart += 1;
            if (leftChar in charFrequency) {
                if (charFrequency[leftChar] === 0) {
                    matched -= 1; // before putting the character back, decrement the matched count
                }
                charFrequency[leftChar] += 1; // put the character back
            }
        }
    }

    return resultIndices;
}


console.log(find_string_anagrams('ppqp', 'pq'));
console.log(find_string_anagrams('abbcabc', 'abc'));
```

Time Complexity


The time complexity of the above algorithm will be O(N + M)O(N+M) where ‘N’ and ‘M’ are the number of characters in the input string and the pattern respectively.

Space Complexity

The space complexity of the algorithm is O(M)O(M) since in the worst case, the whole pattern can have distinct characters which will go into the HashMap. In the worst case, we also need O(N)O(N) space for the result list, this will happen when the pattern has only one character and the string contains only that character.

