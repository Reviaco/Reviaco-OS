// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.

 $(function() {
function exec(command) {
     $.ajax({
         method: 'POST',
         url: '../../PHP/Linux Commands/generic.php',
         data: {
           dataString: command
         }
       })
       .done(function(msg) {
         alert('Data Saved: ' + msg);
       });
}

$(document).on('click', '#command_btn', function( event ) {
       event.stopPropagation();
exec($( this ).atrr('command'););

});
function welcomeAnimation() {
  var videos = new Array('1', '2', '3', '4', '5');
  var l = videos.length;
  var random_no = Math.floor(l*Math.random());
  document.getElementById('welcomeAnimation').src = '../../Media/welcomeAnimation/' + videos[random_no] + '.mp4';
console.log(videos[random_no]);
    document.getElementById('welcomeAnimation').addEventListener('ended',myHandler,false);
    function myHandler(e) {
            $('#welcomeAnimation_bg').fadeOut(); 
    }
     }
function appbook() {
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
}
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
     myIndex = 1;
   }
   x[myIndex - 1].style.display = "block";
   setTimeout(carousel, 5000);
 }
     
     
   sessionStorage.assistant_current = 'brolu';

   function assistant_wakeUp(x) {

     if (typeof(Storage) !== "undefined") {

       sessionStorage.assistant_current = x;
     }

   }
function loadVoices() {
         meSpeak.loadConfig("../../JS/mespeak/mespeak_config.json");
    meSpeak.loadVoice("../../JS/mespeak/voices/en/en.json");
}
     $( window ).load(function() {
setTimeout(function() { welcomeAnimation(); }, 500);
         setInterval(function(){ get_notifications_interval(); }, 1000);
         
setTimeout(function() { carousel(); }, 1500);
setTimeout(function() { bg_blur(); }, 2000);
setTimeout(function() { appbook(); }, 2500);
setTimeout(function() { loadVoices(); }, 3000);



   
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
       i = "0" + i;
     } // add zero in front of numbers < 10
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
   };
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
   };
     
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
      
      if (type == 'linux') {
     
     
     $('body').append('<div id="' + event.currentTarget.id + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><app-toolbar><paper-icon-button id="back_btn" class="back_btn" icon="arrow-back"></paper-icon-button><div id="title" title="">' + event.currentTarget.id + '</div><paper-icon-button icon="cancel"></paper-icon-button></app-toolbar></div> </div>');

     $('#app_showcase').fadeOut();


      }else if (type == 'windows') 
{
     
     
     $('body').append('<div id="' + event.currentTarget.id + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><app-toolbar><paper-icon-button id="back_btn" class="back_btn" icon="arrow-back"></paper-icon-button><div id="title" title="">' + event.currentTarget.id + '</div><paper-icon-button icon="cancel"></paper-icon-button></app-toolbar></div> </div>');

     $('#app_showcase').fadeOut();


      } else if (type == 'windows') 
{
     
     
     $('body').append('<div id="' + event.currentTarget.id + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><app-toolbar><paper-icon-button id="back_btn" class="back_btn" icon="arrow-back"></paper-icon-button><div id="title" title="">' + event.currentTarget.id + '</div><paper-icon-button icon="cancel"></paper-icon-button></app-toolbar></div> </div>');

     $('#app_showcase').fadeOut();


      } else if (type == 'android') 
{
     
    
     $('body').append('<div id="' + event.currentTarget.id + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><app-toolbar><paper-icon-button id="back_btn" class="back_btn" icon="arrow-back"></paper-icon-button><div id="title" title="">' + event.currentTarget.id + '</div><paper-icon-button icon="cancel"></paper-icon-button></app-toolbar></div> </div>');

     $('#app_showcase').fadeOut();


      } else if (type == 'blackberry') 
{
     
     
     $('body').append('<div id="' + event.currentTarget.id + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><app-toolbar><paper-icon-button id="back_btn" class="back_btn" icon="arrow-back"></paper-icon-button><div id="title" title="">' + event.currentTarget.id + '</div><paper-icon-button icon="cancel"></paper-icon-button></app-toolbar></div> </div>');

     $('#app_showcase').fadeOut();


      } else if (type == 'tizen') 
{
     
    
     $('body').append('<div id="' + event.currentTarget.id + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><app-toolbar><paper-icon-button id="back_btn" class="back_btn" icon="arrow-back"></paper-icon-button><div id="title" title="">' + event.currentTarget.id + '</div><paper-icon-button icon="cancel"></paper-icon-button></app-toolbar></div> </div>');

     $('#app_showcase').fadeOut();


      } else if (type == 'chrome') 
{
     
     
     $('body').append('<div id="' + event.currentTarget.id + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><app-toolbar><paper-icon-button id="back_btn" class="back_btn" icon="arrow-back"></paper-icon-button><div id="title" title="">' + event.currentTarget.id + '</div><paper-icon-button icon="cancel"></paper-icon-button></app-toolbar></div> </div>');

     $('#app_showcase').fadeOut();


      } else if (type == 'webos') 
{
     
    
     $('body').append('<div id="' + event.currentTarget.id + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><app-toolbar><paper-icon-button id="back_btn" class="back_btn" icon="arrow-back"></paper-icon-button><div id="title" title="">' + event.currentTarget.id + '</div><paper-icon-button icon="cancel"></paper-icon-button></app-toolbar></div> </div>');

     $('#app_showcase').fadeOut();


      } else {
          
      }
               var htmlString = event.currentTarget.id;
console.log(htmlString);
     $.ajax({
         method: 'POST',
         url: '../../PHP/Linux Commands/launch/'+ type +'.php',
         data: {
           dataString: htmlString
         }
       })
     $.ajax({
         method: 'POST',
         url: '../../PHP/Linux Commands/maximize/'+ type +'.php',
         data: {
           dataString: htmlString
         }
       })

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
     
     $('#app_showcase').fadeIn();
     $.ajax({
         method: 'POST',
         url: '../../PHP/Linux Commands/maximize/'+ type +'.php',
         data: {
           dataString: htmlString
         }
       })
   });
   $(".bubble-wrap").click(function() {
     $(".bubble").toggleClass("active");
     $(".bubbleback").toggleClass("active");
     $(".power_btn_icon").toggle(1000);
     $(".power_ctrl").toggle(1000);
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

    
    if (annyang) {
    
    var assistant_wakeMe = function(assistant_name) {
    assistant_wakeUp(assistant_name);
    if (sessionStorage.assistant_current == 'brolu') {
    
    }else if (sessionStorage.assistant_current == 'lucy') {
    
    }else{
    }
    };
    
var assistant_wakeMe = function(assistant_name) {
    assistant_wakeUp(assistant_name);
    if (sessionStorage.assistant_current == 'brolu') {
    
    }else if (sessionStorage.assistant_current == 'lucy') {
    
    }else{
    }
    };
    
    var assistant_poweroff_PC = function() {
    if (sessionStorage.assistant_current == 'Brolu') {
    
    }else{
    
    }
exec('sudo poweroff');
    };


var assistant_reboot_PC = function() {
    if (sessionStorage.assistant_current == 'Brolu') {
    
    }else{
    
    }
exec('sudo reboot');
    };
    
   var app_launch1 = function(app_name) {
    if (sessionStorage.assistant_current == 'Brolu') {
    
    }else{
    
    }
    var type;
      type = $( '#' + app_name + '' ).attr('type');
       console.log(type);
      if (type == 'linux') {
     
     
     $('body').append('<div id="' + app_name + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><app-toolbar><paper-icon-button id="back_btn" class="back_btn" icon="arrow-back"></paper-icon-button><div id="title" title="">' + app_name + '</div><paper-icon-button icon="cancel"></paper-icon-button></app-toolbar></div> </div>');

     $('#app_showcase').fadeOut();


      }else if (type == 'windows') 
{
     
     
     $('body').append('<div id="' + app_name + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><app-toolbar><paper-icon-button id="back_btn" class="back_btn" icon="arrow-back"></paper-icon-button><div id="title" title="">' + app_name + '</div><paper-icon-button icon="cancel"></paper-icon-button></app-toolbar></div> </div>');

     $('#app_showcase').fadeOut();


      } else if (type == 'windows') 
{
     
     
     $('body').append('<div id="' + app_name + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><app-toolbar><paper-icon-button id="back_btn" class="back_btn" icon="arrow-back"></paper-icon-button><div id="title" title="">' + app_name + '</div><paper-icon-button icon="cancel"></paper-icon-button></app-toolbar></div> </div>');

     $('#app_showcase').fadeOut();


      } else if (type == 'android') 
{
     
     
     $('body').append('<div id="' + app_name + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><app-toolbar><paper-icon-button id="back_btn" class="back_btn" icon="arrow-back"></paper-icon-button><div id="title" title="">' + app_name + '</div><paper-icon-button icon="cancel"></paper-icon-button></app-toolbar></div> </div>');

     $('#app_showcase').fadeOut();


      } else if (type == 'blackberry') 
{
     
     
     $('body').append('<div id="' + app_name + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><app-toolbar><paper-icon-button id="back_btn" class="back_btn" icon="arrow-back"></paper-icon-button><div id="title" title="">' + app_name + '</div><paper-icon-button icon="cancel"></paper-icon-button></app-toolbar></div> </div>');

     $('#app_showcase').fadeOut();


      } else if (type == 'tizen') 
{
     
     
     $('body').append('<div id="' + app_name + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><app-toolbar><paper-icon-button id="back_btn" class="back_btn" icon="arrow-back"></paper-icon-button><div id="title" title="">' + app_name + '</div><paper-icon-button icon="cancel"></paper-icon-button></app-toolbar></div> </div>');

     $('#app_showcase').fadeOut();


      } else if (type == 'chrome') 
{
   
     
     $('body').append('<div id="' + app_name + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><app-toolbar><paper-icon-button id="back_btn" class="back_btn" icon="arrow-back"></paper-icon-button><div id="title" title="">' + app_name + '</div><paper-icon-button icon="cancel"></paper-icon-button></app-toolbar></div> </div>');

     $('#app_showcase').fadeOut();


      } else if (type == 'webos') 
{
     
     
     $('body').append('<div id="' + app_name + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><app-toolbar><paper-icon-button id="back_btn" class="back_btn" icon="arrow-back"></paper-icon-button><div id="title" title="">' + app_name + '</div><paper-icon-button icon="cancel"></paper-icon-button></app-toolbar></div> </div>');

     $('#app_showcase').fadeOut();

 } else if (type == 'firefox') 
{
     
     
     $('body').append('<div id="' + app_name + '" class="current_window window"><div class="header mdc-bg-red-500" id="contentContainer"><app-toolbar><paper-icon-button id="back_btn" class="back_btn" icon="arrow-back"></paper-icon-button><div id="title" title="">' + app_name + '</div><paper-icon-button icon="cancel"></paper-icon-button></app-toolbar></div> </div>');

     $('#app_showcase').fadeOut();


      
      } else {

speak('Sorry, But it seems that you have invented a new app name!');
          
      }
               var htmlString = app_name;
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
    
    };
var commands = {'hey *assistant_name': assistant_wakeMe,
    'what is your name': assistant_say_its_name,
    'shutdown this computer': assistant_poweroff_PC,
    'restart this computer': assistant_reboot_PC,'open *app_name': app_launch1};
    annyang.debug();

    // Add voice commands to respond to
    annyang.addCommands(commands);

    // OPTIONAL: Set a language for speech recognition (defaults to English)
    // For a full list of language codes, see the documentation:
    // https://github.com/TalAter/annyang/blob/master/docs/FAQ.md#what-languages-are-supported
    annyang.setLanguage('en');

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
  } else {

  }
