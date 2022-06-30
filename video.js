var vid = document.getElementById("one-ring-video");
var overlay = document.getElementById("ring-background-overlay");

vid.oncanplaythrough = function() {
    
    vid.play();
    setTimeout(fadeOutOverlay, 2000);
};


function fadeOutOverlay() {
    overlay.classList.add("fade-out");
}