openPopUp($('.clickRequest'));
openPopUp($('.forWhom-button-btn'));
openPopUp($('.navRequest'));
scrollSlow($("#buttonAdvantages"), $('.advantages'));
scrollSlow($(".link2"), $(".forWhom"));
scrollSlow($(".link1"), $(".advantages"));

var navTop = $(".advantages").offset();

// function
function openPopUp(classId){
  classId.on("click", function() {
    $('.popUp').css("display", "block");
    $('body').css("overflow", "hidden");
  });
  $('.popUp-close').on("click", function(){
    $('.popUp').css("display", "none");
    $('body').css("overflow", "auto");
  });
}

function scrollSlow(element, elementScroll){
  element.on("click", function() {
    $('html,body').animate({scrollTop:elementScroll.offset().top+"px"},{duration:1E3});
  });
}
// function

  $(window).scroll(function(){                              // отслеживаем событие
    if ($(window).scrollTop() >= navTop['top']) {
      console.log(100);
        $(".nav").addClass("fix");                 // ставим условие
    } else {
      $(".nav").removeClass("fix");
    }
});
