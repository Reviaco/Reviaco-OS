function submitForm() {
 document.getElementById('form').submit();
 $(".box").fadeOut();

}
$(document).ready(function() {
 $('#password').keypress(function(e) {
  var key = e.which;
  if (key == 13) // the enter key code
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
 if (navigator.onLine) {
  document.getElementById("connection_status_indicator").src = "../../Media/Indicators/EthernetOn.png";
 } else {
  document.getElementById("connection_status_indicator").src = "../../Media/Indicators/EthernetOff.png";
 }
}

function checkTime(i) {
 if (i < 10) {
  i = "0" + i
 }; // add zero in front of numbers < 10
 return i;
}
window.onload = startTime;

setInterval(check_connection, 3000);

function check_connection() {

 if (navigator.onLine) {
  document.getElementById("connection_status_indicator").src = "../../Media/Indicators/EthernetOn.png";
 } else {
  document.getElementById("connection_status_indicator").src = "../../Media/Indicators/EthernetOff.png";
 }
}
$.ajax({
 method: 'POST',
 url: 'https://reviaco.os/System/PHP/Data/Users.php',
 success: function(data) {

  var i;
  var out = '<div id="users" class="carousel users">';
  for (i = 0; i < data.length; i++) {

   out += '<div class="carousel-item"><div id="' + data[i].username + '" class="user-profile" onclick="signinForm(\'' + data[i].username + '\');"><img src="../../../Users/' + data[i].username + '/Profile/Avatar.jpg"><div class="user-details ' + data[i].username + '_name"><h4 class="user_avatar_title">' + data[i].username + '</h4></div></div></div>';

  }
  out += '</div>';
  $('body').append(out);
 }
});

function signinForm(username) {

 event.stopPropagation();
 $('#users').fadeOut();
 $('.box').fadeIn();
 document.getElementById('username').value = username;

};

function cancel() {

 $('#users').fadeIn();
 $(".box").fadeOut();

}