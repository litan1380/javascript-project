class Employee {
    constructor(name, position, salary) {
      this.name = name;
      this.position = position;
      this.salary = salary;
    }
  
    getSalary() {
      return this.salary;
    }
  }
  
  // Creating an instance of the Employee class
  const employee1 = new Employee("John Doe", "Manager", 80000);
  
  // Calling the getSalary method
  console.log(employee1.getSalary());
  // Output: 80000
  