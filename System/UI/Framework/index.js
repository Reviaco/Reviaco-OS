            $(function () {
                var xmlhttp2 = new XMLHttpRequest();
                var url2 = "http://localhost/Reviaco-OS/System/Data/Notifications.php";

                xmlhttp2.onreadystatechange = function () {
                    if (xmlhttp2.readyState == 4 && xmlhttp2.status == 200) {
                        notifications(xmlhttp2.responseText);
                    }
                }
                xmlhttp2.open("GET", url2, true);
                xmlhttp2.send();

                function notifications(response) {
                    var arr = JSON.parse(response);
                    var i;

                    for (i = 0; i < arr.length; i++) {
                        var notification = "<li class=\"one red " + arr[i].Title + "\"" + "><span class=\"task-title\"" + ">" + arr[i].Title + "</span><span class=\"task-time\"" + ">5pm</span><span class=\"task-cat\"" + ">" + arr[i].Description + "</span></li>";

                    }

                    $(".tasks").append(notification);
                }
                var xmlhttp = new XMLHttpRequest();
                var url = "http://localhost/Reviaco-OS/System/Data/Apps.php";

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
                    var out = "<div class=\"app_showcase\"" + ">";

                    for (i = 0; i < arr.length; i++) {

                        out += "<div class=\"mySlides w3-animate-fading " + arr[i].Name + "\"" + "><paper-card heading=\"" + arr[i].Name + "\"" + "image=\"Apps/" + arr[i].Name + "/Media/icon.png\"" + " class=\"lime\"" + "><div class=\"card-content\"" + ">" + arr[i].Description + "</div></paper-card></div>";

                    }
                    out += "</div>";
                    $("body").append(out);
                }
                $(".bubble-wrap").click(function () {
                    $(".bubble").toggleClass("active");
                    $(".bubbleback").toggleClass("active");
                    $(".first").toggleClass("active");
                    $(".second").toggleClass("active");
                    $(".third").toggleClass("active");
                });
                $('.toggle-btn').click(function () {
                    $('.filter-btn').toggleClass('open');

                });

                $('.filter-btn a').click(function () {
                    $('.filter-btn').removeClass('open');

                });

            });

            $('#all').click(function () {

                $('ul.tasks li').slideDown(300);

            });

            $('#one').click(function () {
                $('.tasks li:not(.one)').slideUp(300, function () {
                    $('.one').slideDown(300);

                });
            });

            $('#two').click(function () {
                $('.tasks li:not(.two)').slideUp(300, function () {
                    $('.two').slideDown(300);

                });
            });
            $('#three').click(function () {
                $('.tasks li:not(.three)').slideUp(300, function () {
                    $('.three').slideDown(300);

                });
            });
            var myIndex = 0;
            carousel();

            function carousel() {
                var i;
                var x = document.getElementsByClassName("mySlides");
                for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";
                }
                myIndex++;
                if (myIndex > x.length) {
                    myIndex = 1
                }
                x[myIndex - 1].style.display = "block";
                setTimeout(carousel, 5000);
            }

            function notification_centre_toggle() {

                $(".notification_centre").toggle("slide", "{direction: left}");

            }