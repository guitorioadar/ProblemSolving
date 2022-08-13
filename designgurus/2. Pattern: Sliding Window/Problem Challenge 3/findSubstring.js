findSubstring = (str, pattern) => {

    let windowStart = 0,
        matched = 0;
    substrStart = 0,
        minLength = str.length + 1,
        charFrequency = {};

    for (let i = 0; i < pattern.length; i++) {
        if (!(pattern.charAt(i) in charFrequency)) {
            charFrequency[pattern.charAt(i)] = 0;
        }
        charFrequency[pattern.charAt(i)]++;
    }

    console.log('charFrequency', charFrequency)

    // check all matched char count
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        let rightChar = str.charAt(windowEnd);
        if (rightChar in charFrequency) {
            charFrequency[rightChar]--;
            if (charFrequency[rightChar] >= 0) {
                matched += 1;
            }
        }

        console.log('for:'+rightChar+ ' charFrequency', charFrequency);
        console.log('matched', matched);
        console.log(`minLength: ${minLength} , windowEnd: ${windowEnd}, windowStart: ${windowStart}`);
        // whenever we matched all characters we shrink the window size

        while (matched === pattern.length) {
            console.log('matched === pattern.length')
            // minizin the length because first char will be not in use
            if(minLength > windowEnd - windowStart + 1){
                minLength = windowEnd - windowStart + 1;
                substrStart = windowStart;
                console.log(`### Updated minLength: ${minLength} , substrStart: ${substrStart}`)
            }

            let leftChar = str.charAt(windowStart);
            windowStart++;
            console.log(`windowStart: ${windowStart}`);
            if(leftChar in charFrequency){
                console.log(`leftChar ${leftChar} in charFrequency: ${JSON.stringify(charFrequency)}`)
                if(charFrequency[leftChar] === 0){
                    matched--;
                    console.log(`matched decremented for char: ${leftChar} to  matched:${matched}`)
                }
                charFrequency[leftChar] += 1;
            }
        }

    }

    if (minLength > str.length) {
        return '';
    }
    return str.substring(substrStart, substrStart + minLength);
}

console.log(findSubstring('aabdc', 'abc'));