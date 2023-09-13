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
    {
        name: 'shapeColorChoice',
        message: 'What is the color of the shape? Choose a color format:',
        type: 'list',
        choices: ['color keyword', 'hexadecimal'],  
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape color keyword",
        when: (answers) => {
            if(answers.shapeColorChoice === 'color keyword') {
                return true;
            }
            return false;
        }
    },
    {
    validate: (answer) => {
        let answerLowercase = answer.toLowerCase();
        for (var i = 0, len = colorKeywords.length; i < len; ++i) {
            if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
            return true;
        }}
        return console.log("\n Please enter a valid color keyword")
    }
    },
]