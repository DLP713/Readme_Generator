// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");
const writeFileAsync = util.promisify(writeToFile);
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project:',
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Installation instructions:',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'List the names of contributers separated by a comma:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Github username:',
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err=>{
        if(err){
            console.log(err);
        }
        console.log('Your README has been created')
    });
};   

async function init(){
    try {
        const userAnswers = await inquirer.prompt(questions);
        const markdown = generateMarkdown(userAnswers);
        await writeFileAsync('README.md', markdown);
    } catch (error) {
        console.log(error);
    }
};

init();

