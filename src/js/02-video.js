import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);


function onPlay(data) {
    let time = data.seconds
    localStorage.setItem("videoplayer-current-time", time)
}

player.on('timeupdate', throttle(onPlay, 1000));


const timeStoped = localStorage.getItem("videoplayer-current-time")

if (timeStoped) {
    player.setCurrentTime(timeStoped)
}
