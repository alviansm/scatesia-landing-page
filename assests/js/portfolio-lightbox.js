/**
   * Initiate portfolio lightbox 
   */
 const portfolioLightbox = GLightbox({
    selector: '.portfokio-lightbox'
  });

  const profileVideoLightbox = GLightbox({
    selector: '.profil-video-lightbox',
    'type': 'video',
    'source': 'local',
    autoplayVideos: true,
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });