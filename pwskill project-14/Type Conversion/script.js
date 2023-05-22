function convertToNumber(str) {
    try {
      const number = Number(str);
      if (isNaN(number)) {
        throw new Error("Invalid number");
      }
      return number;
    } catch (error) {
      return "Invalid number";
    }
  }
  
  // Testing the function
  console.log(convertToNumber("123"));  // Output: 123
  console.log(convertToNumber("abc"));  // Output: Invalid number
  