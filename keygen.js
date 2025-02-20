// Define key properties: symbol, shifted symbol, x, y positions
const keys = [
    // First row
    { key: '`', shift: '~', x: 0,   y: 0, width: 38, code: 'Backquote' },
    { key: '1', shift: '!', x: 40,  y: 0, width: 38, code: 'Digit1' },
    { key: '2', shift: '@', x: 80,  y: 0, width: 38, code: 'Digit2' },
    { key: '3', shift: '#', x: 120, y: 0, width: 38, code: 'Digit3' },
    { key: '4', shift: '$', x: 160, y: 0, width: 38, code: 'Digit4' },
    { key: '5', shift: '%', x: 200, y: 0, width: 38, code: 'Digit5' },
    { key: '6', shift: '^', x: 240, y: 0, width: 38, code: 'Digit6' },
    { key: '7', shift: '&', x: 280, y: 0, width: 38, code: 'Digit7' },
    { key: '8', shift: '*', x: 320, y: 0, width: 38, code: 'Digit8' },
    { key: '9', shift: '(', x: 360, y: 0, width: 38, code: 'Digit9' },
    { key: '0', shift: ')', x: 400, y: 0, width: 38, code: 'Digit0' },
    { key: '-', shift: '_', x: 440, y: 0, width: 38, code: 'Minus'  },
    { key: '=', shift: '+', x: 480, y: 0, width: 38, code: 'Equal'   },
    { key: 'Backspace', shift: '', x: 520, y: 0, width: 78, code: 'Backspace', textAlign: 'start' }


];


const keyboardContainer = document.querySelector('.key-container'); // Correct inner <svg>

keys.forEach(({ key, shift, x, y, width, code, textAlign = 'middle' }) => {
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("class", `${code}-box`);
svg.setAttribute("x", x);
svg.setAttribute("y", y);
svg.setAttribute("width", width);
svg.setAttribute("height", "38");
svg.setAttribute("data-key", code);

const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
rect.setAttribute("class", `${code}_key key`);
rect.setAttribute("x", "0");
rect.setAttribute("y", "0");
rect.setAttribute("width", width);
rect.setAttribute("height", "38");
rect.setAttribute("fill", "white"); 
rect.setAttribute("stroke", "black");
rect.setAttribute("stroke-width", "1");

const isSpecialKey = (code == 'Backspace' || code == "Tab");
const textX = isSpecialKey ? 10: width/2;
const textAnchor = isSpecialKey ? "start" : "middle";

// Lower (non-shifted) text
const textLower = document.createElementNS("http://www.w3.org/2000/svg", "text");
textLower.setAttribute("class", `${code}_text key_text`);
//text.setAttribute("x", textAlign === "start" ? "10" : width / 2);
textLower.setAttribute("x", textX);
textLower.setAttribute("y", "28");
textLower.setAttribute("text-anchor", textAnchor);
// text.setAttribute("text-anchor", "middle")
textLower.setAttribute("dominant-baseline", "middle");
textLower.setAttribute("font-size", "14");
textLower.setAttribute("fill", "black");
textLower.setAttribute("direction", "ltr");
textLower.textContent = key;

svg.appendChild(rect);
svg.appendChild(textLower);

// Upper (shifted) text
if (shift) {
    const textUpper = document.createElementNS("http://www.w3.org/2000/svg", "text");
    textUpper.setAttribute("class", `${code}_shift_text key_text`);
    textUpper.setAttribute("x", isSpecialKey ? 10: width/2);
    textUpper.setAttribute("y", "12"); // Shifted text higher
    textUpper.setAttribute("text-anchor", textAnchor);
    textUpper.setAttribute("dominant-baseline", "middle");
    textUpper.setAttribute("font-size", "10");
    textUpper.setAttribute("fill", "black");
    textLower.setAttribute("direction", "ltr");
    textUpper.textContent = shift;
    svg.appendChild(textUpper);
}

keyboardContainer.appendChild(svg);
});