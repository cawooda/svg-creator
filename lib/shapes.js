const Shape = require('../lib/Shape');

class Circle extends Shape {
    constructor(){
        super();
        this.setShape()
    }
    setShape() {
        this.shapeDescriptor = "circle";
        this.drawingDetails = `cx="50%" cy="50%" r="50%"`;
        this.shape = 'circle';
        this.setFontSize("30");
    }

}

class Square extends Shape {
    constructor(){
        super();
        this.setShape()
    }
    setShape() {
        this.shapeDescriptor = "rect";
        this.drawingDetails = `x="1" y="1" width="300" height="300"`;
        this.shape = 'square';
        this.setFontSize("30");
    }

}

class Triangle extends Shape {
    constructor(){
        super();
        this.setShape()
    }
    setShape() {
        this.shapeDescriptor = "polygon";
        this.drawingDetails = `points="50 5, 100 80, 0 80"`;
        this.shape = 'triangle';
        this.setFontSize("20");
    }

}

module.exports = {Circle,Square,Triangle};


