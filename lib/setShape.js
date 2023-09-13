const Circle = require(`./Circle.js`);
const Square = require(`./Square.js`);
const Triangle = require(`./Triangle.js`);

function setShape (response){

    if(response.Shape === 'Circle') {
        let userShape = new Circle (response.shapeColor, response.text, response.textColor);
        return userShape.render()
    }

    if(response.Shape === 'Square') {
        let userShape = new Square (response.shapeColor, response.text, response.textColor);
        return userShape.render()
    }

    if(response.Shape === 'Triangle') {
        let userShape = new Triangle (response.shapeColor, response.text, response.textColor);
        return userShape.render()
    }
}