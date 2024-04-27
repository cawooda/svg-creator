class Shape {
    constructor(color,shape) {
        this.setColor(color.toLowerCase());
        this.setShape(shape.toLowerCase());
        console.log("color,shape in Shape constructor", color,shape);
    }
    setColor(color) {
        this.color = color;
    }
    setShape(shape) {
        switch (shape) {
            case "circle":
                this.shapeDescriptor = "circle";
                this.drawingDetails = `cx="50%" cy="50%" r="50%"`;
                break;
            case "square":
                this.shapeDescriptor = "rect";
                this.drawingDetails = `x="1" y="1" width="300" height="300"`;
                console.log("case square shape becomes: ",this.shape);
                break;
            case "triangle":
                this.shapeDescriptor = "polygon";
                this.drawingDetails = `points="50 5, 100 80, 0 80"`;
                break;
            default:
                break;
        }
        this.shape = shape;
        console.log("this.shape: ",this.shape);
    }


    render () {
        return {
            shape:this.shape, 
            renderText: `<${this.shapeDescriptor} ${this.drawingDetails} fill="${this.color}"/>`
        }
    }

}




module.exports = Shape;