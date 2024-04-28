const CLI = require('./lib/CLI');
const storeSVG = require('./lib/storage');


async function main() {
    var userInput = false;
    while (!userInput.result) {
        userInput = await new CLI();  
        console.log("userInput.result", userInput.result, "with reason being: ",userInput.reason);
    }
    
    console.log("return object of CLI",userInput);
    
    if (storeSVG(userInput.renderedLogo)) {
        console.log("Generated logo.svg");
    } else console.log("file not stored");
    
}

main();
