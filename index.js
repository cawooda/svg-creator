const CLI = require('./lib/CLI');
const storeSVG = require('./lib/storage');

async function main() {
    renderedLogo = await new CLI();
    if (renderedLogo) storeSVG(renderedLogo);
    
}

main();
