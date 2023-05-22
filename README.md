# javascript-project
# JavaScript Coding Challenges

This repository contains solutions to various JavaScript coding challenges.

## Challenge 1: Type Conversion

**File:** `typeConversion.js`

Description: Write a function called `convertToNumber` that takes a string as an argument and returns the equivalent number. If the string cannot be converted to a number, the function should return the string "Invalid number". Error handling in JavaScript is used to achieve this output.

## Challenge 2: Building Robust Functions

**File:** `getPerson.js`

Description: Create a function called `getPerson` that takes an object as a parameter representing a person's name and age. The function should return the person's name and age as a string in the format "Name: <name>, Age: <age>". However, if the parameter is not a valid object with the properties "name" and "age", the function should throw an error with the message "Invalid parameter type". The try-catch block is used to handle this error and return the error message if it occurs.

## Challenge 3: Car Description Class

**File:** `car.js`

Description: Create a class called `Car` with three properties: company, model, and year. The class should have a method called `getDescription` that returns a string in the format "This is a <year> <company> <model>". An instance of the Car class is instantiated and the `getDescription` method is called.

## Challenge 4: Employee Class

**File:** `employee.js`

Description: Create a class called `Employee` with three properties: name, position, and salary. The class should have a method called `getSalary` that returns the employee's salary. An instance of the Employee class is instantiated and the `getSalary` method is called.

## Challenge 5: Implementing a Person Class with Default Values

**File:** `person.js`

Description: Create a class called `Person` with two properties: name and age. The class should have a method called `getDetails` that returns a string in the format "Name: <name>, Age: <age>". Default parameters are used in the constructor to set the values of name and age to "Unknown" and 0 if they are not provided.

## Challenge 6: Using Static Method to Add Two Numbers with Calculator Class

**File:** `calculator.js`

Description: Create a class called `Calculator` with a static method called `add`. The `add` method should take two numbers as arguments and return their sum. An instance of the Calculator class is instantiated and the `add` method is called.

## Challenge 7: Password Checker

**File:** `user.js`

Description: Create a class called `User` with properties `username` and `password`. The class implements a getter method for `password` that returns the password with all characters replaced by asterisks. It also implements a setter method for `password` that checks if the new password is at least 8 characters long and contains at least one number and one uppercase letter. If the password is valid, it sets the new password. Otherwise, it logs an error message.

## Challenge 8: Adding a Method to a Prototype

**File:** `student.js`

Description: Create a prototype object called `Student` with a property `name`. Add a method called `printDetails` to the prototype that logs the string "Hello, my name is {name}" to the console. An instance of the Student object is instantiated with the name "Mithun" and the `printDetails` method is called.

## Challenge 9: Check the Presence Using Closures

**File:** `numberChecker.js`

Description: Create a `numberChecker` function that takes an array of numbers as an argument and returns a function. The returned function takes another number as an argument and returns true if the number is in the array, and false otherwise.

## Challenge 10: Filter by Category

**File:** `filterByCategory.js`

Description: Write a function that takes an array of products and returns a function that filters the array by a given product category. The function filters an eCommerce products array by a specific category using the `filter()` method. Finally, it returns a new array containing only the products with the same category.

