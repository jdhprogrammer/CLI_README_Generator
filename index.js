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
            message: 'Enter the additional project link(s) using the entire link, including the http(s):. (Use * comma "," to separate each link)',
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
            message: 'Enter the image paths or urls of screenshots or demo. (Use * comma "," to separate each path or url)',
            when: function(answers) {
                return answers.askImgs;
            },
        },
        {
            type: 'input',
            name: 'objective',
            message: 'Give a brief Description of your Project.',
        },
        // {
        //     type: 'input',
        //     name: 'linkedin',
        //     message: 'Enter your LinkedIn URL.',
        // },
        // {
        //     type: 'input',
        //     name: 'linkedin',
        //     message: 'Enter your LinkedIn URL.',
        // },
        // {
        //     type: 'input',
        //     name: 'linkedin',
        //     message: 'Enter your LinkedIn URL.',
        // },
        // {
        //     type: 'input',
        //     name: 'linkedin',
        //     message: 'Enter your LinkedIn URL.',
        // },
        // {
        //     type: 'input',
        //     name: 'linkedin',
        //     message: 'Enter your LinkedIn URL.',
        // },
        // {
        //     type: 'input',
        //     name: 'linkedin',
        //     message: 'Enter your LinkedIn URL.',
        // },
        // {
        //     type: 'input',
        //     name: 'linkedin',
        //     message: 'Enter your LinkedIn URL.',
        // },
    ]);
};

const generateMarkdown = (read) =>
    `# ${read.title}
    #### Developer: ${read.name}

    Email: ${read.email}
    GitHub: https://github.com/${read.github}
    LinkedIn: ${read.linkedin}

    Project Repository: [https://github.com/${read.github}/${read.repo}](https://github.com/${read.github}/${read.repo})
    Video Walk-thru: [${read.askMoreLinks}](${read.askMoreLinks})
    
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

## About The Project

![Product Name Screen Shot](${read.screenshot}?raw=true "screenshot")

### Description

${read.description}

### Built With

* [Bootstrap](https://getbootstrap.com)
* [JQuery](https://jquery.com)
* [Laravel](https://laravel.com)


## Getting Started

### Prerequisites

Install Node.js on your Computer

    - Go to Node.js Website and download Node.
        [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
        
### Installation & Usage
<!-- Get a free API Key at [https://example.com](https://example.com) -->

1. Clone the Repo to your Local machine using 
    - git clone https://github.com/${read.github}/${read.repo}.git 

2. Open the Repo folder in your VSCODE Integrated Terminal.
3. run command...
    - node index.js
4. And the Prompt questions in the Command Line and You'll have a Good README.

<!-- USAGE EXAMPLES 
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_ -->


<!-- ROADMAP 
## Roadmap

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a list of proposed features (and known issues). -->

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. 
Any contributions you make are **greatly appreciated**.

1. Fork the Repo on GitHub @ [https://github.com/${read.github}/${read.repo}](https://github.com/${read.github}/${read.repo}) 
2. Create your Feature Branch ('git checkout -b feature/AmazingFeature')
3. Commit your Changes ('git commit -m "Add some AmazingFeature"')
4. Push to the Branch ('git push origin feature/AmazingFeature")
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the ${read.license}. See LICENSE for more information.

<!-- CONTACT -->
## Contact

<!--  Your Name - [@your_twitter](https://twitter.com/userName) - email@example.com -->
${read.name} - ${read.email}

<!-- [https://github.com/your_github/repo_name](https://github.com/userName/repo_name) -->
Project Link: [https://github.com/${read.github}/${read.repo}](https://github.com/${read.github}/${read.repo})
`;

// Bonus using async/await and try/catch
const init = async() => {
    console.log('Howdy!');
    try {
        const read = await promptUser();

        const readme = generateMarkdown(read);

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