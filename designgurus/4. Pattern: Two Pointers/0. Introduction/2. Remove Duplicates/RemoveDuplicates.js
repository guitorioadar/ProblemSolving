removeDuplicates = (arr) => {
    let nextNonDuplicate = 1;
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[nextNonDuplicate-1] !== arr[i]) {
            console.log(`arr[nextNonDuplicate-1]:${arr[nextNonDuplicate-1]} !== arr[i]:${arr[i]}`);
            arr[nextNonDuplicate] = arr[i];
            nextNonDuplicate++;
        }
    }

    return nextNonDuplicate;
}

console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9]));


function remove_element(arr, key) {
    let nextElement = 0; // index of the next element which is not 'key'
    for (i = 0; i < arr.length; i++) {
      if (arr[i] !== key) {
        arr[nextElement] = arr[i];
        nextElement += 1;
      }
    }
    return nextElement;
  }
  
  
  console.log(`Array new length: ${remove_element([3, 2, 3, 6, 3, 10, 9, 3], 3)}`);
  console.log(`Array new length: ${remove_element([2, 11, 2, 2, 1], 2)}`);