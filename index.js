const fs = require ('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const {generateManager, generateEngineer, generateIntern, generateEmployee, generateHTML} = require('./src/generateHTML')
let team = {}

// Make a main menu function and this main menu should have 5 different options
/* Option 1
Create Manager
Create Intern
Create Engineer
Create Employee
Create HTML

*/
//Each option will link to it's own function 

//Option 2
// Just ask the questions right after each other and at the end of all the questions, generate HTML


inquirer.prompt([
    {
        type: "input",
        name: "Name",
        message: "What is the name of the Manager",

    },
    {
    type: "input",
    name: "Id",
    message: "What is your Id",
    },

    {
        type: "input",
        name: "Email",
        message: "what is your Email",
},
    {
        type: "input",
        name: "OfficeNumber",
        message: "What is your OfficenNumber",

    }



]).then(answers => {
    const manager = new Manager(answers.Name, answers.Id,answers.Email, answers.OfficeNumber)
    team =  {Manager: generateManager(manager)}
        createEngineer()

})




function createEngineer(){

    inquirer.prompt([
        {
            type: "input",
            name: "Name",
            message: "What is the name of the Enginier",
    
        },
        {
        type: "input",
        name: "Id",
        message: "What is your Id",
        },
    
        {
            type: "input",
            name: "Email",
            message: "what is your Email",
    },

    {
        tyoe: "input",
        name: "Github",
        message: "What is your Github",
    }

    ]).then(answers => {
     const engenier = new Engineer(answers.Name, answers.Id,answers.Email,answers.Github)
     team = { ...team ,Engineer: generateEngineer(engenier)}
     createEmployee()
})
}


function createEmployee(){

    inquirer.prompt([
        {
            type: "input",
            name: "Name",
            message: "What is the name of the Employee",
    
        },
        {
        type: "input",
        name: "Id",
        message: "What is your Id",
        },
    
        {
            type: "input",
            name: "Email",
            message: "what is your Email",
    },

  
    ]).then(answers => {
     const employee = new Employee(answers.Name, answers.Id,answers.Email,)
     team = { ...team, Employee: generateEmployee(employee)}
     createIntern()
})
}


function createIntern(){

    inquirer.prompt([
        {
            type: "input",
            name: "Name",
            message: "What is the name of the Intern",
    
        },
        {
        type: "input",
        name: "Id",
        message: "What is your Id",
        },
    
        {
            type: "input",
            name: "Email",
            message: "what is your Email",
    },

    {
        tyoe: "input",
        name: "School",
        message: "What is the name of your School",
    }

    ]).then(answers => {
     const intern = new Intern(answers.Name, answers.Id,answers.Email,answers.School)
    team = {...team, Intern: generateIntern(intern)}
    console.log(team)
   writeToHTML(team)
})
}


function writeToHTML(team) {
    let html = generateHTML(team)
    return fs.writeFile('Index.HTML', html, err => {
        if(err) console.log(err)
    })
  
    

}























// get all data for a manager for example
// name email id office nmber
// new Manager(answers.name, answers.id, answers.email, answers.officeNumber)




/* 
WE have to import all of our classes we created

WE have to start using inquirer to make prompts on the command line
The user should be able to make their team based off of the classes we created
Then once the team has been chosen, then it should generate an HTML file



*/