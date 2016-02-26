$(document).ready(function(){
  // alert('hello world');
  //Mobile Company Intro Text Expand//
  $('#learnMoreButton').click(function(){
    $('#moreClarityInfo').toggle('slow');
    $('#learnMoreButton').hide();
  });

  $('#closeButton').click(function(){
    $('#moreClarityInfo').toggle('slow');
    $('#learnMoreButton').show();
  });



})
