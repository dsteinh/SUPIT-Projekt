function openModal() {
    document.getElementById("myLightbox").style.display = "block";
    document.getElementById("close").style.visibility = "visible";
  
}
  
  function closeModal() {
    document.getElementById("myLightbox").style.display = "none";
    document.getElementById("close").style.visibility = "hidden";
  }

  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    let l = n;
     showSlides(slideIndex += n, l);


  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n, b) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    
    
    if (n > slides.length)
    {
        slideIndex = 1
    }
    if (n < 1)
    {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";
        
    }

    //slides[slideIndex-1].classList.;
    slides[slideIndex-1].style.display = "block";
    if(b>0){
        slides[slideIndex-1].classList.remove('slideAnimL');
        slides[slideIndex-1].classList.add('slideAnimR');
        console.log(b);

    }
    if(b<0){
        slides[slideIndex-1].classList.remove('slideAnimR');
        slides[slideIndex-1].classList.add('slideAnimL');
        console.log(b);
        //slides[slideIndex-1].classList.remove('slideAnimL');

    }

    
  }

