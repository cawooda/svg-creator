const fs = require('fs');

function storeSvg(data) {
    
    fs.writeFile('logo.svg',data,(err)=>console.log(err));
}

module.exports = storeSvg;