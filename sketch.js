/**
Simple typewriter effect
Pippin Barr

This is a very simple (and not especially flexible) way to display text as if it's being written on a typewriter.
*/

// Here's what it will type (made it multi-line for fun)
let string = `© design by kilian`;
// Which character in the string are we up to on the typewriter
let currentCharacter = 0;

// Variable to hold the custom font
let customFont;

// Array of RGB color values
let colors = [
  [244, 24, 243], // Existing color
  [238, 108, 0],  // New color
  [0, 211, 18],   // New color
  [255, 246, 0]   // New color
];

// Variable to store the randomly selected background color
let bgColor;

/**
Gotta have a canvas
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  customFont = loadFont('data/OCRA.otf'); // Load your custom font
  textSize(30); // Increase font size
  textFont(customFont); // Set the custom font
  textAlign(CENTER, CENTER);

  // Randomly select a background color from the colors array
  bgColor = colors[int(random(colors.length))];
}

/**
Draws a sheet of paper and the current amount of the string that's being typed
*/
function draw() {
  background(bgColor[0], bgColor[1], bgColor[2]);

  // Work out the current string we're writing (the substring of the full string that the typewriter has written so far)
  let currentString = string.substring(0, currentCharacter);

  // Draw the current string on the page, centered horizontally and slightly above the vertical center
  text(currentString, windowWidth / 2, windowHeight / 2.1);

  // Increase the current character so that we get a longer and
  // longer substring above. Using fractional numbers allows us to
  // slow down the pace.
  currentCharacter += 0.06;
}

/**
Resize the canvas when the window is resized
*/
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
