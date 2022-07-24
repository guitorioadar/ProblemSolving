// Leetcode
// 20. Valid Parentheses

isValid = (s) => {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        console.log(`in ${i} position: and cahr ${s[i]} => arr: `, stack);
        let c = s.charAt(i);
        switch (c) {
            case '(': stack.push(')');
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}');
                break;
            default:
                let stackPop = stack.pop();
                console.log(`stack: ${stack} and pop item: ${stackPop}`);
                if (c !== stackPop) {
                    console.log('They are not same at position:', i);
                    return false;
                } else {
                    console.log(`They are same at postition ${i}: => c: ${c}, stackPop: ${stackPop}`)
                }
        }
    }

    return stack.length === 0;
}

// console.log(isValid('()')); // true
// console.log(isValid('()[]{}')); // true
// console.log(isValid('()[]]')); // false


isValidMap = (s) => {
    //if size is odd its not balanced
    // without this, the execution will be faster
    if (s.length % 2 !== 0) return false; 
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let i = 0; i < s.length; i++) {
        let ch = s.charAt(i);
        console.log(`For ${ch} char map[ch]: ${map[ch]}`);
        if (map[ch]) {
            stack.push(map[ch]);
            console.log('New Stack:', stack);
        } else {
            let stackPop = stack.pop();
            if (ch !== stackPop) {
                console.log('They are not same at position:', i);
                return false;
            } else {
                console.log(`They are same at postition ${i}: => c: ${ch}, stackPop: ${stackPop} and updated stack is: `, stack)
            }
        }
    }

    return stack.length === 0;
}

// console.log('isValidMap', isValidMap('{{}[][[[)]]]}')); // false
console.log('isValidMap', isValidMap('{{}[][[[]]]}')); // true