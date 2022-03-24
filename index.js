// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
//let answers = questions();
//console.log(answers)
//c//onst generatePage = require('src/gaint.js');
//const pageHTML= generatePage (name,github);
// //fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err;
//     console.log ('portfolio complete! checkout index.html to see output');
//     console.log(inquirer);
// });

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'name',
        message:'What is your name?', 
    },
    {
        type: 'input',
        name:'github',
        message: 'Enter your Github Username',
    },
    {
        type: 'input',
        name:'project',
        message: 'What is the project name?',
    },
    {
        type: 'input',
        name:'description',
        message: 'Enter a brief description of your project',
    },
    {
        type: 'input',
        name:'instructions',
        message: 'What commands can be used to install the app?',
    },
    {
        type: 'list',
        name:'license',
        message: 'What license would you like to use for the app?',
        choices: ['MIT']
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    }
] 
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    console.log("initializing app ...");
    inquirer.prompt(questions)
        .then(answers => generateTemplate(answers))

}

function generateTemplate(obj) {
    console.log(obj)
} 

// Function call to initialize app
init();