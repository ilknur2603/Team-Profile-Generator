const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateTeam = require("./src/template.js")


teamArray = [];

function runFile () {
    function createMember() {
        inquirer.prompt([{
            type:"list",
            massage: "what type of employee would you like to add to your team?",
            name: "addEmployeePrompt",
            choices: ["Manager", "Engineer", "Intern", "No more team members are needed"]
        }]).then(function(userInput){
            switch(userInput.addEmployeePrompt){
                case "Manager":
                    addManager();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    htmlBuilder();    

            }


        })
    }




    function addManager() {
        inquirer.prompt([
            {
                type:"input",
                name: "managerName",
                message: "what is the manager's name?"
            },
            {
                type:"input",
                name: "managerId",
                message: "what is the manager's employee ID number?"
            },
            {
                type:"input",
                name: "managerEmail",
                message: "what is the manager's email address?" 
            },
            {
                type:"input",
                name: "managerOfficeNumber",
                message: "what is the manager's office number?" 
            }
        ]).then(answers => {
            const manager = new Manager (answers.managerName, answers.managerId, answers.managerEmail,answers.managerOfficeNumber);
            teamArray.push(manager);
            createMember()
        })
    }


    function addEngineer(){
        inquirer.prompt([
            {
                type:"input",
                name: "engineerName",
                message: "what is the engineer's name?"
            },
            {
                type:"input",
                name: "engineerId",
                message: "what is the engineer's employee ID number?"
            },
            {
                type:"input",
                name: "engineerEmail",
                message: "what is the engineer's email address?" 
            },
            {
                type:"input",
                name: "engineerGithub",
                message: "what is the engineer's Github username?" 
            }
        ]).then(answers => {
            const engineer = new Engineer (answers.engineerName, answers.engineerId, answers.engineerEmail,answers.engineerGithub);
            teamArray.push(engineer);
            createMember()
        })

    }
    function addIntern(){
        inquirer.prompt([
            {
                type:"input",
                name: "internName",
                message: "what is the intern's name?"
            },
            {
                type:"input",
                name: "internId",
                message: "what is the intern's employee ID number?"
            },
            {
                type:"input",
                name: "internEmail",
                message: "what is the intern's email address?" 
            },
            {
                type:"input",
                name: "internSchool",
                message: "what school does the intern attend?" 
            }
        ]).then(answers => {
            const intern = new Intern (answers.internName, answers.internId, answers.internEmail,answers.internSchool);
            teamArray.push(intern);
            createMember()
        });

    }

    function htmlBuilder(){
        console.log("team created")

        fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")



    }

    createMember()

}

runFile ();