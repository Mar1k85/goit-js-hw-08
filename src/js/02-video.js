import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const CURRENT_PLAYER_TIME = 'videoplayer-current-time';
const onPlay = ({ seconds }) => {
  localStorage.setItem(CURRENT_PLAYER_TIME, seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem(CURRENT_PLAYER_TIME));
