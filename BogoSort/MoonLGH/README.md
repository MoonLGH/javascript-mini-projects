# Bogosort.js

**Creator:** MoonLGH

![Bogosort Demo](bogosort-demo.gif)

## Table of Contents

- [Bogosort.js](#bogosortjs)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [How It Works](#how-it-works)
  - [Usage](#usage)
  - [Contributing](#contributing)

---

## Introduction

Welcome to Bogosort.js, a fun and quirky sorting algorithm that is guaranteed to make you appreciate efficient sorting methods! This project is brought to you by MoonLGH.

## How It Works

Bogosort is a highly impractical and inefficient sorting algorithm. In fact, it's more of a joke or a humorous educational tool than a serious sorting method. Here's how it works:

1. **Check if the Array is Sorted**
    - The algorithm starts by checking if the array is already sorted.
  
2. **If Not Sorted, Shuffle the Array**
    - If the array is not sorted, it randomly shuffles the elements.

3. **Repeat Until Sorted**
    - It continues this process until, by sheer luck, it stumbles upon a sorted arrangement.

4. **Measure the Time and Iterations**
    - The algorithm keeps track of the number of iterations (how many times it had to shuffle) and the time it took to sort the array.

5. **Return the Sorted Array, Iterations, and Time Taken**

## Usage

To use Bogosort.js, simply include the provided JavaScript code in your project and call the `bogosort` function with your array as an argument. Here's an example:

```javascript
const array = [20, 12, 3, 5, 67, 2, 1];
const result = bogosort([...array]);

console.log("Sorted Array:", result.sortedArray);
console.log("Iterations:", result.iterations);
console.log("Time taken (ms):", result.timeTaken);
```

Keep in mind that while Bogosort is a fun concept, it's extremely inefficient and should never be used in practical applications.

## Contributing
If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Any improvements, suggestions, or bug fixes are welcome!
