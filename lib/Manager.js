const Employee = require('./Employee')

class Manager extends Employee {
    constructor(Name,Id,Email,OfficeNumber) {
        super(Name,Id,Email)
        this.OfficeNumber = OfficeNumber
    }
    getOfficeNumber() {
        return this.OfficeNumber
    }
    getRole() {
        return "Manager"
    }
}


module.exports = Manager