import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
console.log(iframe);
const player = new Player(iframe);

function controlTime({ seconds }) {
  localStorage.setItem(LOCAL_STORAGE_KEY, seconds);
}
console.log(controlTime);

player.on('timeupdate', throttle(controlTime, 1000));
{
  console.log('played the video!');
}

const currentTimeVideo = localStorage.getItem(LOCAL_STORAGE_KEY);

player.setCurrentTime(currentTimeVideo).catch(function (error) {
  switch (error.name) {
    case 'RangeError':
      // the time was less than 0 or greater than the video’s duration
      break;

    default:
      // some other error occurred
      break;
  }
});
