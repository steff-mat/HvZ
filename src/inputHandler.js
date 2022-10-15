

addEventListener("keydown", function (e) {
    if (e.code == "KeyW") {
        velocityY = -speed;
    }
    if (e.code == "KeyS") {
        velocityY = speed;
    }
    if (e.code == "KeyA") {
        velocityX = -speed;
    }
    if (e.code == "KeyD") {
        velocityX = speed;
    }
})

addEventListener("keyup", function (e) {
    if (e.code == "KeyW") {
        velocityY = 0;
    }
    if (e.code == "KeyS") {
        velocityY = 0;
    }
    if (e.code == "KeyA") {
        velocityX = 0;
    }
    if (e.code == "KeyD") {
        velocityX = 0;
    }
})