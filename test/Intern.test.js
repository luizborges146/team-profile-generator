const Intern = require('../lib/Intern.js');

const intern = new Intern('luiz', '123', 'luiz@gmail.com');

test('check if can pass constructor values', () => {
    expect(intern.name).toBe('luiz');
    expect(intern.id).toBe('123');
    expect(intern.email).toBe('luiz@gmail.com');
});

test('test getName() method', () => {
    expect(intern.getName()).toBe('luiz');
});

test('test getEmail() method', () => {
    expect(intern.getId()).toBe('123');
});

test('test getName() method', () => {
    expect(intern.getEmail()).toBe('luiz@gmail.com');
});

test('getRole() should return "Intern"', () => {
    const internValue = "Intern";
    const intern = new Intern("Fer","258", "fer@fer.com");
    expect(intern.getRole()).toBe(internValue);
});

test("Iniciate Intern instace", () => {
    const intern = new Intern();
    expect(typeof(intern)).toBe("object");
});