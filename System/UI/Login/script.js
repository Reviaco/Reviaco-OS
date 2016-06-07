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
}