console.log("Hello World");

let songIndex = 0;
let audioElement = new Audio("audio/Adfait.mp3");
let masterPlay = document.getElementById("masterPlay");
let gif = document.getElementById("gif");
let myProgressBar = document.getElementById("myProgressBar");
let masterSongName = document.getElementById("masterSongName");
// let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  { songName: "Adfaita", filePath: "audio/Adfait.mp3" },
  { songName: "Adfaita2", filePath: "audio/Adfait2.mp3" },
  {
    songName: "Dil Dard Se Afsurda",
    filePath: "audio/Dil Dard Se Afsurda.mp3",
  },
  {
    songName: "Forgive Me Allah-Astagfirullah",
    filePath: "audio/Forgive Me Allah-Astagfirullah.mp3",
  },
  { songName: "HAR WAQT TASAWAR", filePath: "audio/HAR WAQT TASAWAR.mp3" },
  { songName: "NOKHTA ROSTI NAWAS", filePath: "audio/NOKHTA ROSTI NAWAS.mp3" },
];

// songItems.forEach((element,i)=>{
//     element.getElementsByTagName("img")[0].src = songs[i].filePath;
// })

// audioElement.play();
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllplays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllplays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = songs[songIndex].filePath;
      masterSongName.innerHTML = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex > 4) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = songs[songIndex].filePath;
  audioElement.currentTime = 0;
  audioElement.play();
  masterSongName.innerHTML = songs[songIndex].songName;
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 5;
  } else {
    songIndex -= 1;
  }
  audioElement.src = songs[songIndex].filePath;
  audioElement.currentTime = 0;
  audioElement.play();
  masterSongName.innerHTML = songs[songIndex].songName;
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

// const endOfSong = ()=>{
// if(audioElement.currentTime>=audioElement.duration){
//     songIndex += 1;
//     audioElement.src = songs[songIndex].filePath;
//   audioElement.currentTime = 0;
//   audioElement.play();
//   masterSongName.innerHTML = songs[songIndex].songName;
//   gif.style.opacity = 1;
//   masterPlay.classList.remove("fa-play-circle")
// }
