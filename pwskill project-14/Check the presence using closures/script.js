function numberChecker(arr) {
    return function(num) {
      return arr.includes(num);
    };
  }
  
  // Example usage
  const arr = [1, 2, 3, 4, 5];
  const checkNum = numberChecker(arr);
  
  console.log(checkNum(3)); // Output: true
  console.log(checkNum(6)); // Output: false
  