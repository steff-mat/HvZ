addEventListener("keydown", function (e) {
    if (e.code == "KeyW" || e.code == "ArrowUp") {
        velocityUpY = -speed;
    }
    if (e.code == "KeyS" || e.code == "ArrowDown") {
        velocityDownY = speed;
    }
    if (e.code == "KeyA" || e.code == "ArrowLeft") {
        velocityLeftX = -speed;
    }
    if (e.code == "KeyD" || e.code == "ArrowRight") {
        velocityRightX = speed;
    }
})

addEventListener("keyup", function (e) {
    if (e.code == "KeyW" || e.code == "ArrowUp") {
        velocityUpY = 0;
    }
    if (e.code == "KeyS" || e.code == "ArrowDown") {
        velocityDownY = 0;
    }
    if (e.code == "KeyA" || e.code == "ArrowLeft") {
        velocityLeftX = 0;
    }
    if (e.code == "KeyD" || e.code == "ArrowRight") {
        velocityRightX = 0;
    }
})