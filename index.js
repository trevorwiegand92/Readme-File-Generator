const fs = require('fs');
const inquirer = require('inquirer');

const generateReadMe = (answers) => {

}
inquirer
  .prompt([

    {
        type: 'input',
        name: 'Title of Project',
        message: 'What is the title of your Project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of what your project entails.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide instructions on how to install this project. ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide examples of how and what your project will be used for.',
    },
    {
      type: 'input',
      name: 'license',
      message: 'Chose a license for your project.',
      choices: ['MIT', 'WTFPL', 'ISC','Unlicense' ],
    },
    {
      type: 'input',
      name: 'contributions',
      message: 'If you are allowing others to contribute to your project, provide guidelines for contributors here.',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Describe how to run tests on your application.',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your github username. ',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address. ',
    },
])

.then((answers) => {
    console.log(answers);
    const mdPageContent = generateReadMe(answers);
    fs.writeFile('./assets/readMe.md', mdPageContent, (err) => err ? console.log(err) : console.log('great success'));
})

.catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
});

