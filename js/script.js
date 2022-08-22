const $musicPlayer = $('#music-player');
console.log($musicPlayer);
let embed = new Flat.Embed($musicPlayer, {
    score: '6303886e3acb0d001314122a',
    embedParams: {
      appId: '6303986fab00b000121d88e3',
      controlsPosition: 'bottom',
    }
  });