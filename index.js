const fs = require("fs");
const inquirer = require("inquirer");

function menu() {
    inquirer.createPromptModule([
        {
            type: "checkbox",
            name:"menu",
            message:"Please, select the type of team member you would like to add:",
            choice:["Manager", "Engineer", "Intern","Complete"]
        }
    ])
    .then((userAnswer) =>{
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

function addManager() {
    inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"What is the manager name?"
        },
        {
            type:"input",
            name:"employeeId",
            message:"What is the manager employee ID?"
        },
        {
            type:"input",
            name:"email",
            message:"What is the manager email?"
        },
        {
            type:"input",
            name:"office",
            message:"What is the manager office number?"
        },
    ])
}