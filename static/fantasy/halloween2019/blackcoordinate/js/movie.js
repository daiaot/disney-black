
var tag = document.createElement('script');

// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {

  // console.log('onYouTubeIframeAPIReady()')


  player = new YT.Player('player', {
    // height: '360',
    // width: '640',
    width: '100%',
    height: '100%',
    videoId: '9WBxbhv27-w',
    playerVars: {
      'autoplay': 1,
      'modestbranding': 1,
      'controls': 0,
      'showinfo': 0,
      // 'disablekb': 1,
      'html5': 1,
      'loop' : 1,
      'rel': 0,
      'enablejsapi': 1,
      'playsinline': 1,
      // 'origin': 'http://olc.pnrm.work',
      'playlist' : 'y2I_4gY9Rlc'
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  // console.log('onPlayerReady()')
  player.mute();
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
// var done = false;
function onPlayerStateChange(event) {
  // console.log('onPlayerStateChange()')
  // if (event.data == YT.PlayerState.PLAYING && !done) {
  //   setTimeout(stopVideo, 6000);
  //   console.log('setTimeout()')
  //   done = true;
  // }
  if (event.data == YT.PlayerState.ENDED) {
    event.target.playVideo();
  }
}
// function stopVideo() {
//   console.log('stopVideo()')
//   player.stopVideo();
// }

// iframeのreadyをグローバルにする
// window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
