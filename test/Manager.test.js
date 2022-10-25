const Manager = require('../lib/Manager');

const manager = new Manager('luiz', '123', 'luiz@gmail.com');

test('check if can pass constructor values', () => {
    expect(manager.name).toBe('luiz');
    expect(manager.id).toBe('123');
    expect(manager.email).toBe('luiz@gmail.com');
});

test('test getName() method', () => {
    expect(manager.getName()).toBe('luiz');
});

test('test getEmail() method', () => {
    expect(manager.getId()).toBe('123');
});

test('test getName() method', () => {
    expect(manager.getEmail()).toBe('luiz@gmail.com');
});

test('getRole() should return "Manager"', () => {
    const managerValue = "Manager";
    const manager = new Manager("Fer","258", "fer@fer.com");
    expect(manager.getRole()).toBe(managerValue);
});

test("Iniciate Manager instace", () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe("object");
});