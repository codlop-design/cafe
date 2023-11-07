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
   }
   else {
    $("html, body").animate(
      {
        scrollTop: $(targetDiv).offset().top - 180,
      },
      250
    );
   }

  });
});

// class active
$(document).ready(function () {
  $(".catg-box").on("click", function () {
    $(".catg-box").not(this).removeClass("active");
    $(this).addClass("active");
  });
});


$(document).ready(function () {
  $(".navbar .cart-btn").on("click", function () {
    $(".cart").addClass("active");
  });
  $(".cart .title svg").on("click", function () {
    $(".cart").removeClass("active");
  });
});