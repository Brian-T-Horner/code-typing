// console.log("Keyboard detection script loaded");



// function highlightKey(event) {
//     console.log("Key pressed:", event.code);
//     const keyElement = document.querySelector('[data-key="$event.code}"]');
//     if (keyElement){
//         console.log("Key found:", keyElement);
//         const rect = keyElement.querySelector("rect");
//         //rect.setAttribute("fill", "#FFD700");
//         rect.setAttribute("fill", "yellow");
//     }
// }

// function resetKey(event) {
//     const keyElement = document.querySelector('[data-key="$event.code}"]');
//     if (keyElement){
//         const rect = keyElement.querySelector("rect");
//         rect.setAttribute("fill", "white");
//     }
// }

// document.addEventListener("keydown", highlightKey);
// document.addEventListener("keyup", resetKey);


// document.addEventListener("DOMContentLoaded", () => {
//     console.log("Keyboard highlight script loaded!"); // Debugging

//     document.addEventListener("keydown", (event) => {
//         console.log("Key pressed:", event.code); // Debugging

//         const keyElement = document.querySelector(`[data-key="${event.code}"]`);
//         if (keyElement) {
//             console.log("Key found:", keyElement); // Debugging
//             const rect = keyElement.querySelector("rect");
//             rect.setAttribute("fill", "#FFD700"); // Highlight key
//         } else {
//             console.warn("No key found for:", event.code);
//         }
//     });

//     document.addEventListener("keyup", (event) => {
//         console.log("Key released:", event.code); // Debugging

//         const keyElement = document.querySelector(`[data-key="${event.code}"]`);
//         if (keyElement) {
//             const rect = keyElement.querySelector("rect");
//             rect.setAttribute("fill", "white"); // Unhighlight key
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    console.log("Keyboard highlight script loaded!"); // Debugging

    document.addEventListener("keydown", (event) => {
        console.log("Key pressed:", event.code); // Debugging

        const keyElement = document.querySelector(`[data-key="${event.code}"]`);
        if (keyElement) {
            console.log("Key found:", keyElement); // Debugging
            const rect = keyElement.querySelector("rect");

            console.log("Before change, rect fill:", rect.getAttribute("fill")); // Log before change
            rect.setAttribute("stroke", "red"); // Highlight key
            rect.setAttribute("stroke-width", "3");
            console.log("After change, rect fill:", rect.getAttribute("fill")); // Log after change
        } else {
            console.warn("No key found for:", event.code);
        }
    });

    document.addEventListener("keyup", (event) => {
        console.log("Key released:", event.code); // Debugging

        const keyElement = document.querySelector(`[data-key="${event.code}"]`);
        if (keyElement) {
            const rect = keyElement.querySelector("rect");

            console.log("Before reset, rect fill:", rect.getAttribute("fill")); // Log before reset
            rect.setAttribute("stroke", "white"); // Unhighlight key
            console.log("After reset, rect fill:", rect.getAttribute("fill")); // Log after reset
        }
    });
});

