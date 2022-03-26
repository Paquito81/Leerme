// TODO: Include packages needed for this application
//We import the 'fs' module to enable interactions with the file system
const fs = require('fs');
const inquirer = require('inquirer');
//We import the 'star' folder to interact with the gaint.js and LICENSE file 
const star = require('star');

const generateTemplate = require('star/gaint.js');

// TODO: Create an array of questions for user input
// We create questions to generate answers that are going to be added to the README file
const questions = [
    {
        type:'input',
        name:'Name',
        message:'What is your name?', 
    },
    {
        type: 'input',
        name:'Github',
        message: 'Enter your Github Username.',
    },
    {
        type: 'input',
        name:'Project',
        message: 'What is the project name?',
    },
    {
        type: 'input',
        name:'Description',
        message: 'Enter a brief description of your project.',
    },
    {
        type: 'input',
        name:'Instructions',
        message: 'What commands are used to install the app?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'What do you need to run this app?',
    },
    {
        type: 'list',
        name:'License',
        message: 'What license would you like to use for the app?',
        choices: ['MIT', 'Apache', 'GPL', 'BSD']
    },
    {
        type: 'input',
        name: 'Test',
        message: 'What command do you need to run this app?',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email?',
    }
] 
// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
    fs.writeFile(fileName, answers, function(err) {
        console.log(filename)
        console.log(answers)
        if(err) {
            return console.log(err)

        } else {
            console.log('Success! Information transferred to the README!')

        }
    }) 
    //=> {
        // if (err)
        // throw err;
        // console.log('Success! Information transferred to the README!')
    //});
}

//Use new function cause the old function was not generating a README file
function init() {
    console.log("Initializing App ...")
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generateTemplate(answers));
            console.log(answers)

        })

}
// TODO: Create a function to initialize app
// function init() {
//     console.log("Initializing app ...")
//     inquirer.prompt(questions)
//     .then(answers => generateTemplate(answers) 
//     )
// }
// function init(){
//     console.log("Initializing app ...")
//     inquirer.prompt(questions)
//     .then(answers => generateTemplate(answers) 
//     writeToFile('README.md',generateTemplate(answers));
//     console.log(answers)
//     )
// }    
// unctifon init() {
//     console.log("initializing app ...");
//     inquirer.prompt(questions)
//         .then(answers => generateTemplate(answers)); {
//             console.log(answers)
//             writeToFile('README.md', generateTemplate(answers));
//         };    
//     };
        

// };

 function generateTemplate(obj) {
     console.log(obj)
 } 

// Function call to initialize app
init();