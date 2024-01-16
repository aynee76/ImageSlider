let slides = document.getElementsByClassName("myslides");

let slideLength = 1;
 
function showSlides(n) {
    if (n > slides.length) {
        slideLength = 1
    }
    if (n < 1) {
        slideLength = slides.length
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideLength-1].style.display = "block";
  }
  showSlides(slideLength);
     
function plusSlides(n) {
    showSlides(slideLength += n);
  }