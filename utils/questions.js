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
        message: 'Please add a screenshot! Where is your screenshot located? (i.e. assets/images/screenshot.png).',
        name: 'location',
    },
    {
        type: 'input',
        message: 'What is your screenshot about? (i.e. colouring hero banner with a welcome message).',
        name: 'altText',
    },
    {
        type: 'input',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
        name: 'collaborators',
    },
    {
        type: 'input',
        message: 'List third party assets or tutorials used with links, if any.',
        name: 'thirdParty',
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
]

module.exports = questions