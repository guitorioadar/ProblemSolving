function make_squares(arr) {
    let n = arr.length;
    let squares = Array(n).fill(0);

    let lastIndex = n - 1;

    let left = 0;
    let right = n - 1;

    while (left <= right) {
        let leftSqrNumber = arr[left] * arr[left];
        let rightSqrNumber = arr[right] * arr[right];

        if (leftSqrNumber > rightSqrNumber) {
            squares[lastIndex] = leftSqrNumber;
            left++;
        }else{
            squares[lastIndex] = rightSqrNumber;
            right--;
        }
        lastIndex--;
    }


    return squares;
}


console.log(`Squares: ${make_squares([-2, -1, 0, 2, 3])}`);
console.log(`Squares: ${make_squares([-3, -1, 0, 1, 2])}`);