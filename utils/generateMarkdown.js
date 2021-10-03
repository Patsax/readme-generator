function validatedLicense(license) {
  if (!license || typeof license !== "string") {
    return "";
  }
  // Apache, BSD3, BSD2, GPL, LGPL, MIT, Mozilla, Common, Eclipse

  switch (license.toUpperCase()) {
    case "APACHE":
      return "Apache-2.0";
    case "BSD3":
      return "BSD-3-Clause";
    case "BSD2":
      return "BSD-2-Clause";
    case "GPL":
      return "gpl-license";
    case "LGPL":
      return "lgpl-license";
    case "MIT":
      return "MIT";
    case "MOZILLA":
      return "MPL-2.0";
    case "COMMON":
      return "CDDL-1.0";
    case "ECLIPSE":
      return "EPL-2.0";
    default:
      return "";
  }
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `
        ![badge:${license}](https://img.shields.io/badge/License-${license}-brightgreen)
    `;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `
        [${license}](https://opensource.org/licenses/${license})
    `;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  return `
        ---
        ## License
        ${renderLicenseLink(license)}
    `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(readmeData) {
  const license = validatedLicense(readmeData.license);

  return `
    # ${readmeData.title}
    ${renderLicenseBadge(license)}
    ---
    ## Table of Contents

    1. [Description](#description)
    2. [Installation](#installation)
    3. [Usage](#usage)
    4. [License](#license)
    5. [Contribute](#contribute)
    6. [Tests](#tests)
    7. [Further questions](#questions)
    ---
    ## Description

    ${readmeData.description}
    ---
    ## Installation

    ${readmeData.install}
    ---
    ## Usage

    ${readmeData.usage}
    ${renderLicenseSection(license)}
    ---
    ## Contribute
    
    ${readmeData.contribute}
    ---
    ## Tests
    
    ${readmeData.tests}
    ---
    ## Further Questions?
    
    Message me on git hub: ${readmeData.username}
    or
    Send me an email: ${readmeData.email}
`;
}

module.exports = generateMarkdown;
