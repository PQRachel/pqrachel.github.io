if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

/* Slide show - Start */
const fadeImages = (elContainer) => {

  const duration = 3000;
  const elsSlides = elContainer.children;
  const tot = elsSlides.length;
  let idx = 0;
  let itv = null;
  
  const hide = () => elsSlides[idx].classList.remove("is-active");
  const show = () => elsSlides[idx].classList.add("is-active"); 
  const anim = () => {
    hide();
    idx = (idx + 1) % tot;
    show();
  };
  const play = () => itv = setInterval(anim, duration);
  const stop = () => clearInterval(itv);
  
  // Start!
  elContainer.addEventListener("pointerenter", stop);
  show();
  play();
}

// Init!
document.querySelectorAll(".image-container").forEach(fadeImages);
/* Slide show - END */
