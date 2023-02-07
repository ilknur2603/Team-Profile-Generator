const Engineer = require("../lib/Engineer")

test ("can create an office number" , () =>{
    const testGithub ="ilkd" ;
    const employeeInstance = new Engineer("ilknur", 2, "i@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub)

})


test ("Testing officeNumber will return office number" , () =>{
    const testGithub ="ilkd" ;
    const employeeInstance = new Engineer("ilknur", 2, "i@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub)

})

test ("testing role" , () =>{
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("ilknur", 2, "i@gmail.com", "ilkd");
    expect(employeeInstance.getRole()).toBe(returnValue)

})