
let newX = 0; newY = 0, startX = 0, startY = 0;
let isDragging = false;

//const keyboard = document.getElementById('keyboard');
const keyboard = document.querySelector('.keyboard');
// console.log(keyboard);

keyboard.addEventListener('mousedown', mouseDown);

function mouseDown(e){
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);

    keyboard.style.cursor = "grabbing";
}

function mouseMove(e){
    if(!isDragging) return;
    newX = startX - e.clientX;
    newY = startY - e.clientY;

    startX = e.clientX;
    startY = e.clientY;

    keyboard.style.top = (keyboard.offsetTop - newY) + 'px';
    keyboard.style.left = (keyboard.offsetLeft - newX) + 'px';

    // console.log({newX, newY});
    // console.log({startX, startY});

}

function mouseUp(e){
    isDragging = false;
    keyboard.style.cursor = "grab";
    document.removeEventListener('movemouse', mouseMove);
}
