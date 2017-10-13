var cards = require("./cards.json");
var inquirer = require("inquirer");
var ClozeCard = require("./ClozeCard.js");
var Basic = require("./Basic.js");
var fs = require("fs");

inquirer.prompt([{
    type: 'rawlist',
    name: 'action',
    message: 'Please select Card type?',
    choices: ["BASIC CARD", "CLOZE CARD"]
}
]).then(function (answers) {
    //name, message, choices[, default, filter 
    console.log(answers);
    if (answers.action === "BASIC CARD") {
        inquirer.prompt([{
            type: 'input',
            name: 'bques',
            message: 'Please enter basic question you want to ask.'},
            {
               type: 'input',
               name: 'bans',
               message: 'Please enter the answer of the question.'
           }
            ]).then(function (quesDetails) {
                console.log(quesDetails);
                var bq = new Basic(quesDetails.bques, quesDetails.bans);
                fs.readFile("cards.json", "utf8", function (error, data) {
                    var dataArr = data;
                    console.log(dataArr);

                    // If the code experiences any errors it will log the error to the console.
                    if (err) {
                        return console.log(err);
                    }
                });
            });
    }
    else {
        inquirer.prompt([{
            type: 'input',
            name: 'cques',
            message: 'Please enter cloze question you want to ask.'
        },
            {
                type: 'input',
                name: 'cans',
                message: 'Please enter the answer of the question.'
            }
        ]).then(function (clozeDetails) {
            var cq = new ClozeCard(clozeDetails.cques, clozeDetails.cans);
            cq.partial();
        });
    }
});
