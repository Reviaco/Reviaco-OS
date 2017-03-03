function submitForm() {
  document.getElementById('form').submit();
    $(".box").fadeOut(); 
   
} 
$(document).ready(function(){
      $('#password').keypress(function (e) {
 var key = e.which;
 if(key == 13)  // the enter key code
  {
submitForm();
  }
  });
      $('.carousel').carousel();
    });
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
if(navigator.onLine)
  {
    document.getElementById("connection_status_indicator").src = "../../Media/Indicators/EthernetOn.png";
  }
  else
  {
    document.getElementById("connection_status_indicator").src = "../../Media/Indicators/EthernetOff.png";
  }
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
window.onload = startTime;

setInterval(check_connection, 3000);

function check_connection() {

if(navigator.onLine)
  {
    document.getElementById("connection_status_indicator").src = "../../Media/Indicators/EthernetOn.png";
  }
  else
  {
    document.getElementById("connection_status_indicator").src = "../../Media/Indicators/EthernetOff.png";
  }
}
var get_users = new XMLHttpRequest();
var get_users_url = "../../PHP/Data/Users.php";

get_users.onreadystatechange = function () {
    if (get_users.readyState == 4 && get_users.status == 200) {
        get_users_function(get_users.responseText);
    }
}
get_users.open('GET', get_users_url, true);
get_users.send();

function get_users_function(response) {
    var arr = JSON.parse(response);
    var i;
    var out = '<div id="users" class="carousel users">';

    for (i = 0; i < arr.length; i++) {

        out += '<div class="carousel-item"><div id="' + arr[i].username + '" class="user-profile"><img src="../../../Users/' + arr[i].username + '/Profile/Avatar.jpg"><div class="user-details ' + arr[i].username + '_name"><h4 class="user_avatar_title">' + arr[i].username + '</h4></div></div></div>';

    }
    out += '</div>';
    $('body').append(out);
}
                $(document).on('click', '.user-profile', function (event) {

event.stopPropagation();

                    
          $('#users').fadeOut();                 
        $('.box').fadeIn();  
                    var username = $( '#' + event.currentTarget.id + '' ).find( 'h4' ).html();
                    
document.getElementById('username').value = username;




                });



function cancel() {
    $('#users').fadeIn();  
    $(".box").fadeOut();

}
