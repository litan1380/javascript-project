class User {
    constructor(username, password) {
      this.username = username;
      this._password = password;
    }
  
    getPassword() {
      return this._password.replace(/./g, "*");
    }
  
    setPassword(newPassword) {
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  
      if (passwordRegex.test(newPassword)) {
        this._password = newPassword;
      } else {
        console.log("Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
      }
    }
  }
  
  // Creating an instance of the User class
  const user = new User("Mithun", "Password123");
  
  console.log(user.getPassword());  // Output: ***********
  
  user.setPassword("myPassword");  // Output: Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.
  
  user.setPassword("MyPassword");  // Output: Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.
  
  user.setPassword("Mypassword123");
  console.log(user.getPassword());  // Output: ************
  