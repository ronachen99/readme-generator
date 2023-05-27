//===============================================================================================================================================//
//=========================================================== Module(s) and Package(s) ==========================================================//

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('./utils/questions');

//===============================================================================================================================================//
//==================================== Initialize Application: function that will initialize the application ====================================//

function init() {
    inquirer
        .prompt(questions).then((data) => {
            fs.writeFile('dist/sampleREADME.md', generateMarkdown(data), (err) =>
                err ? console.log(err) : console.log('Success! Find sampleREADME.md in the dist folder!')
            );
        });
}

//===============================================================================================================================================//
//======================================================= Function call to initialize app =======================================================//

init();