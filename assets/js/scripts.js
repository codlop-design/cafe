// Swiper
var mySwiper = new Swiper(".ctg-swiper", {
  slidesPerView: "auto",
  freeMode: true,
  spaceBetween: 10,
});

// quantity
$(document).ready(function () {
  $(".plus").click(function () {
    var inputField = $(this).closest(".quantity").find("input");
    var currentValue = parseInt(inputField.val());
    inputField.val(currentValue + 1);
  });

  $(".minus").click(function () {
    var inputField = $(this).closest(".quantity").find("input");
    var currentValue = parseInt(inputField.val());
    if (currentValue > 1) {
      inputField.val(currentValue - 1);
    }
  });
});

// scroll to element
$(document).ready(function () {
  $(".ctg-swiper .catg-box").click(function () {
    var targetDiv = $(this).attr("href");
    if ($(window).width() < 768) {
      $("html, body").animate(
        {
          scrollTop: $(targetDiv).offset().top - 190,
        },
        250
      );
    } else {
      $("html, body").animate(
        {
          scrollTop: $(targetDiv).offset().top - 180,
        },
        250
      );
    }
  });

  // Smooth scroll for all links
  $(window).on("scroll", function () {
    var scrollPos = $(window).scrollTop();
    $(".products").each(function () {
      var categoryOffset = $(this).offset().top - 191;
      var categoryId = $(this).attr("id");
      if (scrollPos >= categoryOffset) {
        $(".catg-box").removeClass("active");
        $('a[href="#' + categoryId + '"]').addClass("active");
      }
    });
  });


});



// class active
// $(document).ready(function () {
//   $(".catg-box").on("click", function () {
//     $(".catg-box").not(this).removeClass("active");
//     $(this).addClass("active");
//   });
// });

// open cart
$(document).ready(function () {
  $(".navbar .cart-btn").on("click", function () {
    $(".cart").addClass("active");
  });
  $(".cart .title img").on("click", function () {
    $(".cart").removeClass("active");
  });
});

// open enquiry
$(document).ready(function () {
  $(".enquiry-btn-mob").on("click", function () {
    $(".enquiry").slideToggle();
    $(".enquiry-btn-mob").addClass("active");
  });
});

$(document).ready(function () {
  var savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    $("body").attr("data-theme", savedTheme);
  }
  $(".change-mode").click(function () {
    var currentTheme = $("body").attr("data-theme");
    var newTheme = currentTheme === "dark" ? "light" : "dark";
    $("body").attr("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
});
