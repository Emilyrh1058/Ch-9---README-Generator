// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License: CC0-1.0](https://img.shields.io/badge/License-${license}-lightgrey.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache": return "";
    case "GNU": return "";
    case "MIT": return "";
    case "Creative Commons": return "";
    case "Mozilla": return "";
    case "The Unilicense": return "";
    case "None": return "";
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License
    This application is licensed under [${license}](${renderLicenseLink(license)})`}
    else {return "";}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} 
  ### ${data.user}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Usage
  ${data.usage}

  ## Installation
  ${data.installation}

  ## License


## Demo
You can find a walk through of this project **here**

## Submission Requirements
`;
};


module.exports = generateMarkdown;
renderLicenseBadge();
renderLicenseLink();
renderLicenseSection();
}