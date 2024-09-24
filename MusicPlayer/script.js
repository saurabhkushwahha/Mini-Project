const prev = document.getElementById('prev')
const playpause = document.getElementById('playpause')
const next = document.getElementById('next')
const songName = document.getElementById("song-name")
const songArtist = document.getElementById("song-artist")
const curr_time = document.getElementById("current-time")
const total_time = document.getElementById("total-time")
const progress = document.getElementById('progress')
const progressBar = document.querySelector('.progress-bar')
const songImg=document.querySelector('.song-image')
const songArr = [
    {
        song: './assests00/songs/1.mp3',
        image: './assests00/images/1.jpg',
        name: " The Charmer\ 's Call",
        artist: 'Hanu Dixit ',
    },
    {
        song: './assests00/songs/2.mp3',
        image: './assests00/images/2.jpg',
        name: 'You Will Never See Me Coming',
        artist: 'NEFFEX',
    },
    {
        song: './assests00/songs/3.mp3',
        image: './assests00/images/3.jpg',
        name: ' Intellect ',
        artist: ' Yung Logos',
    },
]
let songIndex =-1;
let music = new Audio();
music.play()

playpause.addEventListener('click', togglePlay)
prev.addEventListener('click', () => updateSong(-1))
next.addEventListener('click', () =>updateSong(1))
music.addEventListener('ended',updateSong(1))
music.addEventListener('timeupdate',  setProgress)
progressBar.addEventListener('click',setProgressBar)



function togglePlay() {
    if (music.paused) {
        music.play()
        playpause.innerHTML = '<i class="fa-solid fa-pause"></i>'
    } else {
        music.pause()
        playpause.innerHTML = '<i class="fa-solid fa-play"></i>'
    }
}

function updateSong(direction) {
    if (!music.paused) {
        music.pause()
    }
    songIndex = (songIndex + direction + songArr.length) % songArr.length
    music.src = songArr[songIndex].song
    songName.innerHTML = songArr[songIndex].name
    songArtist.innerHTML = songArr[songIndex].artist
    songImg.innerHTML=`<img src=${songArr[songIndex].image} alt="">`
    music.play()
}

function setProgress(){
    const { duration, currentTime } = music
    progress.style.width=`${(currentTime/duration)*100}%`;
    curr_time.innerHTML=`${Math.floor(currentTime/60)}:${Math.floor(currentTime%60)}`
   total_time.innerHTML=`${Math.floor(duration/60)}:${Math.floor(duration%60)}`
}

function setProgressBar(e){
    const width=progressBar.clientWidth;
    const clickX=e.offsetX;
    music.currentTime=(clickX/width)*music.duration;
}

updateSong(0)