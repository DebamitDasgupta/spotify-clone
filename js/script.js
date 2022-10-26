console.log("HELLO WORLD LISTEN YOUR MUSIC WITHOUT ANY AD'S")
// Initillise the variables
let songNameIndex = 0;
let audioElement = new Audio('Songs/1.mp3');
let masterPlay = document.getElementById("masterplay");
let myProgress = document.getElementById('myProgressBar');
let sidegif = document.getElementById('gif')
let songitem = document.getElementById('songItem')
let songs = [
    {songName: "No Love", byName: "By Shubh (Punjabi hit)" , filePath:"Songs/1.mp3", coverPath:"covers/1.jfif"},
    {songName: "Manike Magehite", byName: "N/A" , filePath:"Songs/2.mp3", coverPath:"covers/2.jfif"},
    {songName: "Love niwatiti", byName: "By CK Love" , filePath:"Songs/3.mp3", coverPath:"covers/3.jfif"},
    {songName: "Kesariya", byName: "By Arijit sing" , filePath:"Songs/4.mp3", coverPath:"covers/4.jfif"},
    {songName: "Jhoom", byName: "By Aditiya Kumar" , filePath:"Songs/5.mp3", coverPath:"covers/5.jfif"},
    {songName: "jalebi baby", byName: "By Tesher" , filePath:"Songs/6.mp3", coverPath:"covers/6.jfif"},
    {songName: "HABIBI", byName: "By Ricki Rich" , filePath:"Songs/7.mp3", coverPath:"covers/7.jfif"},
    {songName: "Tu ak dekhle", byName: "By Carnival" , filePath:"Songs/8.mp3", coverPath:"covers/8.jfif"},
    {songName: "Build me a Bitch", byName: "By Bela porch" , filePath:"Songs/9.mp3", coverPath:"covers/9.jfif"},
    {songName: "Brown munde", byName: "By AP Dhillon" , filePath:"Songs/10.mp3", coverPath:"covers/10.jfif"},
    {songName: "1,2,3", byName: "By Sofia Reyes" , filePath:"Songs/11.mp3", coverPath:"covers/11.jfif"},
]

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        sidegif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        sidegif.style.opacity = 0;
    }
})
// Listen to Evenets
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgress.value = progress;
    
})

myProgress.addEventListener('change', ()=>{
    audioElement.currentTime = myProgress.value * audioElement.duration/100;
})