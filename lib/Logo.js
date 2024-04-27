const Shape = require('../lib/Shape');
const Text = require('./Text');

class Logo {
    constructor ({title,textColor,shape,color}) {
        
        this.text = new Text(title);
        this.text.setColor(textColor);
               

        this.shape = new Shape(color,shape);
        this.shape.setColor(color);
        
    }

    render (){
        return `<svg version="1.1"
        width="300" height="300"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100">
            ${this.shape.render().renderText} 
            ${
                (this.shape.render().shape == "triangle") ? this.text.setFontSize("20") : "" 
            }
            ${this.text.render()}
        </svg>`;
    }
    
}

module.exports = Logo;