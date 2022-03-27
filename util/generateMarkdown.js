function renderLicenseBadge(license){

}

function generateMarkdown(answers) {
    return `
    # ${answers.Name}
     //Name of the project
    # ${answers.Project}
    //The description of the project
    # Description
    $ {answers.Description}
    #Table of contents
   *[Installation](#installation)
   *[Usage](#usage)
   *[License](#license)
   *[Contributing](#contributing)
   *[Test](#test)
   *[Questions](#questions)
   #Installation:
   ${answers.installation}
   
   ## Usage:
   ${answers.usage}
   
   ## License
   ${answers.licence}
   
   ## Contribution
   ${answers.contribution}
   
   ## Testing
   ${answers.test}

   ## Additional
   - Github: [${answers.github}](https://github.com${data.github})
   - Email: ${answers.email}`;
  
}

module.exports = generateMarkdown;