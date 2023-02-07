const Manager = require("../lib/Manager")

//Ask test questions and check, will it pass or no when you run "npm run test"

test ("Can set office number via constructor argument" , () =>{
    const testOfficeNumber =2 ;
    const employeeInstance = new Manager("ilknur", 2, "i@gmail.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber)

})


test ("Can you  get office number via getOffice()?" , () =>{
    const testOfficeNumber =2 ;
    const employeeInstance = new Manager("ilknur", 2, "i@gmail.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber)

})

test ("getRole() should return \"Manager\"" , () =>{
    const returnValue = "Manager";
    const employeeInstance = new Manager("ilknur", 2, "i@gmail.com", 2);
    expect(employeeInstance.getRole()).toBe(returnValue)

})