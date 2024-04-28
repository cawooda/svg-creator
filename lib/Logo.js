const {Circle , Square, Triangle} = require('../lib/shapes');
const Text = require('./Text');

class Logo {
    constructor ({title,textColor,shape,color}) {
        
        this.text = new Text(title);
        this.text.setColor(textColor);
        console.log("shape to lowercase", shape.toLowerCase());
        switch (shape.toLowerCase()) {
            case "circle":
                this.shape = new Circle;
                break;
            case "square":
                this.shape = new Square;
                break;
            case "triangle":
                this.shape = new Triangle;
                break;
            default:
                break;
        }
        console.log(this.shape);
        this.shape.setColor(color);
        this.text.setFontSize(this.shape.getFontSize());
    }

    render (){
        return `<svg version="1.1"
        width="300" height="300"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100">
            ${this.shape.render().renderOutput} 
            ${this.text.render()}
        </svg>`;
    }
    
}

module.exports = Logo;