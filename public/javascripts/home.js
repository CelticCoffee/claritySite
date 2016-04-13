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

  $('.flexslider').flexslider({
    animation: "slide"
  });

});
