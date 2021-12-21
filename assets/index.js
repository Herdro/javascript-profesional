import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [
    new AutoPlay()
] });

const button = document.querySelector('button.Play');
button.onclick = () => player.togglePlay();

const buttonMute = document.querySelector('button.Mute');
buttonMute.onclick = () => player.toggleMute();