pairWithTargetSum = (arr, targetSum) => {

    let startPoint = 0;
    let endPoint = arr.length - 1;
    let result = [];

    while (startPoint < endPoint) {
        console.log('endPoint',endPoint);
        let charStart  = arr[startPoint];
        let charEnd = arr[endPoint];
        console.log(`charSart: ${charStart} charEnd:${charEnd}`);
        let sum = parseInt(charStart, 10)+ parseInt(charEnd, 10);
        console.log('sum',sum);
        if (sum === targetSum){
            result.push(charStart);
            result.push(charEnd);
        }
        
        if (sum > targetSum){
            endPoint -= 1;
            console.log(`Updated EndPoint: ${endPoint}`);
        }else{
            startPoint++;
        }
    }

    return result;

}

console.log(pairWithTargetSum([1, 2, 3, 4, 6], 6));
console.log(pairWithTargetSum([2, 5, 9, 11], 11));