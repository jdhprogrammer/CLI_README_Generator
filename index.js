// const generateMarkdown = require('./utils/generateMarkdown')
// // array of questions for user
const questions = [];
// // function to write README file
// function writeToFile(readme, data) {}
// // function to initialize program
// function init() {
// }
// // function call to initialize program
// init();
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'Enter you FULL name',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username',
        },
        {
            type: 'input',
            name: 'linkedin',
            message: 'Enter you Linkedin profile link',
        },
        {
            type: 'input',
            name: 'repo',
            message: 'Enter your GitHub Project Repo name',
        },
        {
            type: 'confirm',
            name: 'askMoreLinks',
            message: 'Besides the Project Repo link, would you like to add additional project link(s)?',
        },
        {
            type: 'input',
            name: 'moreLinks',
            message: 'Enter the additional project link(s) using the entire link, including the http(s):. (* Use commas "," to separate each link)',
            when: function(answers) {
                return answers.askMoreLinks;
            },
        },
        {
            type: 'input',
            name: 'title',
            message: 'Enter your project title',
        },
        {
            type: 'confirm',
            name: 'askImgs',
            message: 'Would you like to add screenshots or demo to README?',
        },
        {
            type: 'input',
            name: 'screenshot',
            message: 'Enter the image paths or urls of screenshots or demo. * (Use commas "," to separate each path or url)',
            when: function(answers) {
                return answers.askImgs;
            },
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a brief Description of your Project:',
        },
        {
            type: 'input',
            name: 'userStory',
            message: 'Write out the User Story of you Project:',
        },
        {
            type: 'input',
            name: 'tools',
            message: 'List the technologies used for the Projec. (* Use commas "," to separate each technology)',
        },
        {
            type: 'input',
            name: 'prereqs',
            message: 'What prerequisites will someone need on computer before install?',
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the steps required to Install your Project/Application?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions on how you use your Project/Application:',
        },
        {
            type: 'input',
            name: 'credit',
            message: 'Enter the People and/or Sites you want to reference/give credit to:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select a license for your Project:',
            choices: ['APACHE 2.0', 'Mozilla Public 2.0', 'GNU GPLv3', 'GNU AGPLv3', 'MIT', 'Boost Software 1.0', 'The Unlicense'],
        },
        // {
        //     type: 'input',
        //     name: 'linkedin',
        //     message: 'Enter your LinkedIn URL.',
        // },
    ]);
};

const generateMarkdown = (answers) => {

    let moreProjectLinks = '';

    if (answers.moreLinks) {
        moreProjectLinks = answers.moreLinks.split(',').join('<br>');
    }

    let techLanguages = '';

    if (answers.tools) {
        for (let i = 0; i < answers.tools.split(',').length; i++) {
            techLanguages += `* ${answers.tools.split(',')[i].trim()}.<br>`;
        }
    }

    //Set Screenshots template according to the user iniput
    let screenshots = '';

    if (answers.screenshot) {
        for (let i = 0; i < answers.screenshot.split(',').length; i++) {
            screenshots += `<kbd>![screenshot-demo${i + 1}](${answers.screenshot.split(',')[i].trim()})</kbd>`;
        }
    }

    return `# ${answers.title}

[![github-follow](https://img.shields.io/github/followers/${answers.github.trim().toLowerCase()}?label=Follow&logoColor=purple&style=social)](https://github.com/${answers.github.trim().toLowerCase()}) [![project-languages-used](https://img.shields.io/github/languages/count/${answers.github.trim().toLowerCase()}/${answers.repo.trim()}?color=important)](https://github.com/${answers.github.trim().toLowerCase()}/${answers.repo.trim()}) [![project-top-language](https://img.shields.io/github/languages/top/${answers.github.trim().toLowerCase()}/${answers.repo.trim()}?color=blueviolet)](https://github.com/${answers.github.trim().toLowerCase()}/${answers.repo.trim()}) [![license](https://img.shields.io/badge/License-${answers.license.toUpperCase().split('-').join('v')}-brightgreen.svg)](https://choosealicense.com/licenses/${answers.license}/)

#### Developer: ${answers.name}

Email: ${answers.email}  
GitHub: https://github.com/${answers.github}  
LinkedIn: ${answers.linkedin}  

Project Repository: [https://github.com/${answers.github}/${answers.repo}](https://github.com/${answers.github}/${answers.repo})  
${moreProjectLinks}

### Screenshots

${screenshots}
    
## Table of Contents

* [About the Project](#about-the-project)
  * [Description](#description)
  * [User Story](#user-story)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Usage](#usage)
* [Contributing](#contributing)
  * [Credits & References](#credits-&-references)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

## About The Project

<-- ![Product Name Screen Shot](${answers.screenshot}?raw=true "screenshot") -->

### Description

${answers.description}

#### User Story

${answers.userStory}


### Technologies Used

\`\`\`
${techLanguages}
\`\`\`


## Getting Started

### Prerequisites

${answers.prereqs}

        
### Installation & Usage

${answers.install}
  
  
${answers.usage}
  
  

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. 
Any contributions you make are **greatly appreciated**.

1. Fork the Repo on GitHub @ [https://github.com/${answers.github}/${answers.repo}](https://github.com/${answers.github}/${answers.repo}) 
2. Create your Feature Branch ('git checkout -b feature/AmazingFeature')
3. Commit your Changes ('git commit -m "Add some AmazingFeature"')
4. Push to the Branch ('git push origin feature/AmazingFeature")
5. Open a Pull Request
  
  
### Credits & References

${answers.credit}
  

## License

Distributed under the ${answers.license}. See LICENSE for more information.
  

## Contact

${answers.name} - ${answers.email}

Project Link: [https://github.com/${answers.github}/${answers.repo}](https://github.com/${answers.github}/${answers.repo})
`
};

// Bonus using async/await and try/catch
const init = async() => {
    console.log('Howdy!');
    try {
        const answers = await promptUser();

        const readme = generateMarkdown(answers);

        await writeFileAsync('newREADME.md', readme);

        console.log('Successfully wrote to newREADME.md');
    } catch (err) {
        console.log(err);
    }
};

init();



// let mitLicense = [![MIT ][license - shield]][license - url]

// <!-- ACKNOWLEDGEMENTS -->
// ## Acknowledgements
// * [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
// * [Img Shields](https://shields.io)
// * [Choose an Open Source License](https://choosealicense.com)
// * [GitHub Pages](https://pages.github.com)
// * [Animate.css](https://daneden.github.io/animate.css)
// * [Loaders.css](https://connoratherton.com/loaders)
// * [Slick Carousel](https://kenwheeler.github.io/slick)
// * [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)
// * [Sticky Kit](http://leafo.net/sticky-kit)
// * [JVectorMap](http://jvectormap.com)
// * [Font Awesome](https://fontawesome.com)