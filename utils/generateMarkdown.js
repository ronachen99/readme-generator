//===============================================================================================================================================//
//======================= Render License Badge: function that returns a license badge based on which license is passed in =======================//

function renderLicenseBadge(license) {
  // Returns an empty string if user selected 'None'
  let licenseBadge = ''
  switch (license) {
    case 'None':
      return licenseBadge;
    case 'Unlicense':
      return licenseBadge += '![The Unlicense](https://img.shields.io/badge/license-Unlicense-brightgreen.svg)';
    case 'GNU AGPLv3':
      return licenseBadge += '![GNU AGPLv3](https://img.shields.io/badge/license-GNU%20AGPLv3-green.svg)';
    case 'GNU GPLv3':
      return licenseBadge += '![GNU GPLv3](https://img.shields.io/badge/license-GNU%20GPLv3-yellowgreen.svg)';
    case 'GNU LGPLv3':
      return licenseBadge += '![GNU LGPLv3](https://img.shields.io/badge/license-GNU%20LGPLv3-yellow.svg)';
    case 'Mozilla Public License 2.0':
      return licenseBadge += '![Mozilla Public License 2.0](https://img.shields.io/badge/license-Mozilla%20Public%20License%202.0-orange.svg)';
    case 'Apache License 2.0':
      return licenseBadge += '![Apache License 2.0](https://img.shields.io/badge/license-Apache%20License%202.0-red.svg)';
    case 'MIT License':
      return licenseBadge += '![MIT License](https://img.shields.io/badge/license-MIT%20License-blue.svg)';
    case 'Boost Software License 1.0':
      return licenseBadge += '![Boost Software License 1.0](https://img.shields.io/badge/license-Boost%20Software%20License%201.0-lightgrey.svg)';
  }
}
//===============================================================================================================================================//
//========================================= Render License Link: function that returns the license link =========================================//

function renderLicenseLink(license) {
  // Returns an empty string if user selected 'None'
  let licenseLink = ''
  switch (license) {
    case 'None':
      return licenseLink;
    case 'Unlicense':
      return licenseLink += '[The Unlicense](https://choosealicense.com/licenses/unlicense/)';
    case 'GNU AGPLv3':
      return licenseLink += '[GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)';
    case 'GNU GPLv3':
      return licenseLink += '[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)';
    case 'GNU LGPLv3':
      return licenseLink += '[GNU LGPLv3](https://choosealicense.com/licenses/lgpl-3.0/)';
    case 'Mozilla Public License 2.0':
      return licenseLink += '[Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)';
    case 'Apache License 2.0':
      return licenseLink += '[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)';
    case 'MIT License':
      return licenseLink += '[MIT License](https://choosealicense.com/licenses/mit/)';
    case 'Boost Software License 1.0':
      return licenseLink += '[Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)';
  }
}
//===============================================================================================================================================//
//====================================== Render License Section: function that returns the license section ======================================//
  
function renderLicenseSection(license) {
  if (license === 'None') {
    // Returns an empty string if user selected 'None'
    return '';
  } return `## License
The application is covered under the ${renderLicenseLink(license)}. Please refer to the documentation for more details.`;
}

//===============================================================================================================================================//
//========================== Render License TOC: function that returns the license section to the table of contents =============================//

function renderLicenseTOC(license) {
  if (license === 'None') {
    // Returns an empty string if user selected 'None'
    return '';
  } return `- [License](#license)`;
}

//===============================================================================================================================================//
//======================================= Generate Markdown: function to generate markdown for README ===========================================//

function generateMarkdown(data) {
  
  return `# ${data.title}

  <br>

  ${renderLicenseBadge(data.license)}

  <br>

  ## Description 
  - ${data.motivation}
  - ${data.goal}
  - ${data.functionality}
  - ${data.acquisition}

  <br>
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseTOC(data.license)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  
  <br>

  ## Installation
  
  ${data.installation}
  
  <br>

  ## Usage

  ${data.usage} \n
  
  Snippet of the deployed application: \n

  ![${data.altText}](./assets/images/${data.usagePic})

  <br>

  ${renderLicenseSection(data.license)}

  <br>

  ## Contributing
  
  Guidelines for contribution: \n

  ${data.contribute}

  <br>

  ## Tests

  Instructions for testing: \n

  ${data.test}
  
  <br>
  
  ## Questions
  
  Visit my GitHub at https://github.com/${data.username} \n
  Contact me at ${data.email} \n
  
  <br>
  
  Please include the following in the email:
  1. The repository name in the subject line (i.e., readme-generator).
  2. Your name and contact information.
  3. Reason for the email.
  \n
  Much appreciated.
`;
}

// Exports the generateMarkdown function for it to be used
module.exports = generateMarkdown;