// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('src/gaint.js');
const pageHTML= generatePage (name,github);
fs.writeFile('./index.html', pageHTML, err => {
    if (err) throw err;
    console.log ('portfolio complete! checkout index.html to see output');
    console.log(inquirer);
});

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:'What is your name?(Require)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name:'github',
            message: 'Enter your Github Username (Required)',
            validate: gitgubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your Github username!');
                    return false;
                }
            }
        }
    ]);
};
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();