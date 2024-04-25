class Shape {
    setColor(color) {
        this.color = color;
    }

    render () {
        return `<polygon points="${this.points}" fill="${this.color}" />`
    }

}




module.exports = Shape;