class Shape {
    constructor(color="white") {
        this.setColor(color);
        this.setFontSize("40");
    }

    setColor(color) {
        this.color = color;
    }
    setFontSize (size) {
        this.preferredFontSize = size;
    }
    
    getColor(){
        return this.color;
    }
    getFontSize() {
        return this.preferredFontSize;
    }
    
    render () {
        return {
            shape:this.shape, 
            renderOutput: `<${this.shapeDescriptor} ${this.drawingDetails} fill="${this.color}"/>`
        }
    }

}




module.exports = Shape;