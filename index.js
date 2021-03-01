const inquirer = require('inquirer');
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const fs = require('fs');
const path = require("path");
const generateTeam = require('./src/page-template.js');

const Employees = [];


// Question Paths 
function managerQuestions(){

    inquirer.prompt([

    {
        type: "input",
        message: "Manager name?",
        name: "name",
        validate: (value)=> { if (value){return true} else {return "Input your name, please."}},
    },
    {
        type: "input",
        message: "Employee ID?",
        name: "id",
        validate: (value)=> { if (value){return true} else {return "Input your ID, please."}},
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
        validate: (value)=> { if (value){return true} else {return "Input your email, please."}},
    },
    {
        type: "input",
        message: "Office Number?",
        name: "officeNum",
        validate: (value)=> { if (value){return true} else {return "Input the Office Number, please."}},
    }, 
    {
        type: "list",
        message: `Select an action.`,
        choices: [
            "Add Engineer",
            "Add Intern",
            "Finish Building Team",
        ],
        name: "action",
        validate: (value)=> { if (value){return true} else {return "Choose an action, please."}},
    },
    ]).then(function(answers){
        const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNum)
        Employees.push(newManager);
        console.log(Employees);
        if (answers.action === 'Add Engineer'){
            engineerQuestions();
        } 
        if (answers.action === 'Add Intern'){
            internQuestions();
        }
        if (answers.action === 'Finish Bulding Team'){
            buildTeam();
        }
})};

function engineerQuestions(){

    inquirer.prompt([
 
    {
        type: "input",
        message: "Engineer name?",
        name: "name",
        validate: (value)=> { if (value){return true} else {return "Input your name, please."}},
    },
    {
        type: "input",
        message: "Employee ID?",
        name: "id",
        validate: (value)=> { if (value){return true} else {return "Input your Employee ID, please."}},
    },
    {
        type: "input",
        message: "Email?",
        name: "email",
        validate: (value)=> { if (value){return true} else {return "Input your email, please."}},
    },
    {
        type: "input",
        message: "GitHub Usernmame?",
        name: "github",
        validate: (value)=> { if (value){return true} else {return "Input your GitHub Username, please."}},
    },
    {
        type: "list",
        message: `Select an action.`,
        choices: [
            "Add Engineer",
            "Add Intern",
            "Finish Building Team",
        ],
        name: "action",
        validate: (value)=> { if (value){return true} else {return "Choose an action, please."}},
    },
    
]).then(function(answers){
    const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
    Employees.push(newEngineer);
        console.log(Employees);
    if (answers.action === 'Add Engineer'){
        engineerQuestions();
    } 
    if (answers.action === 'Add Intern'){
        internQuestions();
    }
    if (answers.action === 'Finish Bulding Team'){
        buildTeam();
    }
})};

function internQuestions(){
    
    inquirer.prompt([
    {
        type: "input",
        message: "Intern Name?",
        name: "name",
        validate: (value)=> { if (value){return true} else {return "Input your name, please."}},
    },
    {
        type: "input",
        message: "Employee ID?",
        name: "id",
        validate: (value)=> { if (value){return true} else {return "Input your Employee ID, please."}},
    },
    {
        type: "input",
        message: "Email?",
        name: "email",
        validate: (value)=> { if (value){return true} else {return "Input your email, please."}},
    },
    {
        type: "input",
        message: "School this Intern is currently enrolled in?",
        name: "school",
        validate: (value)=> { if (value){return true} else {return "Input the school name, please."}},
    },
    {
        type: "list",
        message: `Select an action.`,
        choices: [
            "Add Engineer",
            "Add Intern",
            "Finish Building Team",
        ],
        name: "action",
        validate: (value)=> { if (value){return true} else {return "Choose an action, please."}},
    },
    
]).then(function(answers){
    const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school)
    Employees.push(newIntern);
        console.log(Employees);
    if (answers.action === 'Add Engineer'){
        engineerQuestions();
    } 
    if (answers.action === 'Add Intern'){
        internQuestions();
    }
    if (answers.action === 'Finish Bulding Team'){
        generateTeam();
    }
})};

function buildTeam() {
    // Create the output directory if the output path doesn't exist
    const response = generateTeam(Employees)
    fs.writeFile("./output/team.html", response);
  }


function startHTML() {
    const html = `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                <script src="https://use.fontawesome.com/24967b4054.js"></script>
                <title>Team Profile</title>
            </head>
            <body>
                <nav class="navbar mb-5 text-white" style = "background-color: palevioletred; height: 10rem;">
                    <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
                </nav>
                <div class="container">
                    <div class="row">`
    const newhtml = `yaga`
    
    //using the file system module to write the HTML file
    fs.writeFile("./output/team.html", html, function (err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("Currently building Team...");
}




// function to initialize program

function init(){
    
    managerQuestions();


}

// function call to initialize program
init();
