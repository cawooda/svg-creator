
const Logo = require('../lib/Logo');

function renderLogo (answers) {
    logo = new Logo(answers);
    return logo.render();
}


module.exports = renderLogo;