function getPerson(obj) {
    try {
      if (typeof obj !== 'object' || obj === null || Array.isArray(obj) || !('name' in obj) || !('age' in obj)) {
        throw new Error('Invalid parameter type');
      }
      
      return `Name: ${obj.name}, Age: ${obj.age}`;
    } catch (error) {
      return error.message;
    }
  }
  
  // Testing the function
  console.log(getPerson({ name: "Mithun", age: 20 }));  // Output: Name: Mithun, Age: 20
  console.log(getPerson({ name: "Mithun" }));          // Output: Invalid parameter type
  console.log(getPerson(["name", "Mithun"]));          // Output: Invalid parameter type
  