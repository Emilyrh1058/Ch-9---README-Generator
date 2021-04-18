// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License: CC0-1.0](https://img.shields.io/badge/License-${license}-lightgrey.svg)`}
    else {return ""};
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache": return "https://opensource.org/licenses/Apache-2.0";
    case "GNU": return "https://opensource.org/licenses/gpl-license";
    case "MIT": return "https://opensource.org/licenses/MIT";
    case "Creative Commons": return "https://creativecommons.org/about/cclicenses/";
    case "Mozilla": return "https://opensource.org/licenses/MPL-2.0";
    case "The Unilicense": return "https://choosealicense.com/licenses/unlicense/";
    case "None": return "";
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License
    This application is licensed under [${license.choices}](${renderLicenseLink(license)})`}
    else {return "";}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} 
  ### ${data.user}
  #### Contributors:
  ${data.contributors}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [Description](#description)
  * [Insallation](#installation)
  * [Usage](#usage)
  * [Test](#test)
  * [License](#license)
  * [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ## Test Instruction
  ${data.test}

  ## License
  For more information please visit: ${renderLicenseLink(data.license)}
  
  ## Questions
  For more information or questions about the README Generator, please contact <${data.email}>
  You may also visit my GitHub page here: https://github.com/Emilyrh1058
  `;
}

module.exports = generateMarkdown;
renderLicenseBadge();
renderLicenseLink();
renderLicenseSection();
