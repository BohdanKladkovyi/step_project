// Show the first tab and hide the rest
$(document).ready(function(){
$('#tabs-nav li:first-child').addClass('active');
$('.service-block-content-text').hide();
$('.service-block-content-text:first').show();

// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.service-block-content-text').hide();
  
  let activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});
})