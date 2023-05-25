//===============================================================================================================================================//
//=============================== Questions: that will be prompted for the user to answer in the command line ===================================//

const questions = [
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
        name: 'goal',
    },
    {
        type: 'input',
        message: 'What problem does it solve?',
        name: 'functionality',
    },
    {
        type: 'input',
        message: 'What did you learn?',
        name: 'acquisition',
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
        message: 'Please import an image (or .gif) of the deployed application to the images folder (that is in the assets folder). What is the name of the image? (i.e. screenshot.png).',
        name: 'usagePic',
    },
    {
        type: 'input',
        message: 'What is your image about? (i.e. person standing on the roof of a car looking at the night sky).',
        name: 'altText',
    },
    {
        type: 'input',
        message: 'What are the instructions for testing?',
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
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'list',
        message: 'Choose your license:',
        choices: ['Unlicense', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'None'],
        name: 'license',
    },
];

//===============================================================================================================================================//
//========================= Export Module: exports the questions arrray for it to be referred in the index.js file ==============================//

module.exports = questions