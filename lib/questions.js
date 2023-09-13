const colorKeyWords = require('./colorKeywords.js')

const questions = [
    {
        name: 'shape',
        message: 'What is the shape of your logo?',
        type: 'list',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        name: 'shapeColorChoice',
        message: 'What is the color of the shape? Choose a color format:',
        type: 'list',
        choices: ['color keyword', 'hexadecimal'], 
    },
]