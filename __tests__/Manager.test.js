const Manager = require('../lib/Manager.js'); //requires Manager.js to be able to refference and pass the test

    test("Answers from Manager", () => {

            const testEmployee = new Manager("Randy", 201472, "randy@company.com", 1158);
            expect(testEmployee.name).toBe("Randy");
            expect(testEmployee.id).toBe(201472);
            expect(testEmployee.email).toContain("@");
            expect(testEmployee.officeNum).toBe(1158);
        
    })
    
    test("Get Office", () => {
        
            const testEmployee = new Manager("Randy", 201472, "randy@company.com", 1158);
            expect(testEmployee.getOffice()).toBe(1158);
        
    })

    test("Get Role", () => {
        
            const testEmployee = new Manager("Randy", 201472, "randy@company.com", 1158);
            expect(testEmployee.getRole()).toBe("Manager");
        
    });