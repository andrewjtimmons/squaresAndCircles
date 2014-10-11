$(document).ready(function() {
  var htmlCanvas = document.getElementById('canvas');
  var tweet = document.getElementById('tweet');
  var context = htmlCanvas.getContext('2d');
  var numPhotos = 24
  var images = createImages();
  var i = 1;

  if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          document.write("<h1>Please<br/>look<br/>at<br/>this<br/>on<br/>a<br/>desktop<br/>computer.</h1>")
        }
  else {
    initialize();
    
    setInterval(function() {
      redraw()
    }, 472);
  }

  function initialize() {
    //create the universe
    window.addEventListener('resize', resizeCanvas, false);
    resizeCanvas();
  }

  function createImages() {
    //creates array of images for redraw to loop thru
    var images = []
    for (var i = 1; i <= numPhotos; i++) {
      images[i] = new Image;
      $(images[i]).load().attr('src', "img/" + i + ".JPG");
    }
    return images;
  }

  function resizeCanvas() {
    htmlCanvas.width = window.innerWidth;
    htmlCanvas.height = window.innerHeight;
    htmlCanvas.style.zIndex="-1";
  }
             
  function redraw() {
    //loops through var images and displays them to user
    if (i == 24) {
      i = 1;
    }
    context.drawImage(images[i],0,0, 1000*(window.innerWidth/1000),1000*(window.innerHeight/1000) );
    i++;
  }

});