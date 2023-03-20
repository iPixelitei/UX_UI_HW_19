function fade(img) {
 $(".preloader").fadeOut("slow");
}
 setTimeout(fade, 3000);
  
  //carousel images
  $(document).ready(function() {
    const carousel = $('.workGrid');
    const carouselContainer = carousel.find('.carousel-container');
    const carouselImages = carouselContainer.find('img');
    let currentImageIndex = 0;
  
    // show the current image and hide the others
    function showImage(index) {
      carouselImages.each(function(i) {
        if (i === index) {
          $(this).fadeIn();
        } else {
          $(this).fadeOut();
        }
      });
    }
  
    // go to the next image
    function nextImage() {
      currentImageIndex++;
      if (currentImageIndex >= carouselImages.length) {
        currentImageIndex = 0;
      }
      showImage(currentImageIndex);
    }
  
    // start the slideshow
    setInterval(nextImage, 5000);
  
    // show the first image initially
    showImage(currentImageIndex);
  });
  
  // smooth scrolling
  $(document).ready(function() {
    $('.nav a').click(function(e) {
      e.preventDefault(); // prevent default anchor click behavior
      const sectionId = $(this).attr('href'); // get section id from href attribute
      const sectionPosition = $(sectionId).offset().top; // get section position from top of the page
      $('html, body').animate({ scrollTop: sectionPosition }, 'slow'); // animate scrolling to section
    });
  });
  