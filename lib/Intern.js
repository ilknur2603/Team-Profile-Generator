const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    //create constructor
    super(name, id, email);
    //use super for inheritance method
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
