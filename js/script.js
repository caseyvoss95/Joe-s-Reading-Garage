//DOM Elements

const $musicPlayer = $('#music-player');
const $quarterButton = $('button[aria-label="Quarter (3)"]');
const $nativeQuarter = $('#quarter');



//Music Player Initialized
const embed = new Flat.Embed($musicPlayer, {
    score: '6303886e3acb0d001314122a',
    embedParams: {
        appId: '6303986fab00b000121d88e3',
        controlsPosition: 'top',
        mode: 'edit'
    }
});






//   embed.getMIDI().then(function (midi) {
    //     // MIDI file as a Uint8Array
    //     console.log(midi);
    //   });
    
    
    
    
    
    // let embed = new Flat.Embed($musicPlayer, {
    //     score: '6303886e3acb0d001314122a',
    //     embedParams: {
    //       appId: '6303986fab00b000121d88e3',
    //       controlsPosition: 'top',
    //     }
    //   });