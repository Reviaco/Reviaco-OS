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
    var out = "<center class=\"users\"" + ">";

    for (i = 0; i < arr.length; i++) {

        out += "<div class=\"user-profile\"" + "><img src=\"../../Media/Avatars/6.svg\"" + "><div class=\"user-details\"" + "><h4> " + arr[i].username + "</h4></p></div></center>";

    }
    out += "</div>";
    $("body").append(out);
}