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
    { key: 'Backspace', shift: '', x: 520, y: 0, width: 78, code: 'Backspace', textAlign: 'start' },
    // Second Row
    { key: 'Tab', shift: '', x: 0, y: 40, width: 58, code: 'Tab', textAlign: 'start'},
    { key: 'Q', shift: '', x: 60, y: 40, width: 38, code: 'KeyQ'   },
    { key: 'W', shift: '', x: 100, y: 40, width: 38, code: 'KeyW'   },
    { key: 'E', shift: '', x: 140, y: 40, width: 38, code: 'KeyE'   },
    { key: 'R', shift: '', x: 180, y: 40, width: 38, code: 'KeyR'   },
    { key: 'T', shift: '', x: 220, y: 40, width: 38, code: 'KeyT'   },
    { key: 'Y', shift: '', x: 260, y: 40, width: 38, code: 'KeyY'   },
    { key: 'U', shift: '', x: 300, y: 40, width: 38, code: 'KeyU'   },
    { key: 'I', shift: '', x: 340, y: 40, width: 38, code: 'KeyI'   },
    { key: 'O', shift: '', x: 380, y: 40, width: 38, code: 'KeyO'   },
    { key: 'P', shift: '', x: 420, y: 40, width: 38, code: 'KeyP'   },
    { key: '[', shift: '{', x: 460, y: 40, width: 38, code: 'BracketLeft'   },
    { key: ']', shift: '}', x: 500, y: 40, width: 38, code: 'BracketRight'   },
    { key: '\\', shift: '|', x: 540, y: 40, width: 58, code: 'Backslash'},
    // Third Row
    { key: 'Caps Lock', shift: '', x: 0, y: 80, width: 68, code: 'CapsLock', textAlign: 'start'},
    { key: 'A', shift: '', x: 70, y: 80, width: 38, code: 'KeyA'   },
    { key: 'S', shift: '', x: 110, y: 80, width: 38, code: 'KeyS'   },
    { key: 'D', shift: '', x: 150, y: 80, width: 38, code: 'KeyD'   },
    { key: 'F', shift: '', x: 190, y: 80, width: 38, code: 'KeyF'   },
    { key: 'G', shift: '', x: 230, y: 80, width: 38, code: 'KeyG'   },
    { key: 'H', shift: '', x: 270, y: 80, width: 38, code: 'KeyH'   },
    { key: 'J', shift: '', x: 310, y: 80, width: 38, code: 'KeyJ'   },
    { key: 'K', shift: '', x: 350, y: 80, width: 38, code: 'KeyK'   },
    { key: 'L', shift: '', x: 390, y: 80, width: 38, code: 'KeyL'   },
    { key: ';', shift: ':', x: 430, y: 80, width: 38, code: 'Semicolon'   },
    { key: '\'', shift: '"', x: 470, y: 80, width: 38, code: 'Qoute'   },
    { key: 'Enter', shift: '', x: 510, y: 80, width: 88, code: 'Enter', textAlign: 'start'},
    // Fourth Row
    { key: 'Shift', shift: '', x: 0, y: 120, width: 88, code: 'ShiftLeft', textAlign: 'start'},
    { key: 'Z', shift: '', x: 90, y: 120, width: 38, code: 'KeyZ'   },
    { key: 'X', shift: '', x: 130, y: 120, width: 38, code: 'KeyX'   },
    { key: 'C', shift: '', x: 170, y: 120, width: 38, code: 'KeyC'   },
    { key: 'V', shift: '', x: 210, y: 120, width: 38, code: 'KeyV'   },
    { key: 'B', shift: '', x: 250, y: 120, width: 38, code: 'KeyB'   },
    { key: 'N', shift: '', x: 290, y: 120, width: 38, code: 'KeyN'   },
    { key: 'M', shift: '', x: 330, y: 120, width: 38, code: 'KeyM'   },
    { key: ',', shift: '<', x: 370, y: 120, width: 38, code: 'Comma'   },
    { key: '.', shift: '>', x: 410, y: 120, width: 38, code: 'Period'   },
    { key: '/', shift: '?', x: 450, y: 120, width: 38, code: 'Slash'   },
    { key: 'Shift', shift: '', x: 490, y: 120, width: 108, code: 'ShiftRight'   },
    // Fifth Row
    { key: 'Ctrl', shift: '', x: 0, y: 160, width: 58, code: 'ControlLeft', textAlign: 'start' },
    { key: 'Alt', shift: '', x: 60, y: 160, width: 58, code: 'AltLeft', textAlign: 'start' },
    { key: '', shift: '', x: 120, y: 160, width: 358, code: 'Space'   },
    { key: 'Alt', shift: '', x: 480, y: 160, width: 58, code: 'AltRight', textAlign: 'start'  },
    { key: 'Ctrl', shift: '', x: 540, y: 160, width: 58, code: 'ControlRight', textAlign: 'start'}


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