// parent class that will extend to the children classes: Circle, Square, Triangle
class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
};

module.exports = Shape;
