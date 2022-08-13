Problem Challenge 4: Words Concatenation (hard)

Problem Statement

Given a string and a list of words, find all the starting indices of substrings in the given string that are a concatenation of all the given words exactly once without any overlapping of words. It is given that all words are of the same length.

Example 1:

Input: String="catfoxcat", Words=["cat", "fox"]
Output: [0, 3]
Explanation: The two substring containing both the words are "catfox" & "foxcat".
Example 2:

Input: String="catcatfoxfox", Words=["cat", "fox"]
Output: [3]
Explanation: The only substring containing both the words is "catfox".

Solution

This problem follows the Sliding Window pattern and has a lot of similarities with Maximum Sum Subarray of Size K. We will keep track of all the words in a HashMap and try to match them in the given string. Here are the set of steps for our algorithm:

 1. Keep the frequency of every word in a HashMap.
 2. Starting from every index in the string, try to match all the words.
 3. In each iteration, keep track of all the words that we have already seen in another HashMap.
 4. If a word is not found or has a higher frequency than required, we can move on to the next character in the string.
 5. Store the index if we have found all the words.

Code  

Here is what our algorithm will look like:

Java
```
import java.util.*;

class WordConcatenation {
    public static List<Integer> findWordConcatenation(String str, String[] words) {
        Map<String, Integer> wordFrequencyMap = new HashMap<>();
        for (String word : words)
            wordFrequencyMap.put(word, wordFrequencyMap.getOrDefault(word, 0) + 1);

        List<Integer> resultIndices = new ArrayList<Integer>();
        int wordsCount = words.length, wordLength = words[0].length();

        for (int i = 0; i <= str.length() - wordsCount * wordLength; i++) {
            Map<String, Integer> wordsSeen = new HashMap<>();
            for (int j = 0; j < wordsCount; j++) {
                int nextWordIndex = i + j * wordLength;
                // get the next word from the string
                String word = str.substring(nextWordIndex, nextWordIndex + wordLength);
                if (!wordFrequencyMap.containsKey(word)) // break if we don't need this word
                    break;

                // add the word to the 'wordsSeen' map
                wordsSeen.put(word, wordsSeen.getOrDefault(word, 0) + 1);

                // no need to process further if the word has higher frequency than required
                if (wordsSeen.get(word) > wordFrequencyMap.getOrDefault(word, 0))
                    break;

                if (j + 1 == wordsCount) // store index if we have found all the words
                    resultIndices.add(i);
            }
        }

        return resultIndices;
    }

    public static void main(String[] args) {
        List<Integer> result = WordConcatenation.findWordConcatenation(
                "catfoxcat", new String[] { "cat", "fox" });
        System.out.println(result);
        result = WordConcatenation.findWordConcatenation(
                "catcatfoxfox", new String[] { "cat", "fox" });
        System.out.println(result);
    }
}
```
Python3
```
def find_word_concatenation(str1, words):
    if len(words) == 0 or len(words[0]) == 0:
        return []

    word_frequency = {}

    for word in words:
        if word not in word_frequency:
            word_frequency[word] = 0
        word_frequency[word] += 1

    result_indices = []
    words_count = len(words)
    word_length = len(words[0])

    for i in range((len(str1) - words_count * word_length)+1):
        words_seen = {}
        for j in range(0, words_count):
            next_word_index = i + j * word_length
            # Get the next word from the string
            word = str1[next_word_index: next_word_index + word_length]
            if word not in word_frequency:  # Break if we don't need this word
                break

            # Add the word to the 'words_seen' map
            if word not in words_seen:
                words_seen[word] = 0
            words_seen[word] += 1

            # No need to process further if the word has higher frequency than required
            if words_seen[word] > word_frequency.get(word, 0):
                break

            if j + 1 == words_count:  # Store index if we have found all the words
                result_indices.append(i)

    return result_indices


def main():
    print(find_word_concatenation("catfoxcat", ["cat", "fox"]))
    print(find_word_concatenation("catcatfoxfox", ["cat", "fox"]))


main()

```
C++
```
using namespace std;

#include <iostream>
#include <string>
#include <unordered_map>
#include <vector>

class WordConcatenation
{
public:
    static vector<int> findWordConcatenation(const string &str,
                                             const vector<string> &words)
    {
        unordered_map<string, int> wordFrequencyMap;
        for (auto word : words)
        {
            wordFrequencyMap[word]++;
        }

        vector<int> resultIndices;
        int wordsCount = words.size(), wordLength = words[0].length();

        for (int i = 0; i <= int(str.length()) - wordsCount * wordLength; i++)
        {
            unordered_map<string, int> wordsSeen;
            for (int j = 0; j < wordsCount; j++)
            {
                int nextWordIndex = i + j * wordLength;
                // get the next word from the string
                string word = str.substr(nextWordIndex, wordLength);
                if (wordFrequencyMap.find(word) ==
                    wordFrequencyMap.end())
                { // break if we don't need this word
                    break;
                }

                wordsSeen[word]++; // add the word to the 'wordsSeen' map

                // no need to process further if the word has higher frequency than required
                if (wordsSeen[word] > wordFrequencyMap[word])
                {
                    break;
                }

                if (j + 1 == wordsCount)
                { // store index if we have found all the words
                    resultIndices.push_back(i);
                }
            }
        }

        return resultIndices;
    }
};

int main(int argc, char *argv[])
{
    vector<int> result =
        WordConcatenation::findWordConcatenation("catfoxcat", vector<string>{"cat", "fox"});
    for (auto num : result)
    {
        cout << num << " ";
    }
    cout << endl;

    result =
        WordConcatenation::findWordConcatenation("catcatfoxfox", vector<string>{"cat", "fox"});
    for (auto num : result)
    {
        cout << num << " ";
    }
    cout << endl;
}
```
JS
```
function find_word_concatenation(str, words) {
    if (words.length === 0 || words[0].length === 0) {
        return [];
    }

    wordFrequency = {};

    words.forEach((word) => {
        if (!(word in wordFrequency)) {
            wordFrequency[word] = 0;
        }
        wordFrequency[word] += 1;
    });

    const resultIndices = [],
        wordsCount = words.length;
    wordLength = words[0].length;

    for (i = 0; i < (str.length - wordsCount * wordLength) + 1; i++) {
        const wordsSeen = {};
        for (j = 0; j < wordsCount; j++) {
            next_word_index = i + j * wordLength;
            // Get the next word from the string
            word = str.substring(next_word_index, next_word_index + wordLength);
            if (!(word in wordFrequency)) { // Break if we don't need this word
                break;
            }

            // Add the word to the 'wordsSeen' map
            if (!(word in wordsSeen)) {
                wordsSeen[word] = 0;
            }
            wordsSeen[word] += 1;


            // no need to process further if the word has higher frequency than required
            if (wordsSeen[word] > (wordFrequency[word] || 0)) {
                break;
            }

            if (j + 1 === wordsCount) { // Store index if we have found all the words
                resultIndices.push(i);
            }
        }
    }

    return resultIndices;
}


console.log(find_word_concatenation('catfoxcat', ['cat', 'fox']));
console.log(find_word_concatenation('catcatfoxfox', ['cat', 'fox']));
```

Time Complexity

The time complexity of the above algorithm will be O(N * M * Len)O(N∗M∗Len) where ‘N’ is the number of characters in the given string, ‘M’ is the total number of words, and ‘Len’ is the length of a word.

Space Complexity

The space complexity of the algorithm is O(M)O(M) since at most, we will be storing all the words in the two HashMaps. In the worst case, we also need O(N)O(N) space for the resulting list. So, the overall space complexity of the algorithm will be O(M+N).O(M+N).