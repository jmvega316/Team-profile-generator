class Employee {
    constructor(Name, Id, Email) {
      this.Name = Name;
      this.Id = Id;
      this.Email = Email;
    }
    getid() {
      return this.Id
      }
    getname() {
      return this.Name
      }
    getemail() {
        return this.Email
      }
      getrole (){
        return "Employee"
      }
      
}

module.exports = Employee

