                                           function account_deletiton(username) {
                                               console.log(username);
                   $.ajax({
                                        method: "POST"
                                        , url: "PHP/account-deletition.php"
                                        , data: {
                                            dataString: username
                                        }
                                    })

         
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
$('#main_page').fadeToggle(500);
$('#setting_page').fadeToggle(500);
               
                    $('#back_btn').fadeToggle(500);
var setting = event.currentTarget.id;
                    document.getElementById('setting_cover_icon').src = "Media/" + setting + ".png";

$('#'+ setting +'_settings').fadeToggle(500);     
document.getElementById('title').innerHTML = setting;



                });
                $(document).on('click', '#back_btn', function (event) {

event.stopPropagation();

$('#setting_page').fadeOut(500);
$('#main_page').fadeIn(500);

$('#back_btn').fadeToggle(500);

$("section").fadeOut(500);   

document.getElementById('title').innerHTML = 'Settings';



                });

               
                    


                $(document).on('click', '.user', function (event) {

event.stopPropagation();
$('#Users_settings').fadeOut(500);
$('#Users_settings_sub').fadeIn(500);
               
                    
var username = event.currentTarget.id;
         var users_settings_sub = '<h4>' + username + '</h4><paper-icon-item onclick="account_deletiton(\''+username+'\')" id="deletition"><div class="avatar blue" item-icon></div><paper-item-body two-line><div>Delete Account</div><div secondary>Delete the account named ' + username + '</div></paper-item-body><paper-icon-button icon="star" alt="favourite this!"></paper-icon-button></paper-icon-item>';

document.getElementById('users_listbox_sub').innerHTML = users_settings_sub;


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