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
            fs.writeFile('sampleREADME.md', generateMarkdown(data), (err) =>
                err ? console.log(err) : console.log('Success!')
            );
        });
}

//===============================================================================================================================================//
//======================================================= Function call to initialize app =======================================================//

init();