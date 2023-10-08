// Define an array with some random values
const array = [20, 12, 3, 5, 67, 2, 1]

// Function to check if an array is sorted
function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

// Function to shuffle the elements of an array
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// The bogosort function
function bogosort(arr) {
  let startTime = Date.now(); // Record the start time
  let iterations = 0; // Keep track of the number of iterations
  
  // Continue shuffling until the array is sorted
  while (!isSorted(arr)) {
    shuffle(arr);
    iterations++;
  }
  
  let endTime = Date.now(); // Record the end time
  let timeTaken = endTime - startTime; // Calculate the time taken
  
  return {
    sortedArray: arr,
    iterations: iterations,
    timeTaken: timeTaken
  };
}

// Sort the array using bogosort and get the result
const result = bogosort([...array]);

// Print out the results
console.log("Sorted Array:", result.sortedArray);
console.log("Iterations:", result.iterations);
console.log("Time taken (ms):", result.timeTaken);
