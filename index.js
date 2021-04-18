// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please provide your project title.",
        validate: (titleInput) => {
            if (titleInput) {return true;} 
            else {return 'A project name is required.'}
        }
    },
    {
        type: "input",
        name: "user",
        message: "Please enter your GitHub username",
        validate: (titleInput) => {
            if (titleInput) {return true;} 
            else {return 'A project name is required.'}
        }
    },
    // {
    //     type: "confirm",
    //     name: "confirmContributors",
    //     message: "Were there any other contributors to this project?",
    //     validate: (confirmContributors) => {
    //         if (confirmContributors) {return true;}
    //         else {return ""}
    //     }
    // },
    {
        type: "input",
        name: "contributors",
        message: "Please list the names of any contributors.",
        validate: confirmContributors => {
            if (confirmContributors) {return true;} 
            else {return ""}
        }
    },
    {
        type: "input", 
        name: "description",
        message: "Please provide a description of this project.",
        validate: descriptionInput => {
            if (descriptionInput) {return true;} 
            else {return 'A project description is required.'}
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide the installations instructions.",
        validate: installationInput => {
            if (installationInput) {return true;} 
            else {return 'Installation instruction are required.'}
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Please describe the usage for this project.",
        validate: usageInput => {
            if (usageInput) {return true;} 
            else {return 'Usage information is required.'}
        }
    },
    {
        type: "input",
        name: "test",
        message: "Please provide testing instruction.",
        validate: testInput => {
            if (testInput) {return true;} 
            else {return 'Test instruction are required.'}
        }
    },
    {
        type: "list",
        name: "license",
        message: "Please provide the license information.",
        choices: [
        "None",
        "Apache",
        "GNU",
        "MIT", 
        "Creative Commons",
        "Mozilla",
        "The Unilicense",
        ]
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address for further questions about the project.",
        validate: emailInput => {
            if (emailInput) {return true;}
            else {return 'Email address is required.'}
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {return console.log(err);}
        console.log('Your README has been successfully created!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions) 
        .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
    });
}

// Function call to initialize app
init();
