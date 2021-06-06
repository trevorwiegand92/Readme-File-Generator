Finished homework assignment for week nine. Creating a professional readme generator.

NAME: Readme File Generator

The objective of this assignment was to create a quality README using a command-line application to generate one for the user, allowing more devotion to the creator to work on the project. 

The command-line application dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer). The application is invoked by using the following command:

```bash
node index.js
```

When the user is prompted for information about the application repository, a high-quality, professional README.md is generated with the title of the project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions.

## Table of Contents

    * [Installation](#Installation)

    * [Usage](#Usage)

    * [License](#License)

    * [Contributing](#Contributions)
    
    * [Tests](#Tests)
    
    * [Questions](#Questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}

## Contributing
${answers.contributions}

## Tests
${answers.tests}

## Questions
For additional information please contact me via GitHub at [https://github.com/${answers.github}](https://github.com/${answers.github}) or via email at [${answers.email}](mailto:${answers.email}?subject=[GitHub]%README%Generator).`
};

Github Repository URL: 

https://github.com/trevorwiegand92/Readme-File-Generator


Walkthrough video:


