class Person {
    constructor(name = "Unknown", age = 0) {
      this.name = name;
      this.age = age;
    }
  
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  
  // Creating an instance of the Person class with provided values
  const person1 = new Person("Mithun", 20);
  console.log(person1.getDetails());
  // Output: Name: Mithun, Age: 20
  
  // Creating an instance of the Person class without providing values (using defaults)
  const person2 = new Person();
  console.log(person2.getDetails());
  // Output: Name: Unknown, Age: 0
  