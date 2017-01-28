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
app_name =  $( this ).attr("app_name");;
type =  $( this ).attr("type");;
document.getElementById('appIntroduction').src = 'https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + type + '/' + app_name + '/promo.mp4';
$("#install_btn").attr("app_name", app_name);
$("#install_btn").attr("type", type);
$('#home').fadeOut();
$('#app_page').fadeIn();
$('#back_btn').fadeIn();
});

$(document).on('click', '.app_promo_slide', function( event ) {
app_name =  $( this ).attr("app_name");;
type =  $( this ).attr("type");;
document.getElementById('appIntroduction').src = 'https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + type + '/' + app_name + '/promo.mp4';
$("#install_btn").attr("app_name", app_name);
$("#install_btn").attr("type", type);
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
     app_name = $( this ).attr('app_name');;
     type = $( this ).attr('type');;
     $.ajax({
         method: 'POST',
         url: '../../PHP/Linux Commands/install.php',
         data: {
           app_name: app_name,
           type: type
         }
       });
});

var get_apps_promo_info = new XMLHttpRequest();
var get_apps_promo_info_url = "https://raw.githubusercontent.com/Reviaco/Echo-Store/master/Apps_Promo_Info.json";

get_apps_promo_info.onreadystatechange = function() {
    if (get_apps_promo_info.readyState == 4 && get_apps_promo_info.status == 200) {
        var myArr = JSON.parse(get_apps_promo_info.responseText);
        myFunction(myArr);
    }
};

get_apps_promo_info.open("GET", get_apps_promo_info_url, true);
get_apps_promo_info.send();

function myFunction(info) {
 $("#app_promo_slide1").attr("app_name", info[0].app_promo_slide_1_name);
 $("#app_promo_slide2").attr("app_name", info[0].app_promo_slide_2_name);
 $("#app_promo_slide3").attr("app_name", info[0].app_promo_slide_3_name);
 $("#app_promo_slide4").attr("app_name", info[0].app_promo_slide_4_name);
 $("#app_promo_slide5").attr("app_name", info[0].app_promo_slide_5_name);
 $("#app_promo_cube_1_A").attr("app_name", info[0].app_promo_cube_1_A_name);
 $("#app_promo_cube_1_B").attr("app_name", info[0].app_promo_cube_1_B_name);
 $("#app_promo_cube_1_C").attr("app_name", info[0].app_promo_cube_1_C_name);
 $("#app_promo_cube_1_D").attr("app_name", info[0].app_promo_cube_1_D_name);
 $("#app_promo_cube_1_E").attr("app_name", info[0].app_promo_cube_1_E_name);
 $("#app_promo_cube_2_A").attr("app_name", info[0].app_promo_cube_2_A_name);
 $("#app_promo_cube_2_B").attr("app_name", info[0].app_promo_cube_2_B_name);
 $("#app_promo_cube_2_C").attr("app_name", info[0].app_promo_cube_2_C_name);
 $("#app_promo_cube_2_D").attr("app_name", info[0].app_promo_cube_2_D_name);
 $("#app_promo_cube_2_E").attr("app_name", info[0].app_promo_cube_2_E_name);
 $("#app_promo_cube_3_A").attr("app_name", info[0].app_promo_cube_3_A_name);
 $("#app_promo_cube_3_B").attr("app_name", info[0].app_promo_cube_3_B_name);
 $("#app_promo_cube_3_C").attr("app_name", info[0].app_promo_cube_3_C_name);
 $("#app_promo_cube_3_D").attr("app_name", info[0].app_promo_cube_3_D_name);
 $("#app_promo_cube_3_E").attr("app_name", info[0].app_promo_cube_3_E_name);
 $("#app_promo_cube_4_A").attr("app_name", info[0].app_promo_cube_4_A_name);
 $("#app_promo_cube_4_B").attr("app_name", info[0].app_promo_cube_4_B_name);
 $("#app_promo_cube_4_C").attr("app_name", info[0].app_promo_cube_4_C_name);
 $("#app_promo_cube_4_D").attr("app_name", info[0].app_promo_cube_4_D_name);
 $("#app_promo_cube_4_E").attr("app_name", info[0].app_promo_cube_4_E_name);
 $("#app_promo_cube_5_A").attr("app_name", info[0].app_promo_cube_5_A_name);
 $("#app_promo_cube_5_B").attr("app_name", info[0].app_promo_cube_5_B_name);
 $("#app_promo_cube_5_C").attr("app_name", info[0].app_promo_cube_5_C_name);
 $("#app_promo_cube_5_D").attr("app_name", info[0].app_promo_cube_5_D_name);
 $("#app_promo_cube_5_E").attr("app_name", info[0].app_promo_cube_5_E_name);
 $("#app_promo_cube_6_A").attr("app_name", info[0].app_promo_cube_6_A_name);
 $("#app_promo_cube_6_B").attr("app_name", info[0].app_promo_cube_6_B_name);
 $("#app_promo_cube_6_C").attr("app_name", info[0].app_promo_cube_6_C_name);
 $("#app_promo_cube_6_D").attr("app_name", info[0].app_promo_cube_6_D_name);
 $("#app_promo_cube_6_E").attr("app_name", info[0].app_promo_cube_6_E_name);

 $("#app_promo_slide1").attr("type", info[0].app_promo_slide_1_type);
 $("#app_promo_slide2").attr("type", info[0].app_promo_slide_2_type);
 $("#app_promo_slide3").attr("type", info[0].app_promo_slide_3_type);
 $("#app_promo_slide4").attr("type", info[0].app_promo_slide_4_type);
 $("#app_promo_slide5").attr("type", info[0].app_promo_slide_5_type);
 $("#app_promo_cube_1_A").attr("type", info[0].app_promo_cube_1_A_type);
 $("#app_promo_cube_1_B").attr("type", info[0].app_promo_cube_1_B_type);
 $("#app_promo_cube_1_C").attr("type", info[0].app_promo_cube_1_C_type);
 $("#app_promo_cube_1_D").attr("type", info[0].app_promo_cube_1_D_type);
 $("#app_promo_cube_1_E").attr("type", info[0].app_promo_cube_1_E_type);
 $("#app_promo_cube_2_A").attr("type", info[0].app_promo_cube_2_A_type);
 $("#app_promo_cube_2_B").attr("type", info[0].app_promo_cube_2_B_type);
 $("#app_promo_cube_2_C").attr("type", info[0].app_promo_cube_2_C_type);
 $("#app_promo_cube_2_D").attr("type", info[0].app_promo_cube_2_D_type);
 $("#app_promo_cube_2_E").attr("type", info[0].app_promo_cube_2_E_type);
 $("#app_promo_cube_3_A").attr("type", info[0].app_promo_cube_3_A_type);
 $("#app_promo_cube_3_B").attr("type", info[0].app_promo_cube_3_B_type);
 $("#app_promo_cube_3_C").attr("type", info[0].app_promo_cube_3_C_type);
 $("#app_promo_cube_3_D").attr("type", info[0].app_promo_cube_3_D_type);
 $("#app_promo_cube_3_E").attr("type", info[0].app_promo_cube_3_E_type);
 $("#app_promo_cube_4_A").attr("type", info[0].app_promo_cube_4_A_type);
 $("#app_promo_cube_4_B").attr("type", info[0].app_promo_cube_4_B_type);
 $("#app_promo_cube_4_C").attr("type", info[0].app_promo_cube_4_C_type);
 $("#app_promo_cube_4_D").attr("type", info[0].app_promo_cube_4_D_type);
 $("#app_promo_cube_4_E").attr("type", info[0].app_promo_cube_4_E_type);
 $("#app_promo_cube_5_A").attr("type", info[0].app_promo_cube_5_A_type);
 $("#app_promo_cube_5_B").attr("type", info[0].app_promo_cube_5_B_type);
 $("#app_promo_cube_5_C").attr("type", info[0].app_promo_cube_5_C_type);
 $("#app_promo_cube_5_D").attr("type", info[0].app_promo_cube_5_D_type);
 $("#app_promo_cube_5_E").attr("type", info[0].app_promo_cube_5_E_type);
 $("#app_promo_cube_6_A").attr("type", info[0].app_promo_cube_6_A_type);
 $("#app_promo_cube_6_B").attr("type", info[0].app_promo_cube_6_B_type);
 $("#app_promo_cube_6_C").attr("type", info[0].app_promo_cube_6_C_type);
 $("#app_promo_cube_6_D").attr("type", info[0].app_promo_cube_6_D_type);
 $("#app_promo_cube_6_E").attr("type", info[0].app_promo_cube_6_E_type);

document.getElementById('app_promo_slide1').src = 'https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[0].app_promo_slide_1_type + '/' + info[0].app_promo_slide_1_name + '/cover.jpg';

document.getElementById('app_promo_slide2').src = 'https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[0].app_promo_slide_2_type + '/' + info[0].app_promo_slide_2_name + '/cover.jpg';

document.getElementById('app_promo_slide3').src = 'https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[0].app_promo_slide_3_type + '/' + info[0].app_promo_slide_3_name + '/cover.jpg';

document.getElementById('app_promo_slide4').src = 'https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[0].app_promo_slide_4_type + '/' + info[0].app_promo_slide_4_name + '/cover.jpg';

document.getElementById('app_promo_slide5').src = 'https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[0].app_promo_slide_5_type + '/' + info[0].app_promo_slide_5_name + '/cover.jpg';

document.getElementById('app_promo_cube_1_A').style.backgroundImage = "url('https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[0].app_promo_cube_1_A_type + '/' + info[0].app_promo_cube_1_A_name + '/cover.jpg')";

document.getElementById('app_promo_cube_1_B').style.backgroundImage = "url('https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[0].app_promo_cube_1_B_type + '/' + info[0].app_promo_cube_1_B_name + '/cover.jpg')";

document.getElementById('app_promo_cube_1_C').style.backgroundImage = "url('https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[0].app_promo_cube_1_C_type + '/' + info[0].app_promo_cube_1_C_name + '/cover.jpg')";

document.getElementById('app_promo_cube_1_D').style.backgroundImage = "url('https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[0].app_promo_cube_1_D_type + '/' + info[0].app_promo_cube_1_D_name + '/cover.jpg')";

document.getElementById('app_promo_cube_1_E').style.backgroundImage = "url('https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[0].app_promo_cube_1_E_type + '/' + info[0].app_promo_cube_1_E_name + '/cover.jpg')";

document.getElementById('app_promo_cube_2_A').style.backgroundImage = "url('https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[0].app_promo_cube_2_A_type + '/' + info[0].app_promo_cube_2_A_name + '/cover.jpg')";

document.getElementById('app_promo_cube_2_B').style.backgroundImage = "url('https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[0].app_promo_cube_2_B_type + '/' + info[0].app_promo_cube_2_B_name + '/cover.jpg')";

document.getElementById('app_promo_cube_2_C').style.backgroundImage = "url('https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[0].app_promo_cube_2_C_type + '/' + info[0].app_promo_cube_2_C_name + '/cover.jpg')";

document.getElementById('app_promo_cube_2_D').style.backgroundImage = "url('https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[0].app_promo_cube_2_D_type + '/' + info[0].app_promo_cube_2_D_name + '/cover.jpg')";

document.getElementById('app_promo_cube_2_E').style.backgroundImage = "url('https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[0].app_promo_cube_2_E_type + '/' + info[0].app_promo_cube_2_E_name + '/cover.jpg')";

document.getElementById('app_promo_cube_3_A').style.backgroundImage = "url('https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[0].app_promo_cube_3_A_type + '/' + info[0].app_promo_cube_3_A_name + '/cover.jpg')";

document.getElementById('app_promo_cube_3_B').style.backgroundImage = "url('https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[0].app_promo_cube_3_B_type + '/' + info[0].app_promo_cube_3_B_name + '/cover.jpg')";

document.getElementById('app_promo_cube_3_C').style.backgroundImage = "url('https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[0].app_promo_cube_3_C_type + '/' + info[0].app_promo_cube_3_C_name + '/cover.jpg')";

document.getElementById('app_promo_cube_3_D').style.backgroundImage = "url('https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[0].app_promo_cube_3_D_type + '/' + info[0].app_promo_cube_3_D_name + '/cover.jpg')";

document.getElementById('app_promo_cube_3_E').style.backgroundImage = "url('https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[0].app_promo_cube_3_E_type + '/' + info[0].app_promo_cube_3_E_name + '/cover.jpg')";

document.getElementById('app_promo_cube_4_A').style.backgroundImage = "url('https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[0].app_promo_cube_4_A_type + '/' + info[0].app_promo_cube_4_A_name + '/cover.jpg')";

document.getElementById('app_promo_cube_4_B').style.backgroundImage = "url('https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[0].app_promo_cube_4_B_type + '/' + info[0].app_promo_cube_4_B_name + '/cover.jpg')";

document.getElementById('app_promo_cube_4_C').style.backgroundImage = "url('https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[0].app_promo_cube_4_C_type + '/' + info[0].app_promo_cube_4_C_name + '/cover.jpg')";

document.getElementById('app_promo_cube_4_D').style.backgroundImage = "url('https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[0].app_promo_cube_4_D_type + '/' + info[0].app_promo_cube_4_D_name + '/cover.jpg')";

document.getElementById('app_promo_cube_4_E').style.backgroundImage = "url('https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[0].app_promo_cube_4_E_type + '/' + info[0].app_promo_cube_4_E_name + '/cover.jpg')";

document.getElementById('app_promo_cube_5_A').style.backgroundImage = "url('https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[0].app_promo_cube_5_A_type + '/' + info[0].app_promo_cube_5_A_name + '/cover.jpg')";

document.getElementById('app_promo_cube_5_B').style.backgroundImage = "url('https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[0].app_promo_cube_5_B_type + '/' + info[0].app_promo_cube_5_B_name + '/cover.jpg')";

document.getElementById('app_promo_cube_5_C').style.backgroundImage = "url('https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[0].app_promo_cube_5_C_type + '/' + info[0].app_promo_cube_5_C_name + '/cover.jpg')";

document.getElementById('app_promo_cube_5_D').style.backgroundImage = "url('https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[0].app_promo_cube_5_D_type + '/' + info[0].app_promo_cube_5_D_name + '/cover.jpg')";

document.getElementById('app_promo_cube_5_E').style.backgroundImage = "url('https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[0].app_promo_cube_5_E_type + '/' + info[0].app_promo_cube_5_E_name + '/cover.jpg')";

document.getElementById('app_promo_cube_6_A').style.backgroundImage = "url('https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[0].app_promo_cube_6_A_type + '/' + info[0].app_promo_cube_6_A_name_name + '/cover.jpg')";

document.getElementById('app_promo_cube_6_B').style.backgroundImage = "url('https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[0].app_promo_cube_6_B_type + '/' + info[0].app_promo_cube_6_B_name + '/cover.jpg')";

document.getElementById('app_promo_cube_6_C').style.backgroundImage = "url('https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[0].app_promo_cube_6_C_type + '/' + info[0].app_promo_cube_6_C_name + '/cover.jpg')";

document.getElementById('app_promo_cube_6_D').style.backgroundImage = "url('https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[0].app_promo_cube_6_D_type + '/' + info[0].app_promo_cube_6_D_name + '/cover.jpg')";

document.getElementById('app_promo_cube_6_E').style.backgroundImage = "url('https://github.com/Reviaco/Echo-Store/raw/master/Apps/' + info[0].app_promo_cube_6_E_type + '/' + info[0].app_promo_cube_6_E_name + '/cover.jpg')";

document.getElementById('app_promo_cube_1').style.backgroundImage = "url('https://github.com/Reviaco/Echo-Store/raw/master/Categories/' + info[0].app_promo_cube_1_category + '/1.png')";

document.getElementById('app_promo_cube_2').style.backgroundImage = "url('https://github.com/Reviaco/Echo-Store/raw/master/Categories/' + info[0].app_promo_cube_2_category + '/1.png')";

document.getElementById('app_promo_cube_3').style.backgroundImage = "url('https://github.com/Reviaco/Echo-Store/raw/master/Categories/' + info[0].app_promo_cube_3_category + '/1.png')";

document.getElementById('app_promo_cube_4').style.backgroundImage = "url('https://github.com/Reviaco/Echo-Store/raw/master/Categories/' + info[0].app_promo_cube_4_E_category + '/1.png')";

document.getElementById('app_promo_cube_5').style.backgroundImage = "url('https://github.com/Reviaco/Echo-Store/raw/master/Categories/' + info[0].app_promo_cube_5_E_category + '/1.png')";

document.getElementById('app_promo_cube_6').style.backgroundImage = "url('https://github.com/Reviaco/Echo-Store/raw/master/Categories/' + info[0].app_promo_cube_6_category + '/1.png')";

}
