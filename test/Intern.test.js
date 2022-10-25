const Intern = require('../lib/Intern.js');

const intern = new Intern('luiz', '123', 'luiz@gmail.com');

test('test if we can get the constructor values for the employee object', () => {
    expect(intern.name).toBe('luiz');
    expect(intern.id).toBe('123');
    expect(intern.email).toBe('luiz@gmail.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('luiz');
});