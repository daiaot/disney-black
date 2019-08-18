
export default class Movie {
  constructor(elem) {
    this.elem = elem
    // this.opts = opts
    console.log('movie')
    this.bindEvents()
  }

  bindEvents() {

    console.log('movie - bindEvents()')

    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];

    // console.log(firstScriptTag)

    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;
    function onYouTubeIframeAPIReady() {

      console.log('movie - onYouTubeIframeAPIReady()')

      player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'bjmBJ1Fl0cs',
        playerVars: {
          controls: 0,
          autoplay: 1,
          loop: 1,
          playlist: 'bjmBJ1Fl0cs',
          rel: 0,
          showinfo: 0,
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    }

    function onPlayerReady(event) {
      console.log('movie - onPlayerReady()')
      event.target.playVideo();
    }


    var done = false;
    function onPlayerStateChange(event) {
      console.log('movie - onPlayerStateChange()')
      if (event.data == YT.PlayerState.PLAYING && !done) {
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
