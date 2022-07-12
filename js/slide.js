let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Cambia cada 4 segundos
}

let slideIndexAds = 0;
showSlidesAds();

function showSlidesAds() {
  let i;
  let slidesads = document.getElementsByClassName("mySlides-ads");
  let dotsx = document.getElementsByClassName("dots");
  for (i = 0; i < slidesads.length; i++) {
    slidesads[i].style.display = "none";  
  }
  slideIndexAds++;
  if (slideIndexAds > slidesads.length) {slideIndexAds = 1}    
  for (i = 0; i < dotsx.length; i++) {
    dotsx[i].className = dotsx[i].className.replace(" active-ads", "");
  }
  slidesads[slideIndexAds-1].style.display = "block";  
  dotsx[slideIndexAds-1].className += " active-ads";
  setTimeout(showSlidesAds, 4000); // Cambia cada 4 segundos
}