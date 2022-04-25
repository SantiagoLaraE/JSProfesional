
/*
function MediaPlayer(config) {
  this.media = config.el;
}

MediaPlayer.prototype.play = function () {
  this.media.play();
};

MediaPlayer.prototype.pause = function () {
  this.media.pause();
};

MediaPlayer.prototype.isPaused = function () {
  return this.media.paused;
};
*/

class MediaPlayer{
    constructor(config){
        this.media = config.el;
    }
    play(){
        this.media.play();
    }
    pause(){
        this.media.pause();
    }
    isPaused(){
        return this.media.paused;
    }
}

export default MediaPlayer;