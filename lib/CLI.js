const inquirer = require('../node_modules/inquirer');
const renderLogo = require('./renderer');
var validateColor = require("validate-color").default;

const questions = [ 
    ["input", "Please enter 3 characters:", "title"],
    ["input", "Please enter text color", "textColor", ,"validateColor"],
    ["list", "Please chose a shape", "shape", ["Circle","Square","Triangle"]],
    ["input", "Please chose a color for your shape", "color", ,"validateColor"],    
]

const questionList = questions.map((question)=>{
    

    if (question[4]) {
        return {
            type:question[0],
            message: question[1],
            name: question[2],
            choices: question[3] ? question[3] : [],
            validate: function (color) {
    
                valid = validateColor(color)
    
                if (valid) {
                  console.log("Great job");
                    return true;
                } else {
                    console.log(".  Please enter a valid color")
                    return false;
                }
            }
        }
    } else {
        return {
            type:question[0],
            message: question[1],
            name: question[2],
            choices: question[3] ? question[3] : [],
        }
    }
    
});

class CLI {
    constructor() {
        return this.run();
    }
    async run() {
      return inquirer
        .prompt(questionList)
        .then((answers) => {
            if (!validateColor(answers.color) || !validateColor(answers.textColor)) {
                return {result: false, reason: "colors not valid sorry"};
            }
            const renderedLogo = renderLogo(answers)
            return {result: true, renderedLogo: renderedLogo};    
        });
        
    }
    
  }


  module.exports = CLI;

