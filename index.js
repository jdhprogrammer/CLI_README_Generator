// const generateMarkdown = require('./utils/generateMarkdown')
// // array of questions for user
// const questions = [
// ];
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
            message: 'Enter the additional project link(s) using the entire link, including the http(s):. (Use comma "," to separate each link)',
            when: function(answers) {
                return answers.askMoreLinks;
            },
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

const generateMarkdown = (read) => {
    `## Table of Contents

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



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

There are many great README templates available on GitHub, however, I didn't find one that really suit my needs so I created this enhanced one. I want to create a README template so amazing that it'll be the last one you ever need.

Here's why:
* Your time should be focused on creating something amazing. A project that solves a problem and helps others
* You shouldn't be doing the same tasks over and over like creating a README from scratch
* You should element DRY principles to the rest of your life :smile:

Of course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue.

A list of commonly used resources that I find helpful are listed in the acknowledgements.

### Built With
This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
* [Bootstrap](https://getbootstrap.com)
* [JQuery](https://jquery.com)
* [Laravel](https://laravel.com)



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

<!-- ### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
sh
npm install npm @latest - g -->
        

### Installation
<!-- Get a free API Key at [https://example.com](https://example.com) -->
<!-- Clone the repo
`
    ` sh
git clone https://github.com/read.userName/read.repoName.git -->
<!-- Install NPM packages
`
    `sh
npm install -->
<!-- Enter your API in config.js
`
    `JS
const API_KEY = 'ENTER YOUR API'; -->

1. ${read.install1}
2. ${read.install2}
3. ${read.install3}
4. ${read.install4}
5. ${read.install5}





<!-- USAGE EXAMPLES 
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_ -->



<!-- ROADMAP 
## Roadmap

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a list of proposed features (and known issues). -->



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch ('git checkout -b feature/AmazingFeature')
3. Commit your Changes ('git commit -m "Add some AmazingFeature"')
4. Push to the Branch ('git push origin feature/AmazingFeature")
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the ${read.license}. See LICENSE for more information.


<!-- CONTACT -->
## Contact

<!--  Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com -->
${read.name} - [@${read.twitter}](https://twitter.com/${read.twitter}) - ${read.email}

<!-- [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name) -->
Project Link: [https://github.com/${read.userName}/${read.repoName}](https://github.com/${read.userName}/${read.repoName})
`
};

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