// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
inquirer.prompt(
    [
        {
            type: 'input',
            message: 'Enter your project title:',
            name: 'title',
            // Checks if user added a value
            validate: (value)=>{ if(value){return true} else {return 'Please enter a value to continue'}},
        },
        {
            type: 'input',
            message: 'Describe your project:',
            name: 'description',
            // Checks if user added a value
            validate: (value)=>{ if(value){return true} else {return 'Please enter a value to continue'}},
        },
        {
            type: 'input',
            message: 'Installation instructions:',
            name: 'instructions',
            // Checks if user added a value
            validate: (value)=>{ if(value){return true} else {return 'Please enter a value to continue'}},
        },
        // {
        //     type: 'list',
        //     message: 'What license did you use?',
        //     name: 'license',
        //     choices: ['MIT license, GPL license, Apache license, GNU license, N/A']
        //     // Checks if user added a value
        //     validate: (value)=>{ if(value){return true} else {return 'Please enter a value to continue'}},
        // },
        {
            type: 'input',
            message: 'List the names of contributers separated by a comma:',
            name: 'contributors',
            // Checks if user added a value
            validate: (value)=>{ if(value){return true} else {return 'Please enter a value to continue'}},
        },
        {
            type: 'input',
            message: 'Github username:',
            name: 'github',
            // Checks if user added a value
            validate: (value)=>{ if(value){return true} else {return 'Please enter a value to continue'}},
        }
    ]
).then(({
    title,
    description,
    instructions,
    contributors,
    github
}

))

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
