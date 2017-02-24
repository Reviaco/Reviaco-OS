var app_name;
var type;

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
        height: 200
      });
    });

$(document).on('click', '._3dface', function( event ) {
sessionStorage.app_name =  $( this ).attr("app_name");;
document.getElementById('appIntroduction').src = 'https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + sessionStorage.type + '/' + sessionStorage.app_name + '/promo.mp4';
$('#main_title').text(sessionStorage.app_name);
$('#home').fadeOut();
$('#app_page').fadeIn();
$('#back_btn').fadeIn();
});

$(document).on('click', '.app_promo_slide', function( event ) {
sessionStorage.app_name =  $( this ).attr("app_name");;
document.getElementById('appIntroduction').src = 'https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + sessionStorage.type + '/' + sessionStorage.app_name + '/promo.mp4';
$('#main_title').text(sessionStorage.app_name);    
$('#home').fadeOut();
$('#app_page').fadeIn();
$('#back_btn').fadeIn();
});

$(document).on('click', '#back_btn', function( event ) {
$('#main_title').text('Echo Store');
$('#app_page').fadeOut();
$('#home').fadeIn();
$('#back_btn').fadeOut();
});

$(document).on('click', '#install_btn', function( event ) {
     $.ajax({
         method: 'POST',
         url: '../../PHP/Linux Commands/install.php',
         data: {
           app_name: sessionStorage.app_name,
           type: sessionStorage.type
         }
       });
});

var get_apps = new XMLHttpRequest();
   var get_apps_url = "https://reviaco.tk/Echo/PHP/Data_Request.php";

   get_apps.onreadystatechange = function() {
     if (get_apps.readyState == 4 && get_apps.status == 200) {
       get_apps_function(get_apps.responseText);
     }
   };
     
   get_apps.open('GET', get_apps_url, true);
   get_apps.send();

   function get_apps_function(response) {
     var info = JSON.parse(response);
     var i;
       
     for (i = 0; i < info.length; i++) {
 $("#app_promo_slide1").attr("app_name", info[0].Name);
 $("#app_promo_slide2").attr("app_name", info[1].Name);
 $("#app_promo_slide3").attr("app_name", info[2].Name);
 $("#app_promo_slide4").attr("app_name", info[1].Name);
 $("#app_promo_slide5").attr("app_name", info[1].Name);
 $("#app_promo_cube_1_A").attr("app_name", info[1].Name);
 $("#app_promo_cube_1_B").attr("app_name", info[1].Name);
 $("#app_promo_cube_1_C").attr("app_name", info[1].Name);
 $("#app_promo_cube_1_D").attr("app_name", info[1].Name);
 $("#app_promo_cube_1_E").attr("app_name", info[1].Name);
 $("#app_promo_cube_2_A").attr("app_name", info[1].Name);
 $("#app_promo_cube_2_B").attr("app_name", info[1].Name);
 $("#app_promo_cube_2_C").attr("app_name", info[1].Name);
 $("#app_promo_cube_2_D").attr("app_name", info[1].Name);
 $("#app_promo_cube_2_E").attr("app_name", info[1].Name);
 $("#app_promo_cube_3_A").attr("app_name", info[1].Name);
 $("#app_promo_cube_3_B").attr("app_name", info[1].Name);
 $("#app_promo_cube_3_C").attr("app_name", info[1].Name);
 $("#app_promo_cube_3_D").attr("app_name", info[1].Name);
 $("#app_promo_cube_3_E").attr("app_name", info[1].Name);
 $("#app_promo_cube_4_A").attr("app_name", info[1].Name);
 $("#app_promo_cube_4_B").attr("app_name", info[1].Name);
 $("#app_promo_cube_4_C").attr("app_name", info[1].Name);
 $("#app_promo_cube_4_D").attr("app_name", info[1].Name);
 $("#app_promo_cube_4_E").attr("app_name", info[1].Name);
 $("#app_promo_cube_5_A").attr("app_name", info[1].Name);
 $("#app_promo_cube_5_B").attr("app_name", info[1].Name);
 $("#app_promo_cube_5_C").attr("app_name", info[1].Name);
 $("#app_promo_cube_5_D").attr("app_name", info[1].Name);
 $("#app_promo_cube_5_E").attr("app_name", info[1].Name);
 $("#app_promo_cube_6_A").attr("app_name", info[1].Name);
 $("#app_promo_cube_6_B").attr("app_name", info[1].Name);
 $("#app_promo_cube_6_C").attr("app_name", info[1].Name);
 $("#app_promo_cube_6_D").attr("app_name", info[1].Name);
 $("#app_promo_cube_6_E").attr("app_name", info[1].Name);

document.getElementById('app_promo_slide1').src = 'https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[0].Name + '/cover.png';

document.getElementById('app_promo_slide2').src = 'https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[1].Name + '/cover.png';

document.getElementById('app_promo_slide3').src = 'https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[2].Name + '/cover.png';

document.getElementById('app_promo_slide4').src = 'https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[1].Name + '/cover.png';

document.getElementById('app_promo_slide5').src = 'https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[1].Name + '/cover.png';

document.getElementById('app_promo_cube_1_A').style.backgroundImage = 'url("https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[1].Name + '/cover.png")';

document.getElementById('app_promo_cube_1_B').style.backgroundImage = 'url("https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[1].Name + '/cover.png")';

document.getElementById('app_promo_cube_1_C').style.backgroundImage = 'url("https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[1].Name + '/cover.png")';

document.getElementById('app_promo_cube_1_D').style.backgroundImage = 'url("https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[1].Name + '/cover.png")';

document.getElementById('app_promo_cube_1_E').style.backgroundImage = 'url("https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[1].Name + '/cover.png")';

document.getElementById('app_promo_cube_2_A').style.backgroundImage = 'url("https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[1].Name + '/cover.png")';

document.getElementById('app_promo_cube_2_B').style.backgroundImage = 'url("https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[1].Name + '/cover.png")';

document.getElementById('app_promo_cube_2_C').style.backgroundImage = 'url("https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[1].Name + '/cover.png")';

document.getElementById('app_promo_cube_2_D').style.backgroundImage = 'url("https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[1].Name + '/cover.png")';

document.getElementById('app_promo_cube_2_E').style.backgroundImage = 'url("https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[1].Name + '/cover.png")';

document.getElementById('app_promo_cube_3_A').style.backgroundImage = 'url("https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[1].Name + '/cover.png")';

document.getElementById('app_promo_cube_3_B').style.backgroundImage = 'url("https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[1].Name + '/cover.png")';

document.getElementById('app_promo_cube_3_C').style.backgroundImage = 'url("https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[1].Name + '/cover.png")';

document.getElementById('app_promo_cube_3_D').style.backgroundImage = 'url("https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[1].Name + '/cover.png")';

document.getElementById('app_promo_cube_3_E').style.backgroundImage = 'url("https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[1].Name + '/cover.png")';

document.getElementById('app_promo_cube_4_A').style.backgroundImage = 'url("https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[1].Name + '/cover.png")';

document.getElementById('app_promo_cube_4_B').style.backgroundImage = 'url("https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[1].Name + '/cover.png")';

document.getElementById('app_promo_cube_4_C').style.backgroundImage = 'url("https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[1].Name + '/cover.png")';

document.getElementById('app_promo_cube_4_D').style.backgroundImage = 'url("https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[1].Name + '/cover.png")';

document.getElementById('app_promo_cube_4_E').style.backgroundImage = 'url("https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[1].Name + '/cover.png")';

document.getElementById('app_promo_cube_5_A').style.backgroundImage = 'url("https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[1].Name + '/cover.png")';

document.getElementById('app_promo_cube_5_B').style.backgroundImage = 'url("https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[1].Name + '/cover.png")';

document.getElementById('app_promo_cube_5_C').style.backgroundImage = 'url("https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[1].Name + '/cover.png")';

document.getElementById('app_promo_cube_5_D').style.backgroundImage = 'url("https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[1].Name + '/cover.png")';

document.getElementById('app_promo_cube_5_E').style.backgroundImage = 'url("https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[1].Name + '/cover.png")';

document.getElementById('app_promo_cube_6_A').style.backgroundImage = 'url("https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[1].Name + '/cover.png")';

document.getElementById('app_promo_cube_6_B').style.backgroundImage = 'url("https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[1].Name + '/cover.png")';

document.getElementById('app_promo_cube_6_C').style.backgroundImage = 'url("https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[1].Name + '/cover.png")';

document.getElementById('app_promo_cube_6_D').style.backgroundImage = 'url("https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[1].Name + '/cover.png")';

document.getElementById('app_promo_cube_6_E').style.backgroundImage = 'url("https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[1].Name + '/cover.png")';

document.getElementById('app_promo_cube_1').style.backgroundImage = 'url("https://github.com/Reviaco/Echo-Store/raw/master/Categories/Productivity/current.png")';

document.getElementById('app_promo_cube_2').style.backgroundImage = 'url("https://github.com/Reviaco/Echo-Store/raw/master/Categories/Games/current.png")';

document.getElementById('app_promo_cube_3').style.backgroundImage = 'url("https://github.com/Reviaco/Echo-Store/raw/master/Categories/Education/current.png")';

document.getElementById('app_promo_cube_4').style.backgroundImage = 'url("https://github.com/Reviaco/Echo-Store/raw/master/Categories/Religion/current.png")';

document.getElementById('app_promo_cube_5').style.backgroundImage = 'url("https://github.com/Reviaco/Echo-Store/raw/master/Categories/Shopping/current.png")';

document.getElementById('app_promo_cube_6').style.backgroundImage = 'url("https://github.com/Reviaco/Echo-Store/raw/master/Categories/Business/current.png")';

}
   }
                 $.ajax({
         method: 'POST',
         url: 'https://reviaco.tk/Echo/PHP/App_Request.php',
         data: {
           App_Name: "GoogleKeep"
         },
        success: function(data) {

     for (i = 0; i < data.length; i++) {
       $('#platforms_icons').append('<paper-icon-button id="' + data[i].Type + '" class="platform_icon" height="50" width="50" src="../../Media/Logos/' + data[i].Type + '.png"></paper-icon-button>');

         
     }
  

        }
       });