function quicksort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
    if (arr.length <= 1) {
      return arr;
    }

  // Pick the first value as the pivot
    let pivot = arr[0];
  // Orient the pivot so that...
      // every number smaller than the pivot is to the left
      // every number larger (or equal) than the pivot is to the right
    let left = [];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      }
      debugger;
    }
    debugger;

    let right = [];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] >= pivot) {
        right.push(arr[i]);
      }
      debugger;
    }
    debugger;
  // Recursively sort the left
  let leftside = quicksort(left);
  // Recursively sort the right
  let rightside = quicksort(right);
  // Return the left, pivot and right in sorted order
  return [...leftside, pivot, ...rightside];
}


module.exports = [quicksort];
