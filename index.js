const fs = require("fs");
const inquirer = require("inquirer");


const team = [];

// #########################  Create a Menu  ###############################################

function menu() {
    inquirer
    .prompt([
        {
            type: "list",
            name:"menu",
            message:"Please, select the type of team member you would like to add:",
            choices:["Manager", "Engineer", "Intern","Complete"]
        }
    ])
    .then((userAnswer) => {
        console.log(userAnswer)
        switch(userAnswer.menu) {
            case "Manager":
                addManager();
                break;
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            case "Complete":
                createTeam();
        }
    });
}

// #########################  Create a manager  ###############################################

function addManager() {
    inquirer.prompt([
        {
            type:"input",
            name:"managerName",
            message:"What is the manager name?"
        },
        {
            type:"input",
            name:"managerId",
            message:"What is the manager employee ID?"
        },
        {
            type:"input",
            name:"managerEmail",
            message:"What is the manager email?"
        },
        {
            type:"input",
            name:"managerOffice",
            message:"What is the manager office number?"
        },
    ])
    .then((answers) => {
        console.log(answers);
        // const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
        // team.push(manager);
        menu();
    })
}

// #########################  Create a Engineer  ###############################################

function addEngineer() {
    inquirer.prompt([
        {
            type:"input",
            name:"engineerName",
            message:"What is the engineer name?"
        },
        {
            type:"input",
            name:"engineerId",
            message:"What is the engineer ID?"
        },
        {
            type:"input",
            name:"engineerEmail",
            message:"What is the engineer email?"
        },
        {
            type:"input",
            name:"engineerGithub",
            message:"What is the engineer GitHub username?"
        },
    ])
    .then((answers) => {
        console.log(answers);
        // const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        // team.push(engineer);
        menu();
    })
}

// #########################  Create a Intern  ###############################################

function addIntern() {
    inquirer.prompt([
        {
            type:"input",
            name:"internName",
            message:"What is the intern name?"
        },
        {
            type:"input",
            name:"internId",
            message:"What is the intern ID?"
        },
        {
            type:"input",
            name:"internEmail",
            message:"What is the intern email?"
        },
        {
            type:"input",
            name:"internSchool",
            message:"What is the intern school name?"
        },
    ])
    .then((answers) => {
        console.log(answers);
        // const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        // team.push(intern);
        menu();
    })
}

addManager()