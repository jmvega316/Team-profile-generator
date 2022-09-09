const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(Name,Id,Email,Github) {
        super(Name,Id,Email)
        this.Github = Github
    }
    getGithub() {
        return this.gitGithub
    }
    getRole() {
        return "Engineer"
    }
}


module.exports = Engineer