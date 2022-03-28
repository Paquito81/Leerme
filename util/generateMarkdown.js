function renderLicenseBadge(license){
    
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

function generateMarkdown(answers) {
    return `
   ## Name:
    ${answers.Name}

   ## Project Title
     ${answers.Project}

   ## Description:
    ${answers.Description}

   ## Table of contents

    -[Installation](#installation)
    -[Usage](#usage)
    -[License](#license)
    -[Contributing](#contributing)
    -[Test](#test)
    -[Additional Info](#additional-info)

   ## Instructions:
    ${answers.Instructions}
    
   
   ## Usage:
   ${answers.Usage}
   
   ## License:
   ${answers.Licence}
   
   ## Contribution:
   ${answers.Contribution}
   
   ## Test:
   ${answers.Test};

   ## Additional Info:

   -Github: ${answers.Github}
   - Link: ${answers.Link}
   - Email: ${answers.Email};
    `
}

module.exports = generateMarkdown;