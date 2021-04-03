// $(document).ready(function() {
//   $('a[href^="#"]').click(function () { 
//     elementClick = $(this).attr("href");
//     destination = $(elementClick).offset().top;
//     if($.browser.safari){
//       $('body').animate( { scrollTop: destination }, 1100 );
//     }else{
//       $('html').animate( { scrollTop: destination }, 1100 );
//     }
//     return false;
//   });
// });


 
$(document).ready(function(){
  $("#nav-sub").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top - (screen.width > 600 ? 25 : 115);
    $('body,html').animate({scrollTop: top}, 1500);
  });

  $("#up-button").on("click", function (event) {
    event.preventDefault();
    $('body,html').animate({scrollTop: 0}, 500);
  });

  $("#up-button").hide();
  window.addEventListener('scroll', function() {
    if(pageYOffset > 100) {
      $("#up-button").show();
    }
    else {
      $("#up-button").hide();
    }
  });
});