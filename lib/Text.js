class Text {
    constructor (text) {
        this.text = text.toUpperCase();
    }

    setColor(color) {
        this.color = color;
    }

    render () {
        return `<text x="50%" y="60%" fill="${this.color}" font-weight="bold" font-size="70" font-family="helvetica" text-anchor="middle">${this.text}</text>`
    }

}




module.exports = Text;


