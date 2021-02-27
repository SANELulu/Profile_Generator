const Employee = require('./Employee');
class Manager extends Employee {
    constructor(name,id,email,officeNum){
        super(name,id,email);
        this.officeNum = officeNum;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return 'Manager';
    }
}




module.exports = Manager 