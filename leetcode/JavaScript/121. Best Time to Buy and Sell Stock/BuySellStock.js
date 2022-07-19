/**
 * @param {number[]} prices
 * @return {number}
 */
// Brute force solution
maxProfit = (prices) => {
    let maxProf = 0;
    for (var i = 0; i < prices.length; i++) {
        for (var j = 1; j < prices.length; j++) {
            if (i >= j || prices[i] > prices[j]) {
                continue;
            } else {
                let profit = prices[j] - prices[i];
                if (profit > maxProf) {
                    maxProf = profit;
                }
            }
        }
    }
    return maxProf;
};


console.log(maxProfit([7, 1, 3, 4, 6, 5]))
console.log(maxProfit([7, 6, 4, 3, 1]))


maxProfEfficient = (prices) => {
    let left = 0;
    let right = 1;
    let max_profit = 0;
    while (right < prices.length) {
        if (prices[right] > prices[left]) {
            let price = prices[right] - prices[left];
            max_profit = Math.max(max_profit, price);
            right++;
        }else{
            left = right;
            right++;
        }
    }
    return max_profit;
}

console.log(maxProfEfficient([7, 1, 3, 4, 6, 5]))
console.log(maxProfEfficient([7, 6, 4, 3, 1]))
