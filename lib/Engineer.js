const Employee = require("./Employee");

class Engineer extends Employee {
  //create constructor
  constructor(name, id, email, github) {
    //use super for inheritance method
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
