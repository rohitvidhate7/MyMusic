 const songs = [ 

  {
    title: "Pal Pal ",
    src: "./song/song2.mp3",
  }, 
  { 
    title: "Bulleya",   
    src: "./song/song1.mp3", 
  },    
  { 
    title: "Roots",   
    src: "./song/song3.mp3",    
  }
];  
     
let index = 0;
 
const audio = document.getElementById("audio");
const songTitle = document.getElementById("songTitle");
const cover = document.getElementById("cover");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

function loadSong(i) {
  audio.src = songs[i].src;
  songTitle.textContent = songs[i].title;
  imgg.src = songs[i].imgg;
}

function playSong() {
  audio.play();
  playBtn.textContent = "⏸️";
}

function pauseSong() {
  audio.pause();
  playBtn.textContent = "▶️";
}

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  } 
});

nextBtn.addEventListener("click", () => {
  index = (index + 1) % songs.length;
  loadSong(index);
  playSong();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + songs.length) % songs.length;
  loadSong(index);
  playSong();
});

audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value * audio.duration) / 100;
});

loadSong(index);
