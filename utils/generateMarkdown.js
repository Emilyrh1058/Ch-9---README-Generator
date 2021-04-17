// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === ("MIT License")) {
    return `![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen)`
  } else if (license === ("Apache License 2.0")) {
    return `![GitHub license](https://img.shields.io/badge/license-Apache-brightgreen)`
  } else if (license === ("GNU General Public License v3.0")) {
    return `![GitHub license](https://img.shields.io/badge/license-GNU%20General-brightgreen)`
  } else if (license === ("BSD T-Clause 'Simplified' License")) {
    return `![GitHub license](https://img.shields.io/badge/license-BSD%20T--Clause%20'Simplified'-brightgreen)`
  } else if (license === ("BSD 3-Clause 'New' or 'Revised' License")) {
    return `![GitHub license](https://img.shields.io/badge/license-BSD%203--Clause%20'New'-brightgreen)`
  } else if (license === ("Creative Commons Zero v1.0 Universal")) {
    return `![GitHub license](https://img.shields.io/badge/license-Creative%20Commons%20Zero-brightgreen)`
  } else if (license === ("Eclipse Public License 2.0")) {
    return `![GitHub license](https://img.shields.io/badge/license-Eclipse%20Public-brightgreen)`
  } else if (license === ("GNU Affero General Public License v2.1")) {
    return `![GitHub license](https://img.shields.io/badge/license-GNU%20Affero-brightgreen)`
  } else if (license === ("GNU General Public License v2.0")) {
    return `![GitHub license](https://img.shields.io/badge/license-GNU%20General%20Public-brightgreen)`
  } else if (license === ("GNU Lesser General Public License v2.1")) {
    return `![GitHub license](https://img.shields.io/badge/license-GNU%20Lesser%20General-brightgreen)`
  } else if (license === ("GNU Lesser General Public License v3.0")) {
    return `![GitHub license](GNU Lesser General Public License v3.0)`
  } else if (license === ("Mozilla Public License 2.0")) {
    return `![GitHub license](https://img.shields.io/badge/license-Mozilla-brightgreen)`
  } else if (license === ("The Unilicense")) {
    return `![GitHub license](https://img.shields.io/badge/license-The%20Unilicense-brightgreen)`
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log("render lincense function")
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Usage
  ${data.usage}

  ## Installation
  ${data.installation}

  ## License

  ## Tests
  ${data.tests}

## Walk-through video
provide link here
`;
}
}

module.exports = generateMarkdown;