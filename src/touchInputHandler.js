let touchUp = document.getElementById("toUp");
let touchDown = document.getElementById("toDown");
let touchLeft = document.getElementById("toLeft");
let touchRight = document.getElementById("toRight");

touchUp.addEventListener("touchstart", function (e) {
    velocityUpY = -speed;
})
touchDown.addEventListener("touchstart", function (e) {
    velocityDownY = speed;
})
touchLeft.addEventListener("touchstart", function (e) {
    velocityLeftX = -speed;
})
touchRight.addEventListener("touchstart", function (e) {
    velocityRightX = speed;
})

touchUp.addEventListener("touchend", function (e) {
    velocityUpY = 0;
})
touchDown.addEventListener("touchend", function (e) {
    velocityDownY = 0;
})
touchLeft.addEventListener("touchend", function (e) {
    velocityLeftX = 0;
})
touchRight.addEventListener("touchend", function (e) {
    velocityRightX = 0;
})