            var xmlhttp = new XMLHttpRequest();
var url = "http://localhost/Reviaco-OS/System/Data/Users.php";

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
    

    for (i = 0; i < arr.length; i++) {
console.log(arr[i].username);
         var Users_settings = "<paper-icon-item id=\"" + arr[i].username + "\"" + "><div class=\"avatar blue\"" + " item-icon></div><paper-item-body two-line><div>" + arr[i].username + "</div><div secondary>Jan 9 2014</div></paper-item-body><paper-icon-button icon=\"star\"" + " alt=\"favourite this!\"" + "></paper-icon-button></paper-icon-item>";

    }
   
    $("#users_listbox").append(Users_settings);
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
$('#main_page').fadeToggle(1000);
$('#setting_page').fadeToggle(1000);
               
                    $('#back_btn').fadeToggle(1000);
var setting = event.currentTarget.id;
                    document.getElementById("setting_cover_icon").src = "Media/" + setting + ".png";

$("#"+ setting +"_settings").fadeToggle(1000);     
document.getElementById("title").innerHTML = setting;



                });
                $(document).on("click", "#back_btn", function (event) {

event.stopPropagation();
$('#main_page').fadeToggle(1000);
$('#setting_page').fadeToggle(1000);
$('#back_btn').fadeToggle(1000);

$("section").fadeToggle(1000);     

document.getElementById("title").innerHTML = "Settings";



                });
                $(document).on("click", "paper-icon-item", function (event) {

event.stopPropagation();
$('#Users_settings').fadeToggle(1000);
$('#Users_settings_sub').fadeToggle(1000);
               
                    
var username = event.currentTarget.id;
         var Users_settings_sub = "<h4>" + username + "</h4><paper-icon-item id=\"" + username + "delete\"" + "><div class=\"avatar blue\"" + " item-icon></div><paper-item-body two-line><div>Delete Account</div><div secondary>Delete the account named " + username + "</div></paper-item-body><paper-icon-button icon=\"star\"" + " alt=\"favourite this!\"" + "></paper-icon-button></paper-icon-item>";

$("#users_listbox_sub").append(Users_settings_sub);

                });



