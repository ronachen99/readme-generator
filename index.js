const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('./utils/questions');

function init() {
    inquirer
        .prompt(questions).then((data) => {
            fs.writeFile('README.md', generateMarkdown(data), (err) =>
                err ? console.log(err) : console.log('Success!')
            );
        });
}

// Function call to initialize app
init();