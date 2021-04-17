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
        type: "confirm",
        name: "confirmContributors",
        message: "Were there any other contributors to this project?",
        default: true
    },
    {
        type: "input",
        name: "contributors",
        message: "Please list the names of the contributors.",
        when: ({ confirmContributors }) => {
            if (confirmContributors) {return true;} 
            else {return false;}
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
        name: "usage",
        message: "Please describe the usage for this project.",
        validate: usageInput => {
            if (usageInput) {return true;} 
            else {return 'Usage information is required.'}
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
        type: "list",
        name: "license",
        message: "Please provide the license information.",
        choices: [
        "None",
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License", 
        "BSD T-Clause 'Simplified' License",
        "BSD 3-Clause 'New' or 'Revised' License",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License v2.1",
        "GNU General Public License v2.0",
        "GNU Lesser General Public License v2.1",
        "GNU Lesser General Public License v3.0",
        "Mozilla Public License 2.0",
        "The Unilicense",
        ]
    },
    {
        type: "input",     // FIGURE THIS OUT !!
        name: "tests",
        message: "Please provide the project tests."
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {return console.log(err);
        }
        console.log('Your README has been successfully created!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
.prompt(questions) 
  // Write the user response to a file by chaining the below callback method to the prompt above.
.then(function(data) {
    // Bonus: Generate the name of your user file from their input
    writeToFile("README.md", generateMarkdown(data));
});
}
// Function call to initialize app
init();
