
export default class Movie {
  constructor(elem) {
    this.elem = elem
    // this.opts = opts
    console.log('movie')
    this.bindEvents()
  }

  bindEvents() {

    // console.log('movie - bindEvents()')

    // var tag = document.createElement('script');
    // tag.src = "https://www.youtube.com/iframe_api";
    // var firstScriptTag = document.getElementsByTagName('script')[0];
    // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;
    player = new YT.Player('player', {
      width: '100%',
      videoId: 'RTkGg0In1k4',
      playerVars: {
        'autoplay': 1,
        'modestbranding': 1,
        'rel': 0,
        'controls': 0,
        'showinfo': 0,
        'disablekb': 1,
        'loop' : 1,
        'rel': 0,
        'playlist' : 'RTkGg0In1k4'
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  

    // var player;
    // function onYouTubeIframeAPIReady() {

    //   console.log('movie - onYouTubeIframeAPIReady()')

    //   player = new YT.Player('player', {
    //     height: '421.875',
    //     width: '750',
    //     videoId: 'bjmBJ1Fl0cs',
    //     playerVars: {
    //       'controls': 0,
    //       'autoplay': 1,
    //       'loop': 1,
    //       'playlist': 'bjmBJ1Fl0cs',
    //       'rel': 0,
    //       'showinfo': 0
    //     },
    //     events: {
    //       'onReady': onPlayerReady,
    //       'onStateChange': onPlayerStateChange
    //     }
    //   });
    // }

    function onPlayerReady() {
      console.log('movie - onPlayerReady()')
      player.playVideo();
      player.mute();

    }

    var done = false;
    function onPlayerStateChange() {
      console.log('movie - onPlayerStateChange()')
      if (player.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
      }
    }
    function stopVideo() {
      console.log('movie - stopVideo()')
      player.stopVideo();
    }


  }

}
