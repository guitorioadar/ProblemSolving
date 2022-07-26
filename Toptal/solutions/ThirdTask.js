// Toptal
// Task Three

function solution(S, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let total = parseFloat(S);
    let bills = B.map(b => parseFloat(b));
    let sum = bills.reduce((a, b) => a + b, 0);
    let result = [];
    let remaining = total;
    for (let i = 0; i < bills.length; i++) {
        let bill = bills[i];
        let discount = bill * remaining / sum;
        result.push(discount.toFixed(2));
        remaining -= discount;
    }
    return result;
}

console.log(solution("300.01", ["300.00", "200.00", "100.00"]));
console.log(solution("1.00", ["0.05", "1.00"]));
console.log(solution("1.00", ["0.05", "1.00", "0.05"]));