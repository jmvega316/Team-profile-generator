/*
The function to generate an HTML based on the user's input 


*/
 function generateManager(Manager) {
    return `
  
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title"> ${Manager.Name}, </h5>
      <h6 class="card-subtitle mb-2 text-muted">id# ${Manager.Id}</h6>
      <p class="card-text">${Manager.OfficeNumber}</p>
      <a href="# class="card-link">${Manager.Email}</a>
      </div>
    </div>
    `
}
function generateIntern(Intern) {
    return `

    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title"> ${Intern.Name}, </h5>
    <h6 class="card-subtitle mb-2 text-muted">id# ${Intern.Id}</h6>
    <p class="card-text">${Intern.School}</p>
    <a href="# class="card-link">${Intern.Email}</a>
    
  </div>
</div>

    `
}
function generateEmployee(Employee) {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title"> ${Employee.Name}, </h5>
      <h6 class="card-subtitle mb-2 text-muted">id# ${Employee.Id}</h6>
      <a href="# class="card-link">${Employee.Email}</a>
    </div>
  </div>
    `
}
function generateEngineer(Engineer) {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title"> ${Engineer.Name}, </h5>
      <h6 class="card-subtitle mb-2 text-muted">id# ${Engineer.Id}</h6>
      <p class="card-text">${Engineer.Github}</p>
      <a href="# class="card-link">${Engineer.Email}</a>
      
    </div>
  </div>
  
    `
}
function generateHTML(team) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link href= "style.css" rel= "stylesheet" link>
    <title>Document</title>
</head>
<body>
    ${team.Manager}

    ${team.Employee}

    ${team.Engineer}

    ${team.Intern}
</body>
</html>
    `
}
module.exports = {
    generateManager: generateManager,
    generateIntern: generateIntern,
    generateEmployee: generateEmployee,
    generateEngineer: generateEngineer,
    generateHTML:generateHTML
}