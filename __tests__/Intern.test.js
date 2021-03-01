const Intern = require('../lib/Intern.js'); //requires Intern.js to be able to refference and pass the test

    test("Answers for Intern", () => {
      
            const testEmployee = new Intern("Jimmy", 488888, "jimmy@school.com", "University of Miami");
            expect(testEmployee.name).toBe("Jimmy");
            expect(testEmployee.id).toBe(488888);
            expect(testEmployee.email).toContain("@");
            expect(testEmployee.school).toBe("University of Miami");
        
    })
    
    test("Get School", () => {
       
            const testEmployee = new Intern("Jimmy", 488888, "jimmy@school.com", "University of Miami");
            expect(testEmployee.getSchool()).toBe("University of Miami");
        
    })

    test("Get Role", () => {
        
            const testEmployee = new Intern("Jimmy", 488888, "jimmy@school.com", "University of Miami");
            expect(testEmployee.getRole()).toBe("Intern");
        
    });