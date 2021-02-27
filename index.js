const inquirer = require('inquirer');
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const fs = require('fs');
const team = [];

// array of questions for user
function managerQuestions(){

    inquirer.prompt([

    {
        type: "input",
        message: "Manager Name?",
        name: "managerName",
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
        message: "Office Number? ",
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
        const newManager = new Manager(answers.managerName, answers.id, answers.email, answers.officeNum)
        team.push(newManager);
        console.log(team);
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
        message: "Engineer Name?",
        name: "engineerName",
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
    const newEngineer = new Engineer(answers.engineerName, answers.id, answers.email, answers.github)
    team.push(newEngineer);
        console.log(team);
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
        name: "internName",
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
    const newIntern = new Intern(answers.internName, answers.id, answers.email, answers.school)
    team.push(newIntern);
        console.log(team);
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


// function to write README file

function buildTeam(filename, data){

    fs.writeFile( filename , data , (err)=>{
        if (err) {
            return console.log(err)
        } 
        else{
        console.log("file created")}
    })
    }
    

// function to initialize program

function init(){
    managerQuestions()
    
}

// function call to initialize program
init();
