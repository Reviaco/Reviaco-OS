 $(function() {
     function bg_blur() {
          $('#bg').backgroundBlur({
    imageURL : 'http://localhost/Reviaco-OS/System/Media/Backgrounds/3.jpg',
    blurAmount : 10,
    imageClass : 'tinted-bg-blur'
});
     }
              if (document.addEventListener) {
        document.addEventListener('contextmenu', function(e) {
            alert("You've tried to open context menu"); //here you draw your own menu
            e.preventDefault();
        }, false);
    } else {
        document.attachEvent('oncontextmenu', function() {
            alert("You've tried to open context menu");
            window.event.returnValue = false;
        });
    }

      var myIndex = 0;
 

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
     
     
   sessionStorage.clickcount = 5900;

   function vnc_port(x) {

     if (typeof(Storage) !== "undefined") {

       sessionStorage.clickcount = Number(sessionStorage.clickcount) + x;
     }

   }
     $( window ).load(function() {
         setInterval(function(){ get_notifications_interval(); }, 3000);
         carousel();
         bg_blur();
   $('.appbook').turn({
     // Width

     width: 922,

     // Height

     height: 600,

     // Elevation

     elevation: 50,

     // Enable gradients

     gradients: true,

     // Auto center this appbook

     autoCenter: true

   });
     });
   $("#notification_centre_show").mouseenter(function() {
       
     event.stopPropagation();
     $("#notification_centre").show("slide", "{direction: left}");

   });
   $("#notification_centre").mouseleave(function(event) {
     event.stopPropagation();
     $("#notification_centre").hide("slide", "{direction: left}");

   });

   (function() {
     var rotate, timeline;

     rotate = function() {
       return $('.minimized_window:first-child').fadeOut(400, 'swing', function() {
         return $('.minimized_window:first-child').appendTo('#recent_panel').hide();
       }).fadeIn(400, 'swing');
     };

     timeline = setInterval(rotate, 1200);

     $('body').hover(function() {
       return clearInterval(timeline);
     });

     $('.minimized_window').click(function() {
       return rotate();
     });

   }).call(this);

   startTime();

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
     if (i < 10) {
       i = "0" + i
     }; // add zero in front of numbers < 10
     return i;
   }

   function sound_hud_hide() {
     $('#sound_hud').slideUp(1000);
   }
  var get_volume = new XMLHttpRequest();
var get_volume_url = "../../PHP/Data/Volume.php";

get_volume.onreadystatechange = function() {
    if (get_volume.readyState == 4 && get_volume.status == 200) {
        
            var volume_current1 = get_volume.responseText;
        
        
    }
};
get_volume.open("GET", get_volume_url, true);
get_volume.send();
   var volume_current = 0;
   $('body').on('keydown', function(event) {

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
     animateCss: function(animationName) {
       var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
       $(this).addClass('animated ' + animationName).one(animationEnd, function() {
         $(this).removeClass('animated ' + animationName);
       });
     }
   });
     function get_notifications_interval() {
   var get_notifications = new XMLHttpRequest();
   var get_notifications_url = 'http://localhost/Reviaco-OS/System/PHP/Data/Notifications.php';

   get_notifications.onreadystatechange = function() {
     if (get_notifications.readyState == 4 && get_notifications.status == 200) {
       get_notifications_function(get_notifications.responseText);
     }
   }
   get_notifications.open('GET', get_notifications_url, true);
   get_notifications.send();

   function get_notifications_function(response) {
     var arr = JSON.parse(response);
     var i;

     for (i = 0; i < arr.length; i++) {
       var notification = "<li class=\"one red " + arr[i].title + "\"" + "><span class=\"task-title\"" + ">" + arr[i].title + "</span><span class=\"task-time\"" + ">5pm</span><span class=\"task-cat\"" + ">" + arr[i].description + "</span></li>";

     }

     $('.tasks').html(notification);
   }
     }
   var get_apps = new XMLHttpRequest();
   var get_apps_url = "http://localhost/Reviaco-OS/System/PHP/Data/Apps.php";

   get_apps.onreadystatechange = function() {
     if (get_apps.readyState == 4 && get_apps.status == 200) {
       get_apps_function(get_apps.responseText);
     }
   }
     
   get_apps.open('GET', get_apps_url, true);
   get_apps.send();

   function get_apps_function(response) {
     var arr = JSON.parse(response);
     var i;
     var out = '<div id="app_showcase" class="app_showcase">';

     for (i = 0; i < arr.length; i++) {

       out += '<div type="' + arr[i].type + '" class="mySlides w3-animate-fading ' + arr[i].name + '"><paper-card type="' + arr[i].type + '" id="' + arr[i].name + '"  heading="' + arr[i].name + '" image="../../../Users/default/Apps/Linux Apps/Icons/' + arr[i].name + '.png" class="lime"><div class="card-content">' + arr[i].description + '</div></paper-card></div>';

     }
     out += '</div>';
     $('body').append(out);
   }
   $(document).on('click', 'paper-card', function( event ) {
       event.stopPropagation();
var type;
      type = $( this ).attr('type');
       console.log(type);
      if (type == 'linux') {
     vnc_port(1);
     console.log(sessionStorage.clickcount);
     $('body').append('<div id="' + event.currentTarget.id + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><app-toolbar><paper-icon-button id="back_btn" class="back_btn" icon="arrow-back"></paper-icon-button><div id="title" title="">' + event.currentTarget.id + '</div><paper-icon-button icon="cancel"></paper-icon-button></app-toolbar></div><iframe src="http://ahmed-pc:' + sessionStorage.clickcount + '/vnc_auto.html?host=Ahmed-PC&port=' + sessionStorage.clickcount + '&password=5733091"></div>');

     $('#app_showcase').fadeOut();


      }else if (type == 'windows') 
{
     vnc_port(1);
     console.log(sessionStorage.clickcount);
     $('body').append('<div id="' + event.currentTarget.id + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><app-toolbar><paper-icon-button id="back_btn" class="back_btn" icon="arrow-back"></paper-icon-button><div id="title" title="">' + event.currentTarget.id + '</div><paper-icon-button icon="cancel"></paper-icon-button></app-toolbar></div><iframe src="http://ahmed-pc:' + sessionStorage.clickcount + '/vnc_auto.html?host=Ahmed-PC&port=' + sessionStorage.clickcount + '&password=5733091"></div>');

     $('#app_showcase').fadeOut();


      } else if (type == 'windows') 
{
     vnc_port(1);
     console.log(sessionStorage.clickcount);
     $('body').append('<div id="' + event.currentTarget.id + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><app-toolbar><paper-icon-button id="back_btn" class="back_btn" icon="arrow-back"></paper-icon-button><div id="title" title="">' + event.currentTarget.id + '</div><paper-icon-button icon="cancel"></paper-icon-button></app-toolbar></div><iframe src="http://ahmed-pc:' + sessionStorage.clickcount + '/vnc_auto.html?host=Ahmed-PC&port=' + sessionStorage.clickcount + '&password=5733091"></div>');

     $('#app_showcase').fadeOut();


      } else if (type == 'android') 
{
     vnc_port(1);
     console.log(sessionStorage.clickcount);
     $('body').append('<div id="' + event.currentTarget.id + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><app-toolbar><paper-icon-button id="back_btn" class="back_btn" icon="arrow-back"></paper-icon-button><div id="title" title="">' + event.currentTarget.id + '</div><paper-icon-button icon="cancel"></paper-icon-button></app-toolbar></div><iframe src="http://ahmed-pc:' + sessionStorage.clickcount + '/vnc_auto.html?host=Ahmed-PC&port=' + sessionStorage.clickcount + '&password=5733091"></div>');

     $('#app_showcase').fadeOut();


      } else if (type == 'blackberry') 
{
     vnc_port(1);
     console.log(sessionStorage.clickcount);
     $('body').append('<div id="' + event.currentTarget.id + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><app-toolbar><paper-icon-button id="back_btn" class="back_btn" icon="arrow-back"></paper-icon-button><div id="title" title="">' + event.currentTarget.id + '</div><paper-icon-button icon="cancel"></paper-icon-button></app-toolbar></div><iframe src="http://ahmed-pc:' + sessionStorage.clickcount + '/vnc_auto.html?host=Ahmed-PC&port=' + sessionStorage.clickcount + '&password=5733091"></div>');

     $('#app_showcase').fadeOut();


      } else if (type == 'tizen') 
{
     vnc_port(1);
     console.log(sessionStorage.clickcount);
     $('body').append('<div id="' + event.currentTarget.id + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><app-toolbar><paper-icon-button id="back_btn" class="back_btn" icon="arrow-back"></paper-icon-button><div id="title" title="">' + event.currentTarget.id + '</div><paper-icon-button icon="cancel"></paper-icon-button></app-toolbar></div><iframe src="http://ahmed-pc:' + sessionStorage.clickcount + '/vnc_auto.html?host=Ahmed-PC&port=' + sessionStorage.clickcount + '&password=5733091"></div>');

     $('#app_showcase').fadeOut();


      } else if (type == 'chrome') 
{
     vnc_port(1);
     console.log(sessionStorage.clickcount);
     $('body').append('<div id="' + event.currentTarget.id + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><app-toolbar><paper-icon-button id="back_btn" class="back_btn" icon="arrow-back"></paper-icon-button><div id="title" title="">' + event.currentTarget.id + '</div><paper-icon-button icon="cancel"></paper-icon-button></app-toolbar></div><iframe src="http://ahmed-pc:' + sessionStorage.clickcount + '/vnc_auto.html?host=Ahmed-PC&port=' + sessionStorage.clickcount + '&password=5733091"></div>');

     $('#app_showcase').fadeOut();


      } else if (type == 'webos') 
{
     vnc_port(1);
     console.log(sessionStorage.clickcount);
     $('body').append('<div id="' + event.currentTarget.id + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><app-toolbar><paper-icon-button id="back_btn" class="back_btn" icon="arrow-back"></paper-icon-button><div id="title" title="">' + event.currentTarget.id + '</div><paper-icon-button icon="cancel"></paper-icon-button></app-toolbar></div><iframe src="http://ahmed-pc:' + sessionStorage.clickcount + '/vnc_auto.html?host=Ahmed-PC&port=' + sessionStorage.clickcount + '&password=5733091"></div>');

     $('#app_showcase').fadeOut();


      } else {
          
      }
               var htmlString = $('.' + event.currentTarget.id + '').html();
     $.ajax({
         method: 'POST',
         url: '../../PHP/Linux Commands/launch/'+ type +'.php',
         data: {
           dataString: htmlString
         }
       })
       .done(function(msg) {
         alert('Data Saved: ' + msg);
       });
   });
     $('#home').longpress(function(e) {
    $('#app_showcase').fadeOut();
         $('#appbook-viewport').fadeIn();
         
}, function(e) {
         var minimized_window;

     minimized_window = $('.current_window').detach();
     $('#recent_panel').prepend(minimized_window);
     $('#app_showcase').fadeIn();
          $('#appbook-viewport').fadeOut();
     $('#recent_panel:visible').animateCss('bounceOut');
     $('#recent_panel:visible').hide();
});
   

   $("#menu").click(function() {
     $('.current_window').show();

     $('.current_window').removeClass('current_window').addClass('minimized_window');

     $('#recent_panel').animateCss('bounceIn');
     $('#recent_panel').show();
     $('#app_showcase').fadeOut();

   });
   $(document).on('click', '.window', function(event) {

     event.stopPropagation();
     $('#' + event.currentTarget.id + '').removeClass('minimized_window').addClass('current_window');
     var current_window;

     current_window = $('#' + event.currentTarget.id + '').detach();
     $('body').prepend(current_window);
     $('#recent_panel').fadeOut();

   });
   $(document).on('click', 'paper-icon-button', function(event) {

     event.stopPropagation();
     $(this).offsetParent().offsetParent().fadeOut();
     $(this).offsetParent().offsetParent().remove();
     vnc_port(-1);
     $('#app_showcase').fadeIn();

   });
   $(".bubble-wrap").click(function() {
     $(".bubble").toggleClass("active");
     $(".bubbleback").toggleClass("active");
     $(".power_btn_icon").toggle(1000);
     $(".power_ctrl").toggle(1000);
   });
   $('.toggle-btn').click(function() {
     $('.filter-btn').toggleClass('open');

   });

   $('.filter-btn a').click(function() {
     $('.filter-btn').removeClass('open');

   });

 });

 $('#all').click(function() {

   $('ul.tasks li').slideDown(300);

 });

 $('#one').click(function() {
   $('.tasks li:not(.one)').slideUp(300, function() {
     $('.one').slideDown(300);

   });
 });

 $('#two').click(function() {
   $('.tasks li:not(.two)').slideUp(300, function() {
     $('.two').slideDown(300);

   });
 });
 $('#three').click(function() {
   $('.tasks li:not(.three)').slideUp(300, function() {
     $('.three').slideDown(300);

   });
 });
   google.load("feeds", "1");

    function initialize() {
      var feed = new google.feeds.Feed("http://fastpshb.appspot.com/feed/1/fastpshb");
      feed.load(function(result) {
        if (!result.error) {
          var container = document.getElementById("feed");
          for (var i = 0; i < result.feed.entries.length; i++) {
            var entry = result.feed.entries[i];
            var div = document.createElement("div");
            div.appendChild(document.createTextNode(entry.title));
            container.appendChild(div);
          }
        }
      });
    }
    google.setOnLoadCallback(initialize);