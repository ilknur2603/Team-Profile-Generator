const Intern = require("../lib/Intern")

test ("can you type a new school name" , () =>{
    const testSchool ="Harward" ;
    const employeeInstance = new Intern("ilknur", 2, "i@gmail.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool)

})


test ("Testing school will return school" , () =>{
    const testSchool ="Harward" ;
    const employeeInstance = new Intern("ilknur", 2, "i@gmail.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool)

})

test ("testing role" , () =>{
    const returnValue = "Intern";
    const employeeInstance = new Intern("ilknur", 2, "i@gmail.com", "Harward");
    expect(employeeInstance.getRole()).toBe(returnValue)

})