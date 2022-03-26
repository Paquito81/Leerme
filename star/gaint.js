function generateToTemplate(answers) {
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
   #Installation`
  
}

module.exports = generateToTemplate;