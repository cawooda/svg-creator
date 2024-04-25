const inquirer = require('../node_modules/inquirer');
const renderer = require('./renderer');

const questions = [ 
    ["input", "Please enter 3 characters:", "threeCharacters"],
    ["input", "Please enter text color", "textColor"],
    ["list", "Please chose a shape", "chosenShape", ["Circle","Square","Triangle"]],
    ["input", "Please chose a color for your shape", "shapeColor"],
    ["input", "Please chose a color for your shape", "shapeColor"],    
]

const questionList = questions.map((question)=>{
    return {
        type:question[0],
        message: question[1],
        name: question[2],
        choices: question[3] ? question[3] : []
    }
});

class CLI {
    constructor() {
        this.run();
    }
    async run() {
      return inquirer
        .prompt(questionList)
        .then((answers) => {
            console.log(answers);
            console.log(renderer.renderSVG(answers));
            //return renderer.renderSVG(answers);
        });
        
    }
  
  }


  module.exports = CLI;