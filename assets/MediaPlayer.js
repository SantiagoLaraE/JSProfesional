
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
        this.plugins = config.plugins || [];

        this._iniPlugins();
    }
    _iniPlugins(){
      this.plugins.forEach(plugin => {
        plugin.run(this);
      });
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
    mute(){
      this.media.muted = true;
    }
    unmute(){
      this.media.muted = false;
    }
    isMuted(){
      return this.media.muted;
  }
}

export default MediaPlayer;