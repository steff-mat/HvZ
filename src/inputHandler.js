addEventListener("keydown", function (e) {
    if (e.code == "KeyW") {
        velocityUpY = -speed;
    }
    if (e.code == "KeyS") {
        velocityDownY = speed;
    }
    if (e.code == "KeyA") {
        velocityLeftX = -speed;
    }
    if (e.code == "KeyD") {
        velocityRightX = speed;
    }
})

addEventListener("keyup", function (e) {
    if (e.code == "KeyW") {
        velocityUpY = 0;
    }
    if (e.code == "KeyS") {
        velocityDownY = 0;
    }
    if (e.code == "KeyA") {
        velocityLeftX = 0;
    }
    if (e.code == "KeyD") {
        velocityRightX = 0;
    }
})