const Engineer = require('../lib/Engineer');

const engineer = new Engineer('luiz', '123', 'luiz@gmail.com');

test('check if can pass constructor values', () => {
    expect(engineer.name).toBe('luiz');
    expect(engineer.id).toBe('123');
    expect(engineer.email).toBe('luiz@gmail.com');
});

test('test getName() method', () => {
    expect(engineer.getName()).toBe('luiz');
});

test('test getEmail() method', () => {
    expect(engineer.getId()).toBe('123');
});

test('test getName() method', () => {
    expect(engineer.getEmail()).toBe('luiz@gmail.com');
});

test('getRole() should return "Engineer"', () => {
    const engineerValue = "Engineer";
    const engineer = new Engineer("Fer","258", "fer@fer.com");
    expect(engineer.getRole()).toBe(engineerValue);
});

test("Iniciate Engineer instace", () => {
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe("object");
});