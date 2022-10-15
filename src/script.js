const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let speed = 5;
let x = 50;
let y = 50;
let velocityX = 0;
let velocityY = 0;



function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    x += velocityX;
    y += velocityY;
    ctx.fillRect(x, y, 5, 5);
    requestAnimationFrame(update, 1000 / 60);
}

update();