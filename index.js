// TODO: Include packages needed for this application
//We import the 'fs' module to enable interactions with the file system
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generateToTemplate = require('/Users/hectorpalacios/Leerme/util/generateMarkdown.js');

const generateTemplate = util.promisify(fs.writeFile);

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
        name:'Project',
        message: 'What is the project title?',
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
        type: 'input',
        name: 'Test',
        message: 'How do we test this app?',
    },
    {
        type: 'input',
        name: 'Contribution',
        message: 'Who contributed to the project?',
    },
    {
        type: 'list',
        name:'License',
        message: 'What license would you like to use for the app?',
        choices:['MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',                   
                'Apache [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
                'GNU [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
                'BSD [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
                'None']
    },
    {
        type: 'input',
        name:'Github',
        message: 'Enter your Github Username.',
    },
    {
        type: 'input',
        name: 'Link',
        message: 'What is the link to your repository?',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email'
    }
] 
// TODO: Create a function to write README file

function writeToFile (fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
        throw err;
        console.log('Success! Information has been transfer to README!')
    });

};


    //=> {
        // if (err)
        // throw err;
        // console.log('Success! Information transferred to the README!')
    //});
//}

//Use new function cause the old function was not generating a README file
// function init() {
//     console.log("Initializing App ...")
//     inquirer.prompt(questions)
//         .then(function(answers) {
//             writeToFile("README.md",answers);
//             console.log(answers)

//         })

// }
 //TODO: Create a function to initialize app
// function init() {
//       console.log("Initializing app ...")
//       inquirer.prompt(questions)
//       .then(answers => generateTemplate(answers)  
//     )
    
// }


//  function init(){
//      console.log("Initializing app ...")
//      inquirer.prompt(questions)
//     .then(answers => generateTemplate(answers) {
//         writeToFile('README.md',answers);
//          console.log(answers)
//      })
//  }    
   function init() {
       console.log("Initializing App ...");
     inquirer.prompt(questions)
         .then(function (answers) {
             console.log(answers)
             writeToFile('README.md', generateToTemplate(answers));
         });    
     };
        

// };

//   ss
// Function call to initialize app
init();

