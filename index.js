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

function createHtml(userInput){
       return `<!doctype html>
        <html lang="en">
        <head>
            <!-- Required meta tags -->
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

            <!-- Bootstrap CSS -->
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

            <title>Hello, world!</title>
        </head>

        <body>
        <div class="jumbotron">
        <h1 class="display-4">Title: ${userInput.title}</h1>
        <h1 class="display-4">Description: ${userInput.description}</h1>
        <h1 class="display-4">Table of Contents: ${userInput.tableOfContents}</h1>
        <h1 class="display-4">Installation: ${userInput.installation}</h1>
        <h1 class="display-4">Usage: ${userInput.usage}</h1>
        <h1 class="display-4">License: ${userInput.license}</h1>
        <h1 class="display-4">Contributing: ${userInput.contributing}</h1>
        <h1 class="display-4">Tests: ${userInput.tests}</h1>
        <h1 class="display-4">Questions: ${userInput.questions}</h1>
                <p>Github: ${userInput.github}</p>
                <p>Email me with any questions: ${userInput.email}</p>
            <!-- Optional JavaScript -->
            <!-- jQuery first, then Popper.js, then Bootstrap JS -->
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
        </body>
        </html>`
        }
