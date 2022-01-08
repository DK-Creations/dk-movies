const player = document.getElementById('player');
const video = document.getElementById('video');
const controls = document.getElementById('controls');
const lock = document.getElementById('lock');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const forward = document.getElementById('forward');
const reverse = document.getElementById('reverse');
const duration = document.getElementById('duration');
const fullscreen = document.getElementById('fullscreen');
const progress = document.getElementById('progressbar');
const thumb = document.getElementById('progressthumb');

var isReady = false;
var isPlaying = false;
var isLocked = false;
var isFullScreen = false;
var timer;

var th = '';
var tm = '';
var ts = '';
var f = '';
var t = null;

function seek(val) {
  video.currentTime = video.currentTime + val;
  thumb.value = video.currentTime;
  progress.value = video.currentTime;
  setDuration(video.currentTime);
}

function controlsVisibility(b) {
  if(b){
    title.style.visibility = 'hidden';
    reverse.style.visibility = 'hidden';
    pause.style.visibility = 'hidden';
    play.style.visibility = 'hidden';
    forward.style.visibility = 'hidden';
    duration.style.visibility = 'hidden';
    fullscreen.style.visibility = 'hidden';
    progress.style.visibility = 'hidden';
    thumb.style.visibility = 'hidden';
    lock.src = './icons/locked.png'
  } else {
    title.style.visibility = 'visible';
    reverse.style.visibility = 'visible';
    forward.style.visibility = 'visible';
    duration.style.visibility = 'visible';
    fullscreen.style.visibility = 'visible';
    progress.style.visibility = 'visible';
    thumb.style.visibility = 'visible';
    if(!isPlaying) {
      pause.style.visibility = 'hidden';
      play.style.visibility = 'visible';
    } else {
      play.style.visibility = 'hidden';
      pause.style.visibility = 'visible';
    }
    lock.src = './icons/unlocked.png'
  }
}

function setTotalDuration(d){
  var th = parseInt(d/60/60);
  var tm = parseInt(d/60%60).toString().length == 1 ? '0'+parseInt(d/60%60) : parseInt(d/60%60);
  var ts = (parseInt(d%60).toString().length == 1 ? '0'+parseInt(d%60) : parseInt(d%60)).toString().substring(0,2);
  f = !(th==00) ? f+'h' : f;
  f = !(tm==00) ? f+'m' : f;
  f = !(ts==00) ? f+'s' : f;
  if(f=='hms')
  t = th+':'+tm+':'+ts;
  if(f=='ms')
  t = tm+':'+ts;
  if(f=='s')
  t = ts;
}

function setDuration(c) {
  var ch = parseInt(c/60/60);
  var cm = parseInt(c/60%60).toString().length == 1 ? '0'+parseInt(c/60%60) : parseInt(c/60%60);
  var cs = (parseInt(c%60).toString().length == 1 ? '0'+parseInt(c%60) : parseInt(c%60)).toString().substring(0,2);
  if(f=='hms')
  duration.innerHTML = ch+':'+cm+':'+cs+' / '+t;
  if(f=='ms')
  duration.innerHTML = cm+':'+cs+' / '+t;
  if(f=='s')
  duration.innerHTML = cs+' / '+t;
}

pause.style.visibility = 'hidden';

document.onmousemove = function() {
  clearInterval(timer);
  timer = null;
  controls.style.display = 'block'
  timer = setTimeout(function(){
  controls.style.display = 'none'
  },3000);
}

document.onclick = function() {/*
  if(timer != null) {
    clearInterval(timer);
    timer = null;
    controls.style.display = 'none'
  } else {*/
    clearInterval(timer);
    timer = null;
    controls.style.display = 'block'
    timer = setTimeout(function(){
    controls.style.display = 'none'
    },3000);
  }
//}

document.ondblclick = function() {
  fullscreen.click();
}

thumb.oninput = function(){
  progress.value = thumb.value;
  video.currentTime = thumb.value;
  setDuration(thumb.value);
}

video.oncanplay = function() {
  isReady = true;
  if(f=='') {
    thumb.min = 0;
    progress.min = 0;
    thumb.max = video.duration;
    progress.max = video.duration;
    setTotalDuration(video.duration);
    setDuration(0);
  }
}

lock.addEventListener('click',Event=>{
  controlsVisibility(!isLocked);
  isLocked = !isLocked;
});

play.addEventListener('click',Event=>{
  if(isReady && !isPlaying){
    isPlaying =true;
    video.play();
    play.style.visibility = 'hidden';
    pause.style.visibility = 'visible';
  }
});

pause.addEventListener('click',Event=>{
  if(isReady && isPlaying){
    isPlaying =false;
    video.pause();
    pause.style.visibility = 'hidden';
    play.style.visibility = 'visible';
  }
});

forward.addEventListener('click',Event=>{
  seek(10);
});

reverse.addEventListener('click',Event=>{
  seek(-10);
});

fullscreen.addEventListener('click',Event=>{
  if(!isFullScreen) {
    player.requestFullscreen();
    fullscreen.src = './icons/screen2.png'
  } else {
    document.exitFullscreen();
    fullscreen.src = './icons/screen1.png'
  }
  isFullScreen = !isFullScreen
});

video.ontimeupdate = function() {
  thumb.value = video.currentTime;
  progress.value = video.currentTime;
  setDuration(video.currentTime);
}

video.onerror = function() {
  alert('Link Expired. Please Generate New One.');
}

document.addEventListener('keyup',Event=>{

  clearInterval(timer);
  controls.style.display = 'block'
  timer = setTimeout(function(){
    controls.style.display = 'none'
  },3000);

  if(Event.keyCode == 32) {
    if(isPlaying) {
      pause.click();
    } else {
      play.click();
    }
  }

  if(Event.keyCode == 37) {
    reverse.click();
  }

  if(Event.keyCode == 39) {
    forward.click();
  }
});