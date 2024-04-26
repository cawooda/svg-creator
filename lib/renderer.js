
const Logo = require('../lib/Logo');

function renderLogo (answers) {
    console.log("answers to renderLogo",answers);
    logo = new Logo(answers);
    console.log(logo.render());
    return logo.render();
}


module.exports = renderLogo;