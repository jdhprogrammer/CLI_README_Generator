// function to generate markdown for README


let year = new Date().getFullYear();

const generateMarkdown = function(answers) {
    let moreProjectLinks = '';

    if (answers.moreLinks) {
        moreProjectLinks = answers.moreLinks.split(',').join('<br>');
    }

    let techLanguages = '';

    if (answers.tools) {
        for (let i = 0; i < answers.tools.split(',').length; i++) {
            techLanguages += `* ${answers.tools.split(',')[i].trim()}.  `;
        }
    }

    //Set Screenshots template according to the user iniput
    let screenshots = '';
    let screenshotMain = '';

    if (answers.screenshot) {
        for (let i = 0; i < answers.screenshot.split(',').length; i++) {
            screenshots += `![screenshot-demo${i + 1}](${answers.screenshot.split(',')[i].trim()})`;

        }
        for (let i = 0; i < 1; i++) {
            screenshotMain += `![screenshot-demo${i + 1}](${answers.screenshot.split(',')[0].trim()})`;
        }
    }

    return `# ${answers.title}

[![github-follow](https://img.shields.io/github/followers/${answers.github.trim().toLowerCase()}?label=Follow&logoColor=purple&style=social)](https://github.com/${answers.github.trim().toLowerCase()}) [![project-languages-used](https://img.shields.io/github/languages/count/${answers.github.trim().toLowerCase()}/${answers.repo.trim()}?color=important)](https://github.com/${answers.github.trim().toLowerCase()}/${answers.repo.trim()}) [![project-top-language](https://img.shields.io/github/languages/top/${answers.github.trim().toLowerCase()}/${answers.repo.trim()}?color=blueviolet)](https://github.com/${answers.github.trim().toLowerCase()}/${answers.repo.trim()}) [![license](https://img.shields.io/badge/License-${answers.license.toLowerCase().split('-').join('v')}-brightgreen.svg)](https://choosealicense.com/licenses/${answers.license}/)

#### Developer

${answers.name}

Email: ${answers.email}  
GitHub: https://github.com/${answers.github}  
LinkedIn: ${answers.linkedin}  

Project Repository: [https://github.com/${answers.github}/${answers.repo}](https://github.com/${answers.github}/${answers.repo})  
  
${moreProjectLinks}

## Table of Contents

* [About the Project](#about-the-project)
  * [Description](#description)
  * [User Story](#user-story)
  * [Technologies](#technologies)

* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Usage](#usage)

* [Contributing](#contributing)
* [Acknowledgements](#acknowledgements)
* [License](#license)
* [Contact](#contact)

## About The Project
  
${screenshotMain}

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

        
### Installation

${answers.install}
  
### Usage
  
${answers.usage}
  
  

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. 
Any contributions you make are **greatly appreciated**.

1. Fork the Repo on GitHub @ [https://github.com/${answers.github}/${answers.repo}](https://github.com/${answers.github}/${answers.repo}) 
2. Create your Feature Branch ('git checkout -b feature/AmazingFeature')
3. Commit your Changes ('git commit -m "Add some AmazingFeature"')
4. Push to the Branch ('git push origin feature/AmazingFeature")
5. Open a Pull Request  
  
### Screenshots

${screenshots} 
  
### Acknowledgements

${answers.credit}
  

## License

Distributed under the [${answers.license.toUpperCase()}](https://choosealicense.com/licenses/${answers.license}/). See LICENSE for more information.
  

## Contact

${answers.name} - ${answers.email}

Project Link: [https://github.com/${answers.github}/${answers.repo}](https://github.com/${answers.github}/${answers.repo})

<br>

Copyright © ${year} [${answers.name.trim().toUpperCase()}](https://github.com/${answers.github.trim().toLowerCase()})
  

  `
};

module.exports = generateMarkdown;