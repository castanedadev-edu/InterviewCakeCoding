/**
 * Write a function that takes an array of characters and reverses the letters in place. ↴
 * Why an array of characters instead of a string?
 * The goal of this question is to practice manipulating strings in place. 
 * Since we're modifying the input, we need a mutable ↴ type like an array,
 * instead of JavaScript's immutable strings.
 *
 * Complexity: O(n) time and O(1) space.
**/
function reverse(arrayOfChars) {

    let leftIndex = 0;
    let rightIndex = arrayOfChars.length - 1;
  
    while (leftIndex < rightIndex) {
  
      // Swap characters
      const temp = arrayOfChars[leftIndex];
      arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
      arrayOfChars[rightIndex] = temp;
  
      // Move towards middle
      leftIndex++;
      rightIndex--;
    }
  }