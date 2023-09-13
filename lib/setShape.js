const Circle = require(`./Circle.js`);
const Square = require(`./Square.js`);
const Triangle = require(`./Triangle.js`);

function setShape (response){

    if(response.Shape === 'Circle') {
        let userShape = new Circle (response.shapeColor, response.text, response.textColor);
        return userShape.render()
    }
}