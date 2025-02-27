document.addEventListener("DOMContentLoaded", () => {
    console.log("Keyboard highlight script loaded!"); // Debugging

    // Testing key validation
     const typingArea = document.querySelector(".lesson-display");
    let lessonText = "hello world";
    console.log("Lesson Text: ", lessonText);
    let typedCharacters = [];
    let currentIndex = 0;
    typingArea.innerText = lessonText;
    let startTime = null;
    let mistakes = 0;

    document.addEventListener("keydown", (event) => {
        console.log("Key pressed:", event.code); // Debugging


        const keyElement = document.querySelector(`[data-key="${event.code}"]`);
        if (keyElement) {
            // console.log("Key found:", keyElement); // Debugging
            const rect = keyElement.querySelector("rect");

            // console.log("Before change, rect fill:", rect.getAttribute("fill")); // Log before change
            rect.setAttribute("stroke", "red"); // Highlight key
            rect.setAttribute("stroke-width", "3");
            if(keyElement == lessonText[currentIndex]){
                typedCharacters.push(typedChar);
                currentIndex++
                 typingArea.innerHTML = 
                `<span class="correct">${typedCharacters.join("")}</span>` + 
                `<span>${lessonText.slice(currentIndex)}</span>`;
            } else {
                 mistakes++;
            typingArea.innerHTML = 
                `<span class="correct">${typedCharacters.join("")}</span>` + 
                `<span class="incorrect">${lessonText[currentIndex]}</span>` + 
                `<span>${lessonText.slice(currentIndex + 1)}</span>`;
            }
             // If lesson is complete, display message and log results
        if (currentIndex === lessonText.length) {
            setTimeout(() => {
                typingArea.innerText = "Typing Complete!";
                console.log("Stored Typed Characters:", typedCharacters);
            }, 500);
        }
            // console.log("After change, rect fill:", rect.getAttribute("fill")); // Log after change
        } else {
            console.warn("No key found for:", event.code);
        }
    });

    document.addEventListener("keyup", (event) => {
        // console.log("Key released:", event.code); // Debugging

        const keyElement = document.querySelector(`[data-key="${event.code}"]`);
        if (keyElement) {
            const rect = keyElement.querySelector("rect");

            // console.log("Before reset, rect fill:", rect.getAttribute("fill")); // Log before reset
            rect.setAttribute("stroke", "white"); // Unhighlight key
            // console.log("After reset, rect fill:", rect.getAttribute("fill")); // Log after reset
        }
    });
});

