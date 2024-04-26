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
                this.shape = "circle";
                this.drawingDetails = `cx="50%" cy="50%" r="100px"`;
                break;
            case "square":
                this.shape = "rect";
                this.drawingDetails = `x="1" y="1" width="300" height="300"`;
                break;
            case "triangle":
                this.shape = "polygon";
                this.drawingDetails = `cx="10" cy="10" r="20"`;
                break;
            default:
                break;
        }
        this.shape = shape;
        console.log("this.shape: ",this.shape);
    }


    render () {
        return `<${this.shape} ${this.drawingDetails} fill="${this.color}"/>`
    }

}




module.exports = Shape;