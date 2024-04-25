
const Logo = require('../lib/Logo');

function renderLogo (answers) {
    logo = new Logo(answers);
    console.log(logo.render());
    
}


module.exports = renderLogo;