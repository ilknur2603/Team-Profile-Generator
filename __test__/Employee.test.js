const Employee = require("../lib/Employee");

test("can you create a new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object")
})

test("Can set name via constructor arguments", () => {
    const name = "ilknur";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Can set id via constructor argument", () => {
    const id = 2;
    const employeeInstance = new Employee("ilknur",id);
    expect(employeeInstance.id).toBe(id);
})

test("Can set email via constructor argument", () => {
    const email = "i@gmail.com";
    const employeeInstance = new Employee("ilknur",2, email);
    expect(employeeInstance.email).toBe(email);
})