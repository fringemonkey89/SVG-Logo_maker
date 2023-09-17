# SVG-Logo_maker

## Description
- Generate an SVG logo with a shape of your choice (circle, square, or triangle), shape color, text (limit of 3 characters), and text color
-  Shape and text colors can be chosen using either the color keywords or hexadecimal numbers.
-  
## Installation
- First, check if you have Node.js installed by typing "node -v" in your command line
- If node is not installed, visit the Node.js website to install it
- Next, clone this project repository to your local machine
- Use the command "npm install" to install the dependecies
- Use the command "npm install --save-dev jest"

## Usage
- Change directories to your new project folder in the terminal
- Type "node index.js" or "npm start" in the terminal's command line to invoke the application
- You will be asked a series of questions before your logo is created
-  If you enter an invalid color keyword or hexadecimal number, you will be prompted to try again
-  If your text has more than 3 characters, you will be prompted to try again
-  Once all the questions have been answered with accepted values, your new logo will be created with the file name 'logo.svg' in the 'examples' folder
-  Refer to the video posted in the description when needed.

## License
MIT License

## Tests
- Each shape class is tested for a render() method that returns a string for the SVG file matching color and text requests
- Type "npm test" in the command line and Jest will run all three of the tests.
## Links
