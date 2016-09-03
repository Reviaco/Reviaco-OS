$(function(){
      $("#slides").slidesjs({
        width: 1280,
pagination: {
      active: false},
 navigation: {
      active: false},
play: {
      active: false,
auto: true,
pauseOnHover: true},
        height: 350
      });
    });

$(document).on('click', '._3dface', function( event ) {
$('#home').fadeOut();
$('#app_page').fadeIn();
$('#back_btn').fadeIn();
});

$(document).on('click', '.app_promo_slide', function( event ) {
$('#home').fadeOut();
$('#app_page').fadeIn();
$('#back_btn').fadeIn();
});

$(document).on('click', '#back_btn', function( event ) {
$('#app_page').fadeOut();
$('#home').fadeIn();
$('#back_btn').fadeOut();
});

$(document).on('click', '#install_btn', function( event ) {
     var type = $( this ).attr('type');;
     $.ajax({
         method: 'POST',
         url: '../../PHP/Linux Commands/Install/' + type + '.php',
         data: {
           dataString: command
         }
       });
});
