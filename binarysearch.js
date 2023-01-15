// Binary search

function binary_search(target, array, start, end) {
  
    if (start > end) return "Not found";
    
    let mid = Math.floor((start + end) / 2);
    
    if (array[mid] == target) return `Found at index: ${mid}`;
    if (target < array[mid]) return binary_search(target, array, start, mid - 1);
    if (target > array[mid]) return binary_search(target, array, mid + 1, end);  
  }
  
  const myArr = [3,6,8,11,14,17,22,32,34,43,46,47,50,53,54,56,78,79,80];
  
  console.log(binary_search(3, myArr, 0, myArr.length - 1));