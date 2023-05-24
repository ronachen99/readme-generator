// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What was your motivation?',
            name: 'motivation',
        },
        {
            type: 'input',
            message: 'Why did you build this project?',
            name: 'reason',
        },
        {
            type: 'input',
            message: 'What problem does it solve?',
            name: 'solved',
        },
        {
            type: 'input',
            message: 'What did you learn?',
            name: 'learned',
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Please provide instructions and examples for use.',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Please add a screenshot by typing: ![alt text](assets/images/screenshot.png).',
            name: 'screenshot',
        },
        {
            type: 'input',
            message: 'List your collaborators, if any, with links to their GitHub profiles.',
            name: 'collaborators',
        },
        {
            type: 'input',
            message: 'List third party assets or tutorials used with links, if any.',
            name: 'assets',
        },
        {
            type: 'input',
            message: 'Please provide instructions for testing.',
            name: 'test',
        },
        {
            type: 'input',
            message: 'What are your guidelines for contribution?',
            name: 'contribute',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'Please provide an email address for reaching out to you?',
            name: 'email',
        },
        {
            type: 'list',
            message: 'Choose your license:',
            choices: ['MIT License', 'GNU GPLv3', 'Apache License 2.0', 'ISC License'],
            name: 'license',
        },

    ])
    // TODO: Create a function to write README file
    .then((data) => {
        console.log(data);
        fs.writeFile('README.md', generateMarkdown(data), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });

// TODO: Create a function to initialize app.... is this even necessary? .___.
function init() { }

// Function call to initialize app
init();
