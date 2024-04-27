const fs = require('fs');

function storeSvg(data) {
    var result = true;    
    fs.writeFile('logo.svg',data,(err)=>{
        console.log(err)
        result = false;
    });
    return result

}

module.exports = storeSvg;