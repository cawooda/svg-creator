class Text {
    constructor (title) {
        this.title = title.toUpperCase().slice(0,3);
    }

    setColor(color) {
        this.color = color;
    }
    setFontSize(size) {
        this.setFontSize = size;
    }

    getFontSize() {
        return this.setFontSize;
    }

    render () {
        return `<text x="50%" y="60%" fill="${this.color}" font-weight="bold" font-size="${this.getFontSize()}" font-family="helvetica" text-anchor="middle">${this.title}</text>`
    }

}




module.exports = Text;


