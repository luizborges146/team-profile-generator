const Engineer = require('../lib/Engineer');

const engineer = new Engineer('luiz', '123', 'luiz@gmail.com');

test('test if we can get the constructor values for the employee object', () => {
    expect(engineer.name).toBe('luiz');
    expect(engineer.id).toBe('123');
    expect(engineer.email).toBe('luiz@gmail.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('luiz');
});