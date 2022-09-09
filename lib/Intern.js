const Employee = require('./Employee')

class Intern extends Employee {
    constructor(Name,Id,Email,School) {
        super(Name,Id,Email)
        this.School = School
    }
    getschool() {
        return this.School
    }
    getRole() {
        return "Intern"
    }
}


module.exports = Intern