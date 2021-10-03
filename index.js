// Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js')

// Create an array of questions for user input
const questions = (inputData) => {
    // if there is no readmeData array, create one
    if (!inputData) {
        inputData = [];
    }
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is your project's title? (Reqired)",
            validate: (titleInput) => {
                if (titleInput) {
                    return true;
                } else {
                    console.log("Please enter your project's title!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Please describe the project (Required)",
            validate: (descriptionInput) => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log("Please provide a description!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "install",
            message: "What installation instructions do you have? (Required)",
            validate: (installInput) => {
                if (installInput) {
                    return true;
                } else {
                    console.log("Please include installation instructions");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "usage",
            message: "How do you run the app? (Required)",
            validate: (usageInput) => {
                if (usageInput) {
                    return true;
                } else {
                    console.log("Please indicate activation method");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "license",
            message: "What license is this project under? (Required)\n [options: Apache 2.0, BSD 3, BSD 2, GPL, LGPL, MIT, Mozilla, Common, Eclipse"
        },
        {
            type: "input",
            name: "contribute",
            message: "How can other developers contribute to your project? (Required)",
            validate: (contributeInput) => {
                if (contributeInput) {
                    return true;
                } else {
                    console.log("Please describe how others may contribute");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "tests",
            message: "How can the app be tested? (Required)",
            validate: (testsInput) => {
                if (testsInput) {
                    return true;
                } else {
                    console.log("Please describe possible testing")
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username? (Reuired)",
            validate: (usernameInput) => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log("Please enter your GitHub username!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address? (Required)",
            validate: (emailInput) => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter your email address!");
                    return false;
                }
            }
        }
    ])
    .then((readmeData) => {
        inputData.push(readmeData);
    });
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
questions()
    .then((readmeData) => {
        const mdFile = generateMarkdown(readmeData);

        fs.writeFile('README.md', generateMarkdown(readmeData), err => {
            if (err) throw new err;

            console.log('Readme file complete! Checkout README.md to see the output.')
        })
    });