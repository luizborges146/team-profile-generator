const Employee = require('../lib/Employee.js');

const employee = new Employee('luiz', '123', 'luiz@gmail.com');

test('test if we can get the constructor values for the employee object', () => {
    expect(employee.name).toBe('luiz');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('luiz@gmail.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('luiz');
});

