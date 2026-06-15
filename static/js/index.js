window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function () {
    const options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
      pauseOnHover: true,
			autoplaySpeed: 10600,
    }

    bulmaCarousel.attach('.carousel', options);

    bulmaSlider.attach();
});
