const playBtn = document.querySelector(".play-btn");
const heartBtn = document.querySelector(".heart i");

let isPlaying = false;

playBtn.addEventListener("click", () => {
    if (!isPlaying) {
        playBtn.classList.remove("fa-circle-play");
        playBtn.classList.add("fa-circle-pause");
        isPlaying = true;
    } else {
        playBtn.classList.remove("fa-circle-pause");
        playBtn.classList.add("fa-circle-play");
        isPlaying = false;
    }
});

heartBtn.addEventListener("click", () => {
    heartBtn.classList.toggle("liked");
});
