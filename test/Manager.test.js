const Manager = require('../lib/Manager');

const manager = new Manager('luiz', '123', 'luiz@gmail.com');

test('test if we can get the constructor values for the employee object', () => {
    expect(manager.name).toBe('luiz');
    expect(manager.id).toBe('123');
    expect(manager.email).toBe('luiz@gmail.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('luiz');
});