const Employee = require('../lib/Employee.js'); //requires Employee.js to be able to refference and pass the test

test("New Employee should be an object with specific properties", () => {
   
        const testEmployee = new Employee ("Johnny", 290012, "johnny@company.com", "Engineer");
        expect(typeof(testEmployee)).toBe("object");
        expect(testEmployee.name).toEqual(expect.any(String));
        expect(testEmployee.id).toEqual(expect.any(Number));
        expect(testEmployee.email).toEqual(expect.any(String));
        expect(testEmployee.email).toContain("@");
 
})
test("Get Name", () => {
    
        const testEmployee = new Employee ("Johnny", 290012, "johnny@company.com", "Engineer");
        expect(testEmployee.getName()).toBe("Johnny");

});

test("Get ID should return ID entered by user", () => {
    
        const testEmployee = new Employee ("Johnny", 290012, "johnny@company.com", "Engineer");
        expect(testEmployee.getId()).toBe(290012);
    
})

test("Get Role should return back role", () => {
    
        const testEmployee = new Employee ("Johnny", 290012, "johnny@company.com", "Engineer");
        expect(testEmployee.getRole()).toBe("Employee");
    
});