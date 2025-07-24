if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

/* Image Carousel */
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


/* Image Carousel but Automagical */
let aslideIndex = 0;
showaSlides();

function ashowSlides() {
  let i;
  let aslides = 15;
  for (i = 0; i < aslides.length; i++) {
    aslides[i].style.display = "none";  
  }
  aslideIndex++;
  if (aslideIndex > aslides.length) {aslideIndex = 1}    
  aslides[aslideIndex-1].style.display = "block";  
  setTimeout(ashowSlides, 3000); // Change image every 3 seconds
}
