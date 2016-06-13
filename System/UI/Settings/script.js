                                           function account_deletiton(username) {
                                              
                   $.ajax({
                                        method: "POST"
                                        , url: "PHP/account-deletition.php"
                                        , data: {
                                            dataString: username
                                        }
                                    })
                                           }                             function app_deletiton(app_name) {
                                              
                   $.ajax({
                                        method: "POST"
                                        , url: "PHP/app-deletition.php"
                                        , data: {
                                            dataString: app_name
                                        }
                                    })

         
}
var xmlhttp1 = new XMLHttpRequest();
   var url1 = "http://localhost/Reviaco-OS/System/PHP/Data/Apps.php";

   xmlhttp1.onreadystatechange = function() {
     if (xmlhttp1.readyState == 4 && xmlhttp1.status == 200) {
       app_list(xmlhttp1.responseText);
     }
   }
   xmlhttp1.open('GET', url1, true);
   xmlhttp1.send();

   function app_list(response) {
     var arr = JSON.parse(response);
     var i;
     var out = '<div class="app">';

     for (i = 0; i < arr.length; i++) {
out += '<paper-icon-item id="' + arr[i].Name + '" class="user"><iron-image class="app_icon" src="../../../Users/default/Apps/Linux Apps/Icons/' + arr[i].Name + '.png"  width="50" height="50" item-icon></iron-image><paper-item-body two-line><div>' + arr[i].Name +'</div><div secondary>' + arr[i].Description +'</div></paper-item-body><paper-icon-button icon="star" alt="favourite this!"></paper-icon-button></paper-icon-item>'


     }
     out += '</div>';
     $('#apps_listbox').append(out);
   }


var xmlhttp = new XMLHttpRequest();
var url = "http://localhost/Reviaco-OS/System/PHP/Data/Users.php";

xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        app_showcase(xmlhttp.responseText);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

function app_showcase(response) {
    var arr = JSON.parse(response);
    var i;
     var users_settings = '<div class="users">';

  for (i = 0; i < arr.length; i++) {
          users_settings += '<paper-icon-item id="'+arr[i].username+'" class="user"><div class="avatar blue" item-icon></div><paper-item-body two-line><div>'+arr[i].username+'</div><div secondary>Jan 9 2014</div></paper-item-body><paper-icon-button icon="star" alt="favourite this!"></paper-icon-button></paper-icon-item>';

    }
   users_settings += '</div>';
    document.getElementById('users_listbox').innerHTML = users_settings;
}

addEventListener('WebComponentsReady', function () {

            var appHeader = document.querySelector('app-header');
            var bgHeader = document.querySelector('.bg-header');
            var appHeaderHeight = appHeader.offsetHeight;
            var bgHeaderHeight = bgHeader.offsetHeight;

            var transformBgHeader = function () {
                var y = window.scrollY;
                if (y <= bgHeaderHeight) {
                    y = 1.5 * y;
                }
                var s = bgHeader.style;
                s.transform = s.webkitTransform = 'translate3d(0,' + -y + 'px,0)';
                appHeader.shadow = y > bgHeaderHeight - appHeaderHeight;
            }

            transformBgHeader();

            addEventListener('scroll', transformBgHeader);

        });
                $(document).on("click", "paper-card", function (event) {

event.stopPropagation();
$('#main_page').fadeOut(500);
$('#setting_page').fadeIn(500);
               
                    $('#back_btn').fadeToggle(500);
var setting = event.currentTarget.id;
                    document.getElementById('setting_cover_icon').src = "Media/" + setting + ".png";

$('#'+ setting +'_settings').fadeIn(500);     
document.getElementById('title').innerHTML = setting;



                });
                $(document).on('click', '#back_btn', function (event) {

event.stopPropagation();
$( "#chart:visible" ).empty();
$('#setting_page').fadeOut(500);
$('#main_page').fadeIn(500);

$('#back_btn').fadeToggle(500);

$("section").fadeOut(500);   

document.getElementById('title').innerHTML = 'Settings';



                });

               
                    

$(document).on('click', '.app', function (event) {
$('#Apps_settings').fadeOut(500);

$('#Apps_settings_sub').fadeIn(500);
event.stopPropagation();

               
                    
var app_name = event.currentTarget.id;
        $('#apps_listbox_sub').find('h4').html(app_name);
$('#apps_listbox_sub').find('paper-icon-item').attr('onclick','app_deletiton( "'+ app_name +'")');
                    $('#apps_listbox_sub').find('#description').html('Delete the account named ' + app_name + '');


                });
                $(document).on('click', '.user', function (event) {

event.stopPropagation();
$('#Users_settings').fadeOut(500);
$('#Users_settings_sub').fadeIn(500);
               
                    
var username = event.currentTarget.id;
        $('#users_listbox_sub').find('h4').html(username);
$('#users_listbox_sub').find('paper-icon-item').attr('onclick','app_deletiton( "'+ username +'")');
                    $('#users_listbox_sub').find('#description').html('Delete the account named ' + username + '');



                });

$(document).on('click', '.bubble-wrap', function () {
                
                    $('.bubble').toggleClass('active');
                    $('.bubbleback').toggleClass('active');
    $('#add_user_btn_icon').toggle();
    $('#register_form_container').fadeToggle(500);
                });
$(document).on('click', '.sumbit_cancel', function () {
                
                    $('.bubble').toggleClass('active');
                    $('.bubbleback').toggleClass('active');
    $('#add_user_btn_icon').toggle();
    $('#register_form_container').fadeToggle(500);
                });
function submitForm() {
  document.getElementById("adduser_form").submit();
}
var get_version = new XMLHttpRequest();
var get_version_url = "../../../version.json";

get_version.onreadystatechange = function() {
    if (get_version.readyState == 4 && get_version.status == 200) {
        var myArr = JSON.parse(get_version.responseText);
        myFunction(myArr);
    }
};
get_version.open("GET", get_version_url, true);
get_version.send();
$('#version').html(info[1].version);
$('#build_date').html(info[1].build_date);
 
