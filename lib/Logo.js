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
    constructor ({color,shape,text,textColor}) {
        this.shape = getShape(shape);
        this.shape.setColor(color);
        this.text = new Text(text);
        this.text.setColor(textColor);
    }

    render (){
        return `<svg>${this.shape.render()} ${this.text.render()}</svg>`;
    }
    
}

module.exports = Logo;