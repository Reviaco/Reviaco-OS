            $(function () {
                function sound_hud_hide() {
    $('#sound_hud').slideUp(1000);
}
                    var get_volume = new XMLHttpRequest();
                var url_get_volume = "http://localhost/Reviaco-OS/System/PHP/Data/Volume.php";

                get_volume.onreadystatechange = function () {
                    if (get_volume.readyState == 4 && get_volume.status == 200) {
                        get_volume(get_volume.responseText);
                    }
                }
                get_volume.open('GET', url_get_volume, true);
                get_volume.send();

                function get_volume(response) {
                    var arr = JSON.parse(response);
                    
                }
                var volume_current = 0;
                $('body').on( 'keydown', function( event ){


var x = event.which;
    if (x == 175) {
        
        $('#sound_hud').slideDown(1000);
volume_current += 1;
        document.getElementById('volume_slider').value = volume_current;
setTimeout(sound_hud_hide, 3000);

        
    }
    if (x == 174) {
$('#sound_hud').slideDown(1000);
volume_current -= 1;
        document.getElementById('volume_slider').value = volume_current;
setTimeout(sound_hud_hide, 3000);

    }
});
                $.fn.extend({
                    animateCss: function (animationName) {
                        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                        $(this).addClass('animated ' + animationName).one(animationEnd, function () {
                            $(this).removeClass('animated ' + animationName);
                        });
                    }
                });
                var xmlhttp2 = new XMLHttpRequest();
                var url2 = "http://localhost/Reviaco-OS/System/PHP/Data/Notifications.php";

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
                var url = "http://localhost/Reviaco-OS/System/PHP/Data/Apps.php";

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

                        out += "<div class=\"mySlides w3-animate-fading " + arr[i].Name + "\"" + "><paper-card id=\"" + arr[i].Name + "\"" + " heading=\"" + arr[i].Name + "\"" + "image=\"../../../Apps/" + arr[i].Name + "/Media/icon.png\"" + " class=\"lime\"" + "><div class=\"card-content\"" + ">" + arr[i].Description + "</div></paper-card></div>";

                    }
                    out += "</div>";
                    $("body").append(out);
                }
                $(document).on("click", "paper-card", function (event) {

                    $("body").append("<iframe  class=\"current_window\"" + "id=\"" + event.currentTarget.id + "_iframe\"" + "src=\"http://localhost/Reviaco-OS/Apps/" + event.currentTarget.id + "/\"" + "></iframe>");

                    $("#" + event.currentTarget.id + "_iframe").animateCss('bounce');
                    $("#" + event.currentTarget.id + "_iframe").fadeIn(400);


                    var htmlString = $("." + event.currentTarget.id + "").html();
                    $.ajax({
                            method: "POST"
                            , url: "../../PHP/Linux Commands/launch.php"
                            , data: {
                                dataString: htmlString
                            }
                        })
                        .done(function (msg) {
                            alert("Data Saved: " + msg);
                        });




                });
                $(".home").click(function () {

                    $(".current_window, bg_window").animate("slide", "{direction: down}");


                    var i = localStorage.getItem("top");
                    var y = parseInt(i) + 15;
                    $(".current_window").css({
                        top: y


                    });
                    $(".current_window").removeClass('current_window').addClass('bg_window');
                    localStorage.setItem("top", y);
                });
                var interval;
                $(".menu").mousedown(function () {
                    interval = setInterval(performWhileMouseDown, 1500);
                }).mouseup(function () {
                    clearInterval(interval);
                });

                function performWhileMouseDown() {

                    $("iframe").removeClass('fadeOutDownBig');

                    $("iframe").addClass('animated fadeInUpBig');
                    $(document).ready(function () {
                        $("iframe").click(function () {

                            var d = document.getElementById(event.currentTarget.id);
                            d.className = " current_window ";
                            var a = localStorage.getItem("top");
                            var z = parseInt(a) - 15;
                            localStorage.setItem("top", z);
                            $("#" + event.currentTarget.id + "").addClass('current_window')
                            $("iframe:not(.current)").removeClass('fadeInUpBig').addClass('fadeOutDownBig');
                        });
                    });

                };
                $(".bubble-wrap").click(function () {
                    $(".bubble").toggleClass("active");
                    $(".bubbleback").toggleClass("active");
                    $(".power_btn_icon").toggle(1000);
                    $(".power_ctrl").toggle(1000);
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
