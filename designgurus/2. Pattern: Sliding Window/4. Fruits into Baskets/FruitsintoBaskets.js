fruitsintoBaskets = (arr) => {
    let result = 0;
    let fruitType = 2;
    let freq = {}
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {

        let rightChar = arr[windowEnd]
        if (!(rightChar in freq)) {
            freq[rightChar] = 0;
        } 
        freq[rightChar]++;
        while (Object.keys(freq).length > fruitType){
            let leftChar = arr[windowStart]
            freq[leftChar]--;
            if(freq[leftChar] === 0){
                delete freq[leftChar];
            }
            windowStart++;
        }

        result = Math.max(result, windowEnd - windowStart + 1);
    }


    return result;
}

console.log('fruitsintoBaskets', fruitsintoBaskets(['A', 'B', 'C', 'A', 'C']));
console.log('fruitsintoBaskets', fruitsintoBaskets(['A', 'B', 'C', 'B', 'B', 'C']));