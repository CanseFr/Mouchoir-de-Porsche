let listSection = [
    // document.querySelector(".video-home"),
    document.querySelector(".home"),
    document.querySelector(".shop"),
    document.querySelector(".blog"),
    document.querySelector(".contact")
]

let listButton = [
    // document.querySelector("#video-home"),
    document.querySelector("#Home"),
    document.querySelector("#Shop"),
    document.querySelector("#Blog"),
    document.querySelector("#Contact")
]

for (let i in listSection){
    listButton[i].addEventListener("click", () => {
        listSection.forEach( section => section.classList.add("hidden"))
        listSection[i].classList.remove("hidden")
    })
}

// // VIDEO HOME
//
// let frameNumber = 0, // start video at frame 0
//     // lower numbers = faster playback
//     playbackConst = 500,
//     // get page height from video duration
//     setHeight = document.getElementById("set-height"),
//     // select video element
//     vid = document.getElementById('v0');
//
// // dynamically set the page height according to video length
// vid.addEventListener('loadedmetadata', function() {
//     setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
// });
//
// // Use requestAnimationFrame for smooth playback
// function scrollPlay(){
//     let frameNumber  = window.pageYOffset/playbackConst;
//     vid.currentTime  = frameNumber;
//     window.requestAnimationFrame(scrollPlay);
// }
//
// window.requestAnimationFrame(scrollPlay);
//
//

// Get the video

// Get the button
let btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
    document.querySelector(".video-home").classList.add("hidden")
    document.querySelector(".home").classList.remove("hidden")
}