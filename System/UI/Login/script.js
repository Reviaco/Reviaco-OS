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
    document.getElementById("connection_status_indicator").src = "../../Media/Indicators/EthernetOff.png";
  }
  else
  {
    document.getElementById("connection_status_indicator").src = "../../Media/Indicators/EthernetOn.png";
  }
}
var get_users = new XMLHttpRequest();
var get_users_url = "http://localhost/Reviaco-OS/System/PHP/Data/Users.php";

get_users.onreadystatechange = function () {
    if (get_users.readyState == 4 && get_users.status == 200) {
        get_users_function(get_users.responseText);
    }
}
get_users.open("GET", get_users_url, true);
get_users.send();

function get_users_function(response) {
    var arr = JSON.parse(response);
    var i;
    var out = "<div class=\"users\"" + ">";

    for (i = 0; i < arr.length; i++) {

        out += "<div id=\"" + arr[i].username + "\"" + " class=\"user-profile\"" + "><img src=\"../../Media/Avatars/6.svg\"" + "><div class=\"user-details " + arr[i].username + "_name\"" + "><h4>" + arr[i].username + "</h4></div></div>";

    }
    out += "</div>";
    $("body").append(out);
}
                $(document).on("click", ".user-profile", function (event) {

event.stopPropagation();

                   
  
 
                   $( ".user-profile" ).css("position", "fixed").animate({
    
    "left": "45%",
    
    "top": "25%"
  }, 500);
 
                   $( ".user-profile img" ).animate({
    
    "height": 100,
    
    "width": 100
  }, 500);
                    
        $(".box").fadeIn();  
                    var username = $( "#" + event.currentTarget.id + "" ).find( "h4" ).html();
                    
document.getElementById("username").value = username;




                });
function submitForm() {
  document.getElementById("form").submit();
    $(".box").fadeOut(); 
    $( ".user-profile img" ).animate({
    
    "height": 200,
    
    "width": 200
  }, 500);
}
