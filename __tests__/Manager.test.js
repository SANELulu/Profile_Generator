const Manager = require('../lib/Manager');
//name id email officeNum
describe("Manager", () => {
    describe("Answers from user", () => {
        it("should have the same values on the new class as the input from user", () =>{
            const managerName = new Manager("Randy", 201472, "randy@company.com", 1158);
            expect(managerName.name).toMatch("Randy");
            expect(managerName.id).toMatch(201472);
            expect(managerName.email).toContain("@");
            expect(managerName.officeNum).toMatch(1158);
        })
    })
    describe("Get Role", () => {
        it("should return back Manager", () =>{
            const managerName = new Manager("Randy", 201472, "randy@company.com", 1158);
            managerName.getRole();
            expect(managerName.getRole()).toMatch("Manager");
        })
    })
});