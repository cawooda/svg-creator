const {Circle,Triangle,Square} = require('./shapes');

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

function renderSVG (answers) {
    const shape = getShape(answers.chosenShape);
    shape.setColor(answers.shapeColor);
    console.log("shape is:", shape);
    return shape.render();
    
}

module.exports = {renderSVG}