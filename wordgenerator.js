console.log("Word generator script loaded");

// Common English syllables
const syllables = [
    "com", "pro", "gram", "mer", "dev", "soft", "ware", "log", "ics", "tech",
    "sys", "tem", "func", "tion", "loop", "data", "mod", "ule", "class", "script"
];

// Common coding symbols
const codeSymbols = ["{", "}", "(", ")", "[", "]", ";", "=", "+", "-", "_", "."];

// Special typing symbols
const SPACE_SYMBOL = "○";  // Represents Space
const TAB_SYMBOL = "⇥";    // Represents Tab
const ENTER_SYMBOL = "↵";  // Represents Enter

// Generate a single word mixed with programming symbols
function generateWord(length = 3) {
    let word = "";
    for (let i = 0; i < length; i++) {
        word += syllables[Math.floor(Math.random() * syllables.length)];
        
        // Occasionally add a programming symbol (20% chance)
        if (Math.random() < 0.2) {
            word += codeSymbols[Math.floor(Math.random() * codeSymbols.length)];
        }
    }
    return word;
}

// Generate a lesson with special separators
function generateLesson(wordCount = 5) {
    let lesson = [];
    
    for (let i = 0; i < wordCount; i++) {
        lesson.push(generateWord());

        // Insert Space, Tab, or Enter symbols randomly
        const randomSeparator = Math.random();
        if (randomSeparator < 0.5) {
            lesson.push(SPACE_SYMBOL); // 50% chance for Space
        } else if (randomSeparator < 0.75) {
            lesson.push(TAB_SYMBOL); // 25% chance for Tab
        } else {
            lesson.push(ENTER_SYMBOL); // 25% chance for Enter
        }
    }

    console.log(lesson.join(" "));
    return lesson.join(" ");
}

generateLesson();
