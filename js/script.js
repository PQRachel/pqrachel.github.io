if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

/* Slide show - Start */
var images = document.getElementById("image-container").children;
var index = 0;

function fadeImages() {
  var nextIndex = (index + 1) % images.length;
  var currentImage = images[index];
  var nextImage = images[nextIndex];

  currentImage.style.opacity = 1;

  var opacity = 0;
  var interval = setInterval(function() {
    opacity += 0.05;
    nextImage.style.opacity = opacity;
    currentImage.style.opacity = 1 - opacity;
    if (opacity >= 1) {
      clearInterval(interval);
      currentImage.style.display = "none";
      nextImage.style.display = "block";
      index = nextIndex;
      setTimeout(fadeImages, 5000);
    }
  }, 50);
}

fadeImages();
/* Slide show - END */
