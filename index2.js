#
$ { read.title }####
Developer: $ { read.name }
email: $ { read.email } - https: //github.com/${read.userName}

    Project Repository: [https: //github.com/${read.userName}/${read.repoName}](https://github.com/${read.userName}/${read.repoName})

        ###Screenshots

        ![Product Name Screen Shot]($ { read.screenshot1 } ? raw = true "screenshot") ![Product Name Screen Shot]($ { read.screenshot2 } ? raw = true "screenshot") ![Product Name Screen Shot]($ { read.screenshot3 } ? raw = true "screenshot") ![Product Name Screen Shot]($ { read.screenshot4 } ? raw = true "screenshot")
        `;


// 1. ${read.install1}
// 2. ${read.install2}
// 3. ${read.install3}
// 4. ${read.install4}
// 5. ${read.install5}

AS A developer, I WANT a README generator, SO THAT I can quickly create a professional README for a new Project.

Open Repo folder in VSCODE Integrated Terminal. Then Run command - node 
index.js. Last, simply answer the prompt questions with your information, links, etc. At the end it will create a README.md file for you
 in the folder, with all of your Answers populated throughout.