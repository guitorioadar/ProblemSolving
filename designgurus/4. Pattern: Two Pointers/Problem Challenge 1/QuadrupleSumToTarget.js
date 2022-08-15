function search_quadruplets(arr, target) {
    arr.sort((a, b) => a - b);
    console.log(arr);
    let quadruplets = [];
    let firstItem = 0;
    let secondItem = 0;
    // loop through the array of to find first item
    for (let i = 0; i < arr.length - 3; i++) {

        if (i > 0 && arr[i] === arr[i - 1]) {
            console.log('Same i value: ', arr[i]);
            continue;
        }
        firstItem = arr[i];

        // loop through the array to find the second item
        for (let j = i + 1; j < arr.length - 2; j++) {

            if (j > i && arr[j] === arr[j - 1]) {
                console.log('Same j value: ', arr[j]);
                continue;
            }
            secondItem = arr[j];
            console.log(`first: ${firstItem}, second: ${secondItem}`);

            search_pair(arr, target, i, j, quadruplets)
        }

    }

    return quadruplets;

}


search_pair = (arr, target, first, second, quadruplets) => {
    let left = second + 1;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[first] + arr[second] + arr[left] + arr[right];

        if (sum === target) {
            // we found the quadruplet
            quadruplets.push([arr[first], arr[second], arr[left], arr[right]]);
            left++;
            right--;

            // skip the element that for both right and left
            while (left < right && arr[left] === arr[left - 1]) left++;
            while (left < right && arr[right] === arr[right + 1]) right++;
        }else if (sum < target){
            left++;
        }else{
            right--;
        }
    }
}

console.log(search_quadruplets([4, 1, 2, -1, 1, -3], 1));
console.log(search_quadruplets([2, 0, -1, 1, -2, 2], 2));