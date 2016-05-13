$(document).ready(function(){
  // alert('hello world');
  //Mobile Company Intro Text Expand//
  $('#choirVidButton').click(function(){
    $('#choirVideo').toggle('slow');
    $('#choirVidButton').toggle();
    $('#vidCaption').toggle();
    $('.consultationText').toggle('slow');
    $('#choirBack').toggle();
  });

  $('#choirBack').click(function() {
    $('#choirVideo').toggle('slow');
    $('.consultationText').toggle('slow');
    $('#vidCaption').toggle('slow');
    $('#choirBack').toggle();
    $('#choirVidButton').toggle();
  });
//
//
//   $('.multiple-items').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   arrows: true,
//   autoplay: true,
//   autoplaySpeed: 5000,
// });

// $('.multiple-items').slick({
// dots: true,
// infinite: true,
// speed: 500,
// fade: true,
// cssEase: 'linear'
// });
$('.multiple-items').slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 4500,
  cssEase: 'linear'
});


  //
  // $('.flexslider').flexslider({
  //   animation: "slide"
  // });

});
