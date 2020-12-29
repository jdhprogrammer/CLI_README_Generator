const {
    prompt
} = require('inquirer');
const {
    writeFile
} = require('fs');
const {
    promisify
} = require('util');

const questions = require('./utils/Questions.js')
const generateMarkdown = require('./utils/generateMd')

const writeFileAsync = promisify(writeFile);


const promptUser = () => {
    return prompt(questions);
};

const init = async() => {
    console.log('Welcome to the README Generator App!');
    try {

        let answers = {};
        answers = await promptUser();

        console.log(JSON.stringify(answers, null, '\t'));

        const readme = generateMarkdown(answers);

        await writeFileAsync('README1.md', readme);

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