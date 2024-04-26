const {Circle,Triangle,Square} = require('./shapes');
const Text = require('./Text');

function getShape(shape,color) {
    //chooses which shape from a string naming the shape
    shape = shape.toLowerCase();
    switch (shape) {
        case "circle":
            return new Circle;
            break;
        case "square":
            return new Square;
            break;
        case "triangle":
            return new Triangle;
            break;
        default:
            console.log("No shape recieved by getShape");
            return "No Shape";
    }
}

class Logo {
    constructor ({title,textColor,shape,color}) {
        console.log("Logo params",title,textColor,shape,color);
        this.text = new Text(title);
        this.text.setColor(textColor);
        this.shape = getShape(shape);
        this.shape.setColor(color);
        
    }

    render (){
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">${this.shape.render()} ${this.text.render()}</svg>`;
    }
    
}

module.exports = Logo;