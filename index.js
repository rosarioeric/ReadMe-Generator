var inquirer = require("inquirer")
var fs = require("fs")

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project."
    },
    {
        type: "input",
        name: "tableOfContents",
        message: "What will be in your table of contents?",
    },
    { 
        type: "input",
        name: "installation",
        message: "Any installations?"
    },
    {
        type: "input",
        name: "license",
        message: "What are the licenses needed?"
    },
    {
        type: "input",
        name: "contributing",
        message: "Who are the contributors?"
    },
    {
        type: "input",
        name: "tests",
        message: "What tests are needed?"
    },
    {
        type: "input",
        name: "questions",
        message: "What questions need answered?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your Github url?"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email so users can contact you with questions?"
    }

]).then(function (answers){
    console.log(answers);
    console.log(createHtml(answers));
    const myHtmlTemp = createHtml(answers);
    fs.writeFile("readMe.md", myHtmlTemp, function(err){
        if (err){
            console.log(err);
        }
    })
})
//style this area with node commands
function createHtml(userInput){
        
return`#Title: ${userInput.title}
       License: ${userInput.license}
       Description: ${userInput.description}
       
       #Table of Contents: ${userInput.tableOfContents}
        -Installation: ${userInput.installation}
        -Usage: ${userInput.usage}
        -Contributing: ${userInput.contributing}
        -Tests: ${userInput.tests}
       
        #Questions: ${userInput.questions}
        -Github: ${userInput.github}
        -Email: ${userInput.email}`
}