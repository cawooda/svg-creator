const Shape = require('../lib/Shape');
const Text = require('./Text');

class Logo {
    constructor ({title,textColor,shape,color}) {
        
        this.text = new Text(title);
        this.text.setColor(textColor);
        console.log("constructor creates text ", this.text.render());        

        this.shape = new Shape(color,shape);
        this.shape.setColor(color);
        console.log("constructor creates shapes ", this.shape.render());
    }

    render (){
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">${this.shape.render()} ${this.text.render()}</svg>`;
    }
    
}

module.exports = Logo;