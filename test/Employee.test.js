const Employee = require('../lib/Employee.js');

const employee = new Employee('luiz', '123', 'luiz@gmail.com');

test('check if can pass constructor values', () => {
    expect(employee.name).toBe('luiz');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('luiz@gmail.com');
});

test('test getName() method', () => {
    expect(employee.getName()).toBe('luiz');
});

test('test getEmail() method', () => {
    expect(employee.getId()).toBe('123');
});

test('test getName() method', () => {
    expect(employee.getEmail()).toBe('luiz@gmail.com');
});

test('getRole() should return "Employee"', () => {
    const employeeValue = "Employee";
    const employee = new Employee("Fer","258", "fer@fer.com");
    expect(employee.getRole()).toBe(employeeValue);
});

test("Iniciate Employee instace", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

