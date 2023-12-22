$(".dropdown-menu a.dropdown-toggle").on("click", function (e) {
    if (!$(this).next().hasClass("show")) {
      $(this).parents(".dropdown-menu").first().find(".show").removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass("show");
  
    $(this)
      .parents("li.nav-item.dropdown.show")
      .on("hidden.bs.dropdown", function (e) {
        $(".dropdown-submenu .show").removeClass("show");
      });
  
    return false;
  });
  
  $(document).ready(function () {
    $("#employer-logos-slider").slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  
    $("#job-categories-skills").slick({
      rows: 4,
      dots: true,
      arrows: true,
      autoplay: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      pauseOnHover: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            rows: 3,
            slidesToShow: 1
          }
        }
      ]
    });
  
    $("#featured-jobs-slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 10000,
      arrows: true,
      dots: true,
      rows: 3,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  
    $("#khawateen-events-posts-slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
      arrows: false,
      dots: true,
      rows: 1,
      //vertical: true,
      //verticalSwiping: true,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  
    
    $("#testimonials-slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
      arrows: false,
      dots: true,
      rows: 1,
      //vertical: true,
      //verticalSwiping: true,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
    
    $("#women-employed").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
      arrows: false,
      dots: true,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  
    $("#features-slider").slick({
      rows: 2,
      dots: true,
      arrows: false,
      autoplay: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      pauseOnHover: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 992,
          settings: { rows: 2, slidesToShow: 2 }
        },
        {
          breakpoint: 767,
          settings: { rows: 1, slidesToShow: 1 }
        }
      ]
    });
  });
  
  /*******Blog_Slider*****/
  var swiper = new Swiper("#blog-slider", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    mousewheel: {
      invert: false
    },
    //autoHeight: true,
    pagination: {
      el: ".blog-slider__pagination",
      clickable: true
    }
  });
  swiper.mousewheel.disable();
  /*********/
  
  function AddToFavourite(x) {
    x.classList.toggle("fas");
  }
  /*********/
  if ($(".no-counter").is(":visible")) {
    $(".no-counter").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text()
          },
          {
            duration: 3000,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now));
            }
          }
        );
    });
  }
  