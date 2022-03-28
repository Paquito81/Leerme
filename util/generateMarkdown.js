function renderLicenseBadge(license){
    
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function generateMarkdown(answers) {
    return `
    ##Name:
    ${answers.Name}
     //Name of the project
    ##Project Title
     ${answers.Project}
    //The description of the project
    ##Description:
    ${answers.Description}
    ##Table of contents
    -[Installation](#installation)
    -[Usage](#usage)
    -[License](#license)
    -[Contributing](#contributing)
    -[Test](#test)
    -[Questions](#questions)
    ##Installation:
    ${answers.installation}

    ##License:
    
   
   ## Usage:
   ${answers.usage}
   
   ## License
   ${answers.licence}
   
   ## Contribution
   ${answers.contribution}
   
   ## Test
   ${answers.test};

    `
}

module.exports = generateMarkdown;