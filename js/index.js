function fade() {
 $(".preloader").fadeOut("slow");
}
 setTimeout(fade, 3000);
  
  //carousel images
  const carousel1 = document.querySelector(".carousel1 ul");
  const images1 = document.querySelectorAll(".carousel1 li");
  let currentImageIndex1 = 0;
  
  const carousel2 = document.querySelector(".carousel2 ul");
  const images2 = document.querySelectorAll(".carousel2 li");
  let currentImageIndex2 = 0;
  
  function displayCurrentImage1() {
    images1.forEach(image => {
      image.style.display = "none";
    });
  
    images1[currentImageIndex1].style.display = "block";
  }
  
  function displayCurrentImage2() {
    images2.forEach(image => {
      image.style.display = "none";
    });
  
    images2[currentImageIndex2].style.display = "block";
  }
  
  function nextImage1() {
    currentImageIndex1++;
  
    if (currentImageIndex1 >= images1.length) {
      currentImageIndex1 = 0;
    }
  
    displayCurrentImage1();
  }
  
  function nextImage2() {
    currentImageIndex2++;
  
    if (currentImageIndex2 >= images2.length) {
      currentImageIndex2 = 0;
    }
  
    displayCurrentImage2();
  }
  
  nextImage1();
  setInterval(nextImage1, 5000);
  
  nextImage2();
  setInterval(nextImage2, 5000);
  
  
 
  
  // smooth scrolling
  $(document).ready(function() {
    $('.nav a').click(function(e) {
      e.preventDefault(); // prevent default anchor click behavior
      const sectionId = $(this).attr('href'); // get section id from href attribute
      const sectionPosition = $(sectionId).offset().top; // get section position from top of the page
      $('html, body').animate({ scrollTop: sectionPosition }, 'slow'); // animate scrolling to section
    });
  });
  