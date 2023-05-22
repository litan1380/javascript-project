function Student(name) {
    this.name = name;
  }
  
  Student.prototype.printDetails = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  // Creating an instance of the Student object
  const student = new Student("Mithun");
  
  // Calling the printDetails method
  student.printDetails();
  // Output: "Hello, my name is Mithun"
  