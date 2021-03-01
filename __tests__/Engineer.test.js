const Engineer = require('../lib/Engineer.js'); //requires Engineer.js to be able to refference and pass the test 

    test("Answers from user", () => {

            const testEmployee = new Engineer("Angel", 372312, "angel@company.com", "AngelProgram");
            expect(testEmployee.name).toBe("Angel");
            expect(testEmployee.id).toBe(372312);
            expect(testEmployee.email).toContain("@");
            expect(testEmployee.github).toBe("AngelProgram");
    })
    
    test("Get Github", () => {

            const testEmployee = new Engineer("Angel", 372312, "angel@company.com", "AngelProgram");
            expect(testEmployee.getGithub()).toBe("AngelProgram");

    });

    test("Get Role", () => {
        
            const testEmployee = new Engineer("Angel", 372312, "angel@company.com", "AngelProgram")
            expect(testEmployee.getRole()).toBe("Engineer");

    });