var put = $('body');
var lang = 0;
var yesTranslations = ['yes', 'yup', 'oui', 'نعم', 'ايوه', 'はい', '是', '是'];
var noTranslations = ['no', 'nope', 'non', 'لا', 'لأ', 'いいえ', '沒有', '没有'];
var blackTranslations = ['black', 'black', 'noir', 'اسود', 'اسود', '黒', '黑色', '黑色'];
var redTranslations = ['red', 'red', 'rouge', 'احمر', 'احمر', '赤', '紅', '红'];
var blueTranslations = ['blue', 'blue', 'bleu', 'ازرق', 'ازرق', '青', '藍色', '蓝色'];
var cyanTranslations = ['cyan', 'cyan', 'cyan', 'سماوى', 'لبنى', 'シアン', '青色', '青色'];
var grayTranslations = ['gray', 'gray', 'gris', 'رصاصى', 'فرانى', 'グレー', '灰色', '灰色'];
var greenTranslations = ['green', 'green', 'vert', 'اخضر', 'اخضر', '緑', '綠色', '绿色'];
var whiteTranslations = ['white', 'white', 'blanc', 'ابيض', 'ابيض', '白', '白色', '白色'];
var orangeTranslations = ['orange', 'orange', 'orange', 'برتقالى', 'برتقانى', 'オレンジ', '橙子', '橙子'];
var yellowTranslations = ['yellow', 'yellow', 'jaune', 'اصفر', 'اصفر', '黄', '黃色', '黄色'];
var brownTranslations = ['brown', 'brown', 'marron', 'بنى', 'بنى', '褐色', '棕色', '棕色'];
var tealTranslations = ['teal', 'teal', 'sarcelle', 'تركواز', 'تركواز', 'ティール', '水鴨', '水鸭'];
var pinkTranslations = ['pink', 'pink', 'rose', 'زهرى', 'بمبى', 'ピンク', '粉', '粉'];
var lightGreenTranslations = ['light green', 'light green', 'Vert clair', 'اخضر فاتح', 'اخضر فاتح', 'ライトグリーン', '淺綠色', '浅绿色'];
var colorTranslations = ['colour', 'color', 'couleur', 'اللون', 'اللون', 'カラー', '顏色', '颜色'];
var pinTranslations = ['pin', 'pin', 'épingle', 'الدبوس', 'الدبوس', 'ピン', '銷', '销'];
var animationTranslations = ['aniamtion', 'aniamtion', 'animation', 'الحركة', 'الحركة', 'アニメーション', '動畫', '动画'];
var commandsTranslations = ['commands', 'commands', 'commandes', 'الأوامر', 'الأوامر', 'コマンド', '命令', '命令'];
var sliderTranslations = ['slider', 'slider', 'curseur', 'دبوس', 'دبوس', 'スライダー', '滑塊', '滑块'];
var buttonTranslations = ['button', 'button', 'curseur', 'زر', 'زرار', 'スライダー', '滑塊', '滑块'];
var databaseCenterTranslations = ['database_center', 'database_center', 'épingle', 'مركز_قاعدة_البيانات', 'مركز_الداتا_بيز', 'ピン', '銷', '销'];
var FABTranslations = ['FAB', 'FAB', 'épingle', 'دبوس', 'دبوس', 'ピン', '銷', '销'];
var colorsPaletteTranslations = ['colours_palette', 'colors_palette', 'épingle', 'دبوس', 'دبوس', 'ピン', '銷', '销'];
var textFnTranslations = ['text0', 'text0', 'épingle', 'نص', 'كلام', 'ピン', '銷', '销'];
var buttonWithAnIconTranslations = ['button_with_an_icon', 'button_with_an_icon', 'épingle', 'زر_بأيقونة', 'زرار_بأيكونة', 'ピン', '銷', '销'];
var iconTranslations = ['icon', 'icon', 'épingle', 'ايقونة', 'ايكونة', 'ピン', '銷', '销'];
var imageTranslations = ['image', 'image', 'épingle', 'صورة', 'صورة', 'ピン', '銷', '销'];
var videoTranslations = ['video', 'video', 'épingle', 'فيديو', 'فيديو', 'ピン', '銷', '销'];
var audioTranslations = ['audio', 'audio', 'épingle', 'صوت', 'صوت', 'ピン', '銷', '销'];
var textboxTranslations = ['text box', 'text box', 'épingle', 'صندوق_النص', 'مكان_الكتابة', 'ピン', '銷', '销'];
var sectionTranslations = ['section', 'section', 'épingle', 'دبوس', 'دبوس', 'ピン', '銷', '销'];
var checkboxTranslations = ['checkbox', 'checkbox', 'épingle', 'دبوس', 'دبوس', 'ピン', '銷', '销'];
var loadingSpinnerTranslations = ['loading_spinner', 'loading_spinner', 'épingle', 'دبوس', 'دبوس', 'ピン', '銷', '销'];
var loadingBarTranslations = ['loading_bar', 'loading_bar', 'épingle', 'دبوس', 'دبوس', 'ピン', '銷', '销'];
var notificationCountTranslations = ['notification_count', 'notification_count', 'épingle', 'دبوس', 'دبوس', 'ピン', '銷', '销'];
var dialogBoxTranslations = ['dialog_box', 'dialog_box', 'épingle', 'دبوس', 'دبوس', 'ピン', '銷', '销'];
var dropdownTranslations = ['dropdown_menu', 'dropdown_menu', 'épingle', 'دبوس', 'دبوس', 'ピン', '銷', '销'];
var backgroundTranslations = ['background', 'background', 'épingle', 'الخلفية', 'الخلفية', 'ピン', '銷', '销'];
var tooltipTranslations = ['tooltip', 'tooltip', 'épingle', 'الخلفية', 'الخلفية', 'ピン', '銷', '销'];
var textTranslations = ['text', 'text', 'épingle', 'النص', 'الكلام', 'ピン', '銷', '销'];
var widthTranslations = ['width', 'width', 'épingle', 'العرض', 'العرض', 'ピン', '銷', '销'];
var lengthTranslations = ['length', 'length', 'épingle', 'الطول', 'الطول', 'ピン', '銷', '销'];
var locationTranslations = ['location', 'location', 'épingle', 'المكان', 'المكان', 'ピン', '銷', '销'];
var locationFromLeftTranslations = ['location from the left', 'location from the left', 'épingle', 'المكان_من_اليمين', 'المكان_من_اللمين', 'ピン', '銷', '销'];
var locationFromRightTranslations = ['location from the right', 'location from the right', 'épingle', 'المكان_من_الشمال', 'المكان_من_الشمال', 'ピン', '銷', '销'];
var locationFromTopTranslations = ['location from the top', 'location from the top', 'épingle', 'المكان_من_فوق', 'المكان_من_فوق', 'ピン', '銷', '销'];
var locationFromBottomTranslations = ['location from the bottom', 'location from the bottom', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var hostTranslations = ['host', 'host', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var usernameTranslations = ['username', 'username', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var passwordTranslations = ['password', 'password', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var setupTranslations = ['setup', 'setup', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var logoTranslations = ['logo', 'logo', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var titleTranslations = ['title', 'title', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var modeTranslations = ['mode', 'mode', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var pageTranslations = ['page', 'page', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
var nameTranslations = ['name', 'name', 'épingle', 'المكان_من_تحت', 'المكان_من_تحت', 'ピン', '銷', '销'];
(function ($) {
    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function () {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });

    function mathOperation(expression) {
        return math.eval(expression);
    }
    window.onerror = function () {
        return true;
    }

    function setFontColour(elementName, colour) {
        if (colour == blackTranslations[lang]) {
            $('#' + elementName + '').css('color', '#000000');
        } else if (colour == redTranslations[lang]) {
            $('#' + elementName + '').css('color', '#F44336');
        } else if (colour == blueTranslations[lang]) {
            $('#' + elementName + '').css('color', '#2196F3');
        } else if (colour == cyanTranslations[lang]) {
            $('#' + elementName + '').css('color', '#00BCD4');
        } else if (colour == grayTranslations[lang]) {
            $('#' + elementName + '').css('color', '#9E9E9E');
        } else if (colour == greenTranslations[lang]) {
            $('#' + elementName + '').css('color', '#4CAF50');
        } else if (colour == whiteTranslations[lang]) {
            $('#' + elementName + '').css('color', '#FFFFFF');
        } else if (colour == orangeTranslations[lang]) {
            $('#' + elementName + '').css('color', '#FF9800');
        } else if (colour == yellowTranslations[lang]) {
            $('#' + elementName + '').css('color', '#FFEB3B');
        } else if (colour == brownTranslations[lang]) {
            $('#' + elementName + '').css('color', '#795548');
        } else if (colour == tealTranslations[lang]) {
            $('#' + elementName + '').css('color', '#009688');
        } else if (colour == pinkTranslations[lang]) {
            $('#' + elementName + '').css('color', '#E91E63');
        } else if (colour == lightGreenTranslations[lang]) {
            $('#' + elementName + '').css('color', '#8BC34A');
        } else {
            $('#' + elementName + '').css('color', colour);
        }
    }

    function setBG(elementName, background) {
        if (background == blackTranslations[lang]) {
            $('#' + elementName + '').css('background-color', '#000000');
        } else if (background == redTranslations[lang]) {
            $('#' + elementName + '').css('background-color', '#F44336');
        } else if (background == blueTranslations[lang]) {
            $('#' + elementName + '').css('background-color', '#2196F3');
        } else if (background == cyanTranslations[lang]) {
            $('#' + elementName + '').css('background-color', '#00BCD4');
        } else if (background == grayTranslations[lang]) {
            $('#' + elementName + '').css('background-color', '#9E9E9E');
        } else if (background == greenTranslations[lang]) {
            $('#' + elementName + '').css('background-color', '#4CAF50');
        } else if (background == whiteTranslations[lang]) {
            $('#' + elementName + '').css('background-color', '#FFFFFF');
        } else if (background == orangeTranslations[lang]) {
            $('#' + elementName + '').css('background-color', '#FF9800');
        } else if (background == yellowTranslations[lang]) {
            $('#' + elementName + '').css('background-color', '#FFEB3B');
        } else if (background == brownTranslations[lang]) {
            $('#' + elementName + '').css('background-color', '#795548');
        } else if (background == tealTranslations[lang]) {
            $('#' + elementName + '').css('background-color', '#009688');
        } else if (background == pinkTranslations[lang]) {
            $('#' + elementName + '').css('background-color', '#E91E63');
        } else if (background == lightGreenTranslations[lang]) {
            $('#' + elementName + '').css('background-color', '#8BC34A');
        } else if (background.charAt(0) == '#') {
            $('#' + elementName + '').css('background-color', background);
        } else {
            $('#' + elementName + '').css('background-image', 'url(' + background + ')');
        }
    }

    function setAnimation(elementName, animation) {
        if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('flash');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('pulse');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('rubberBand');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('shake');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('headShake');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('swing');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('tada');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('wobble');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('jello');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounceIn');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounceInDown');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounceInLeft');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounceInRight');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounceInUp');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounceOut');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounceOutDown');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounceOutLeft');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounceOutRight');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounceOutUp');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('fadeIn');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('fadeInDown');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('fadeInDownBig');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('fadeInLeft');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('fadeInLeftBig');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('fadeInRight');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('fadeInRightBig');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('fadeInUp');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('fadeInUpBig');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('fadeOut');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('fadeOutDown');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('fadeOutDownBig');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('fadeOutLeft');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('fadeOutLeftBig');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('fadeOutRight');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('fadeOutRightBig');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('fadeOutUp');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('fadeOutUpBig');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('flipInX');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('flipInY');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('flipOutX');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('flipOutY');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('lightSpeedIn');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('lightSpeedOut');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('rotateIn');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('rotateInDownLeft');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('rotateInDownRight');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('rotateInUpLeft');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('rotateInUpRight');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('rotateOut');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('rotateOutDownLeft');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('rotateOutDownRight');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('rotateOutUpLeft');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('rotateOutUpRight');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('hinge');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('jackInTheBox');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('rollIn');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('rollOut');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('zoomIn');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('zoomInDown');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('zoomInLeft');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('zoomInRight');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('zoomInUp');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('zoomOut');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('zoomOutDown');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('zoomOutLeft');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('zoomOutRight');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('zoomOutUp');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('slideInDown');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('slideInLeft');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('slideInRight');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('slideInUp');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('slideOutDown');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('slideOutLeft');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('slideOutRight');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('slideOutUp');
        } else {
            $('#' + elementName + '').animateCss(animation);
        }
    }

    function execute(elementName, command) {
        var commands = command.split(' &&& ');
        var commandID;
        for (commandID = 0; commandID < commands.length; commandID++) {
            if (commands[commandID].split(' after a period of ')[0] != commands[commandID]) {
                if (commands[commandID].split(' after a period of ')[0] == 'remove it') {
                    setTimeout(function () {
                        $('#' + elementName + '').remove();
                    }, commands[commandID].split(' after a period of ')[1]);
                } else if (commands[commandID].split(' after a period of ')[0].split(' ')[0] == 'redirect') {
                    var targetURL = commands[commandID].split('redirect to ')[1];
                    setTimeout(function () {
                        window.location = targetURL;
                    }, commands[commandID].split(' after a period of ')[1]);
                }
            } else if (commands[commandID].split('remove it')[0] != commands[commandID], commands[commandID].split('remove it')[0] == '') {
                $('#' + elementName + '').remove();
            } else if (commands[commandID].split('redirect to')[0] != commands[commandID], commands[commandID].split('redirect to')[0] == '') {
                window.location = commands[commandID].split('redirect to ')[1];
            } else if (commands[commandID].split('when clicked, ')[0] != commands[commandID] || commands[commandID].split('لما حد يدوس عليه بالماوس ')[0] != commands[commandID]) {
                if (commands[commandID].split('when clicked, ')[1].split(' ')[0] == 'remove') {
                    if (commands[commandID].split('remove ')[1] == 'it') {
                        $('#' + elementName + '').click(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commands[commandID].split('remove ')[1];
                        $('#' + elementName + '').click(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commands[commandID].split('when clicked, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[1] == 'redirect to') {
                    var targetURL = commands[commandID].split('redirect to ')[1];
                    $('#' + elementName + '').click(function () {
                        window.location = targetURL;
                    });
                } else if (commands[commandID].split('when clicked, ')[1].split(' ')[0] == 'play') {
                    var targetElement = commands[commandID].split('play ')[1];
                    $('#' + elementName + '').click(function () {
                        $('#' + targetElement + '').play();
                    });
                } else if (commands[commandID].split('when clicked, ')[1].split(' ')[0] == 'pause') {
                    var targetElement = commands[commandID].split('pause ')[1];
                    $('#' + elementName + '').click(function () {
                        $('#' + targetElement + '').pause();
                    });
                } else if (commands[commandID].split('when clicked, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[3] == 'set its value to') {
                    if (commands[commandID].split('set its value to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set its value to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set its value to ')[1].split(' ')[2] == 'the value of') {
                        var newVal = $('#' + commands[commandID].split('set its value to the value of ')[1] + '').val();
                        $('#' + elementName + '').click(function () {
                            $('#' + elementName + '').val(newVal);
                        });
                    } else {
                        var newVal = commands[commandID].split('set its value to ')[1];
                        $('#' + elementName + '').click(function () {
                            $('#' + targetName + '').val(newVal);
                        });
                    }
                } else if (commands[commandID].split('when clicked, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[5] == 'set the value of to') {
                    var targetElement = commands[commandID].split('when clicked, ')[1].split(' ')[4];
                    var resource = commands[commandID].split('set the value of ' + targetElement + ' to the value of ')[1];
                    if (commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[2] == 'the value of') {
                        $('#' + elementName + '').click(function () {
                            $('#' + targetElement + '').val($('#' + resource + '').val());
                        });
                    } else {
                        var newVal = commands[commandID].split('set the value of ' + targetElement + ' to ')[1];
                        $('#' + elementName + '').click(function () {
                            $('#' + targetElement + '').val(newVal);
                        });
                    }
                } else if (commands[commandID].split('when clicked, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[4] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[6] == 'set the time position of to') {
                    var targetElement = commands[commandID].split('when clicked, ')[1].split(' ')[5];
                    var resource = commands[commandID].split('set the value of ' + targetElement + ' to the value of ')[1];
                    if (commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[2] == 'the value of') {
                        $('#' + elementName + '').click(function () {
                            $('#' + targetElement + '').currentTime = $('#' + resource + '').val();
                        });
                    } else {
                        var newTimePosition = commands[commandID].split('set the time position of ' + targetElement + ' to ')[1];
                        $('#' + elementName + '').click(function () {
                            $('#' + targetElement + '').currentTime = newTimePosition;
                        });
                    }
                } else if (commands[commandID].split('when clicked, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[5] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[6] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[8] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[9] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[10] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[11] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[12] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[13] == 'go to the database the branch and then insert the following data:') {
                    var dbname = commands[commandID].split('when clicked, ')[1].split(' ')[4];
                    var tablename = commands[commandID].split('when clicked, ')[1].split(' ')[7];
                    var dataRaw = commands[commandID].split('when clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then insert the following data: ')[1].split(', ');
                    $('#' + elementName + '').click(function () {
                        var data = '{';
                        for (i = 0; i < dataRaw.length; i++) {
                            var resource = dataRaw[i].split('the value of ')[1].split(' ')[0];
                            var slot = dataRaw[i].split('in the slot ')[1];
                            if (i != dataRaw.length - 1) {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '", ';
                            } else {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '"}';
                            }
                        }
                        $.ajax({
                            method: 'POST',
                            url: 'PHP/DBInsert.php',
                            data: {
                                servername: sessionStorage.dbhost,
                                username: sessionStorage.dbusername,
                                password: sessionStorage.dbpassword,
                                dbname: dbname,
                                tablename: tablename,
                                data: data
                            }
                        })
                    });
                } else if (commands[commandID].split('when clicked, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[5] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[6] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[8] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[9] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[10] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[11] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[12] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[13] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[14] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[15] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[17] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[18] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[19] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[20] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[21] + ' ' + commands[commandID].split('when clicked, ')[1].split(' ')[22] == 'go to the database the branch and then get the value of the slot which has the same class of') {
                    var dbname = commands[commandID].split('when clicked, ')[1].split(' ')[4];
                    var tablename = commands[commandID].split('when clicked, ')[1].split(' ')[7];
                    var calledSlot = commands[commandID].split('get the value of the slot ')[1].split(' ')[0];
                    var resourceSlot = commands[commandID].split('in the slot ')[1].split(' ')[0];
                    var resourceData;
                    (function (commandID) {
                        $('#' + elementName + '').click(function () {
                            if (commands[commandID].split('when clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value ')[1].split(' ')[0] == 'of') {
                                resourceData = $('#' + commands[commandID].split('when clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value of ')[1].split(' ')[0] + '').val();
                            } else if (commands[commandID].split('when clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'sentence') {
                                resourceData = commands[commandID].split('when clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the sentence ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'word') {
                                resourceData = commands[commandID].split('when clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the word ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'words') {
                                resourceData = commands[commandID].split('when clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the words ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'value') {
                                resourceData = commands[commandID].split('when clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            }
                            $.ajax({
                                method: 'POST',
                                url: 'PHP/DBRead.php',
                                data: {
                                    servername: sessionStorage.dbhost,
                                    username: sessionStorage.dbusername,
                                    password: sessionStorage.dbpassword,
                                    dbname: dbname,
                                    tablename: tablename,
                                    calledSlot: calledSlot,
                                    resourceSlot: resourceSlot,
                                    resourceData: resourceData
                                }
                            }).done(function (returnedValue) {
                                $('#' + commands[commandID].split('and then set it as the value of ')[1] + '').val(returnedValue);
                            })
                        })
                    })(commandID);
                }
            } else if (commands[commandID].split('when the mouse pointer moved on it, ')[0] != commands[commandID]) {
                if (commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[0] == 'remove') {
                    if (commands[commandID].split('remove ')[1] == 'it') {
                        $('#' + elementName + '').mouseenter(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commands[commandID].split('remove ')[1];
                        $('#' + elementName + '').mouseenter(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[0] == 'redirect') {
                    var targetURL = commands[commandID].split('redirect to ')[1];
                    $('#' + elementName + '').mouseenter(function () {
                        window.location = targetURL;
                    });
                } else if (commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[0] == 'play') {
                    var targetElement = commands[commandID].split('play ')[1];
                    $('#' + elementName + '').mouseenter(function () {
                        $('#' + targetElement + '').play();
                    });
                } else if (commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[0] == 'pause') {
                    var targetElement = commands[commandID].split('pause ')[1];
                    $('#' + elementName + '').mouseenter(function () {
                        $('#' + targetElement + '').pause();
                    });
                } else if (commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[3] == 'set its value to') {
                    if (commands[commandID].split('set its value to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set its value to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set its value to ')[1].split(' ')[2] == 'the value of') {
                        var newVal = $('#' + commands[commandID].split('set its value to the value of ')[1] + '').val();
                        $('#' + elementName + '').mouseenter(function () {
                            $('#' + elementName + '').val(newVal);
                        });
                    } else {
                        var newVal = commands[commandID].split('set its value to ')[1];
                        $('#' + elementName + '').mouseenter(function () {
                            $('#' + targetName + '').val(newVal);
                        });
                    }
                } else if (commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[5] == 'set the value of to') {
                    var targetElement = commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[4];
                    var resource = commands[commandID].split('set the value of ' + targetElement + ' to the value of ')[1];
                    if (commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[2] == 'the value of') {
                        $('#' + elementName + '').mouseenter(function () {
                            $('#' + targetElement + '').val($('#' + resource + '').val());
                        });
                    } else {
                        var newVal = commands[commandID].split('set the value of ' + targetElement + ' to ')[1];
                        $('#' + elementName + '').mouseenter(function () {
                            $('#' + targetElement + '').val(newVal);
                        });
                    }
                } else if (commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[4] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[6] == 'set the time position of to') {
                    var targetElement = commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[5];
                    var resource = commands[commandID].split('set the value of ' + targetElement + ' to the value of ')[1];
                    if (commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[2] == 'the value of') {
                        $('#' + elementName + '').mouseenter(function () {
                            $('#' + targetElement + '').currentTime = $('#' + resource + '').val();
                        });
                    } else {
                        var newTimePosition = commands[commandID].split('set the time position of ' + targetElement + ' to ')[1];
                        $('#' + elementName + '').mouseenter(function () {
                            $('#' + targetElement + '').currentTime = newTimePosition;
                        });
                    }
                } else if (commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[5] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[6] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[8] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[9] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[10] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[11] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[12] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[13] == 'go to the database the branch and then insert the following data:') {
                    var dbname = commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[4];
                    var tablename = commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[7];
                    var dataRaw = commands[commandID].split('when the mouse pointer moved on it, go to the database ' + dbname + ' the branch ' + tablename + ' and then insert the following data: ')[1].split(', ');
                    $('#' + elementName + '').mouseenter(function () {
                        var data = '{';
                        for (i = 0; i < dataRaw.length; i++) {
                            var resource = dataRaw[i].split('the value of ')[1].split(' ')[0];
                            var slot = dataRaw[i].split('in the slot ')[1];
                            if (i != dataRaw.length - 1) {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '", ';
                            } else {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '"}';
                            }
                        }
                        $.ajax({
                            method: 'POST',
                            url: 'PHP/DBInsert.php',
                            data: {
                                servername: sessionStorage.dbhost,
                                username: sessionStorage.dbusername,
                                password: sessionStorage.dbpassword,
                                dbname: dbname,
                                tablename: tablename,
                                data: data
                            }
                        })
                    });
                } else if (commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[5] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[6] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[8] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[9] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[10] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[11] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[12] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[13] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[14] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[15] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[17] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[18] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[19] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[20] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[21] + ' ' + commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[22] == 'go to the database the branch and then get the value of the slot which has the same class of') {
                    var dbname = commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[4];
                    var tablename = commands[commandID].split('when the mouse pointer moved on it, ')[1].split(' ')[7];
                    var calledSlot = commands[commandID].split('get the value of the slot ')[1].split(' ')[0];
                    var resourceSlot = commands[commandID].split('in the slot ')[1].split(' ')[0];
                    var resourceData;
                    (function (commandID) {
                        $('#' + elementName + '').mouseenter(function () {
                            if (commands[commandID].split('when the mouse pointer moved on it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value ')[1].split(' ')[0] == 'of') {
                                resourceData = $('#' + commands[commandID].split('when the mouse pointer moved on it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value of ')[1].split(' ')[0] + '').val();
                            } else if (commands[commandID].split('when the mouse pointer moved on it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'sentence') {
                                resourceData = commands[commandID].split('when the mouse pointer moved on it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the sentence ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when the mouse pointer moved on it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'word') {
                                resourceData = commands[commandID].split('when the mouse pointer moved on it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the word ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when the mouse pointer moved on it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'words') {
                                resourceData = commands[commandID].split('when the mouse pointer moved on it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the words ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when the mouse pointer moved on it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'value') {
                                resourceData = commands[commandID].split('when the mouse pointer moved on it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            }
                            $.ajax({
                                method: 'POST',
                                url: 'PHP/DBRead.php',
                                data: {
                                    servername: sessionStorage.dbhost,
                                    username: sessionStorage.dbusername,
                                    password: sessionStorage.dbpassword,
                                    dbname: dbname,
                                    tablename: tablename,
                                    calledSlot: calledSlot,
                                    resourceSlot: resourceSlot,
                                    resourceData: resourceData
                                }
                            }).done(function (returnedValue) {
                                $('#' + commands[commandID].split('and then set it as the value of ')[1] + '').val(returnedValue);
                            })
                        })
                    })(commandID);
                }
            } else if (commands[commandID].split('when the mouse pointer moved away from it, ')[0] != commands[commandID]) {
                if (commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[0] == 'remove') {
                    if (commands[commandID].split('remove ')[1] == 'it') {
                        $('#' + elementName + '').mouseleave(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commands[commandID].split('remove ')[1];
                        $('#' + elementName + '').mouseleave(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[0] == 'redirect') {
                    var targetURL = commands[commandID].split('redirect to ')[1];
                    $('#' + elementName + '').mouseleave(function () {
                        window.location = targetURL;
                    });
                } else if (commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[0] == 'play') {
                    var targetElement = commands[commandID].split('play ')[1];
                    $('#' + elementName + '').mouseleave(function () {
                        $('#' + targetElement + '').play();
                    });
                } else if (commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[0] == 'pause') {
                    var targetElement = commands[commandID].split('pause ')[1];
                    $('#' + elementName + '').mouseleave(function () {
                        $('#' + targetElement + '').pause();
                    });
                } else if (commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[3] == 'set its value to') {
                    if (commands[commandID].split('set its value to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set its value to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set its value to ')[1].split(' ')[2] == 'the value of') {
                        var newVal = $('#' + commands[commandID].split('set its value to the value of ')[1] + '').val();
                        $('#' + elementName + '').mouseleave(function () {
                            $('#' + elementName + '').val(newVal);
                        });
                    } else {
                        var newVal = commands[commandID].split('set its value to ')[1];
                        $('#' + elementName + '').mouseleave(function () {
                            $('#' + targetName + '').val(newVal);
                        });
                    }
                } else if (commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[5] == 'set the value of to') {
                    var targetElement = commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[4];
                    var resource = commands[commandID].split('set the value of ' + targetElement + ' to the value of ')[1];
                    if (commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[2] == 'the value of') {
                        $('#' + elementName + '').mouseleave(function () {
                            $('#' + targetElement + '').val($('#' + resource + '').val());
                        });
                    } else {
                        var newVal = commands[commandID].split('set the value of ' + targetElement + ' to ')[1];
                        $('#' + elementName + '').mouseleave(function () {
                            $('#' + targetElement + '').val(newVal);
                        });
                    }
                } else if (commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[4] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[6] == 'set the time position of to') {
                    var targetElement = commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[5];
                    var resource = commands[commandID].split('set the value of ' + targetElement + ' to the value of ')[1];
                    if (commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[2] == 'the value of') {
                        $('#' + elementName + '').mouseleave(function () {
                            $('#' + targetElement + '').currentTime = $('#' + resource + '').val();
                        });
                    } else {
                        var newTimePosition = commands[commandID].split('set the time position of ' + targetElement + ' to ')[1];
                        $('#' + elementName + '').mouseleave(function () {
                            $('#' + targetElement + '').currentTime = newTimePosition;
                        });
                    }
                } else if (commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[5] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[6] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[8] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[9] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[10] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[11] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[12] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[13] == 'go to the database the branch and then insert the following data:') {
                    var dbname = commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[4];
                    var tablename = commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[7];
                    var dataRaw = commands[commandID].split('when the mouse pointer moved away from it, go to the database ' + dbname + ' the branch ' + tablename + ' and then insert the following data: ')[1].split(', ');
                    $('#' + elementName + '').mouseleave(function () {
                        var data = '{';
                        for (i = 0; i < dataRaw.length; i++) {
                            var resource = dataRaw[i].split('the value of ')[1].split(' ')[0];
                            var slot = dataRaw[i].split('in the slot ')[1];
                            if (i != dataRaw.length - 1) {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '", ';
                            } else {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '"}';
                            }
                        }
                        $.ajax({
                            method: 'POST',
                            url: 'PHP/DBInsert.php',
                            data: {
                                servername: sessionStorage.dbhost,
                                username: sessionStorage.dbusername,
                                password: sessionStorage.dbpassword,
                                dbname: dbname,
                                tablename: tablename,
                                data: data
                            }
                        })
                    });
                } else if (commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[5] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[6] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[8] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[9] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[10] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[11] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[12] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[13] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[14] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[15] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[17] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[18] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[19] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[20] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[21] + ' ' + commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[22] == 'go to the database the branch and then get the value of the slot which has the same class of') {
                    var dbname = commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[4];
                    var tablename = commands[commandID].split('when the mouse pointer moved away from it, ')[1].split(' ')[7];
                    var calledSlot = commands[commandID].split('get the value of the slot ')[1].split(' ')[0];
                    var resourceSlot = commands[commandID].split('in the slot ')[1].split(' ')[0];
                    var resourceData;
                    (function (commandID) {
                        $('#' + elementName + '').mouseleave(function () {
                            if (commands[commandID].split('when the mouse pointer moved away from it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value ')[1].split(' ')[0] == 'of') {
                                resourceData = $('#' + commands[commandID].split('when the mouse pointer moved away from it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value of ')[1].split(' ')[0] + '').val();
                            } else if (commands[commandID].split('when the mouse pointer moved away from it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'sentence') {
                                resourceData = commands[commandID].split('when the mouse pointer moved away from it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the sentence ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when the mouse pointer moved away from it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'word') {
                                resourceData = commands[commandID].split('when the mouse pointer moved away from it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the word ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when the mouse pointer moved away from it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'words') {
                                resourceData = commands[commandID].split('when the mouse pointer moved away from it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the words ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when the mouse pointer moved away from it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'value') {
                                resourceData = commands[commandID].split('when the mouse pointer moved away from it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            }
                            $.ajax({
                                method: 'POST',
                                url: 'PHP/DBRead.php',
                                data: {
                                    servername: sessionStorage.dbhost,
                                    username: sessionStorage.dbusername,
                                    password: sessionStorage.dbpassword,
                                    dbname: dbname,
                                    tablename: tablename,
                                    calledSlot: calledSlot,
                                    resourceSlot: resourceSlot,
                                    resourceData: resourceData
                                }
                            }).done(function (returnedValue) {
                                $('#' + commands[commandID].split('and then set it as the value of ')[1] + '').val(returnedValue);
                            })
                        })
                    })(commandID);
                }
            } else if (commands[commandID].split('when the mouse pointer is being moved out of it, ')[0] != commands[commandID]) {
                if (commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[0] == 'remove') {
                    if (commands[commandID].split('remove ')[1] == 'it') {
                        $('#' + elementName + '').mouseout(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commands[commandID].split('remove ')[1];
                        $('#' + elementName + '').mouseout(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[0] == 'redirect') {
                    var targetURL = commands[commandID].split('redirect to ')[1];
                    $('#' + elementName + '').mouseout(function () {
                        window.location = targetURL;
                    });
                } else if (commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[0] == 'play') {
                    var targetElement = commands[commandID].split('play ')[1];
                    $('#' + elementName + '').mouseout(function () {
                        $('#' + targetElement + '').play();
                    });
                } else if (commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[0] == 'pause') {
                    var targetElement = commands[commandID].split('pause ')[1];
                    $('#' + elementName + '').mouseout(function () {
                        $('#' + targetElement + '').pause();
                    });
                } else if (commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[3] == 'set its value to') {
                    if (commands[commandID].split('set its value to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set its value to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set its value to ')[1].split(' ')[2] == 'the value of') {
                        var newVal = $('#' + commands[commandID].split('set its value to the value of ')[1] + '').val();
                        $('#' + elementName + '').mouseout(function () {
                            $('#' + elementName + '').val(newVal);
                        });
                    } else {
                        var newVal = commands[commandID].split('set its value to ')[1];
                        $('#' + elementName + '').mouseout(function () {
                            $('#' + targetName + '').val(newVal);
                        });
                    }
                } else if (commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[5] == 'set the value of to') {
                    var targetElement = commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[4];
                    var resource = commands[commandID].split('set the value of ' + targetElement + ' to the value of ')[1];
                    if (commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[2] == 'the value of') {
                        $('#' + elementName + '').mouseout(function () {
                            $('#' + targetElement + '').val($('#' + resource + '').val());
                        });
                    } else {
                        var newVal = commands[commandID].split('set the value of ' + targetElement + ' to ')[1];
                        $('#' + elementName + '').mouseout(function () {
                            $('#' + targetElement + '').val(newVal);
                        });
                    }
                } else if (commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[4] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[6] == 'set the time position of to') {
                    var targetElement = commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[5];
                    var resource = commands[commandID].split('set the value of ' + targetElement + ' to the value of ')[1];
                    if (commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[2] == 'the value of') {
                        $('#' + elementName + '').mouseout(function () {
                            $('#' + targetElement + '').currentTime = $('#' + resource + '').val();
                        });
                    } else {
                        var newTimePosition = commands[commandID].split('set the time position of ' + targetElement + ' to ')[1];
                        $('#' + elementName + '').mouseout(function () {
                            $('#' + targetElement + '').currentTime = newTimePosition;
                        });
                    }
                } else if (commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[5] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[6] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[8] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[9] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[10] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[11] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[12] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[13] == 'go to the database the branch and then insert the following data:') {
                    var dbname = commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[4];
                    var tablename = commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[7];
                    var dataRaw = commands[commandID].split('when the mouse pointer is being moved out of it, go to the database ' + dbname + ' the branch ' + tablename + ' and then insert the following data: ')[1].split(', ');
                    $('#' + elementName + '').mouseout(function () {
                        var data = '{';
                        for (i = 0; i < dataRaw.length; i++) {
                            var resource = dataRaw[i].split('the value of ')[1].split(' ')[0];
                            var slot = dataRaw[i].split('in the slot ')[1];
                            if (i != dataRaw.length - 1) {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '", ';
                            } else {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '"}';
                            }
                        }
                        $.ajax({
                            method: 'POST',
                            url: 'PHP/DBInsert.php',
                            data: {
                                servername: sessionStorage.dbhost,
                                username: sessionStorage.dbusername,
                                password: sessionStorage.dbpassword,
                                dbname: dbname,
                                tablename: tablename,
                                data: data
                            }
                        })
                    });
                } else if (commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[5] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[6] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[8] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[9] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[10] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[11] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[12] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[13] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[14] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[15] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[17] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[18] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[19] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[20] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[21] + ' ' + commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[22] == 'go to the database the branch and then get the value of the slot which has the same class of') {
                    var dbname = commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[4];
                    var tablename = commands[commandID].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[7];
                    var calledSlot = commands[commandID].split('get the value of the slot ')[1].split(' ')[0];
                    var resourceSlot = commands[commandID].split('in the slot ')[1].split(' ')[0];
                    var resourceData;
                    (function (commandID) {
                        $('#' + elementName + '').mouseout(function () {
                            if (commands[commandID].split('when the mouse pointer is being moved out of it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value ')[1].split(' ')[0] == 'of') {
                                resourceData = $('#' + commands[commandID].split('when the mouse pointer is being moved out of it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value of ')[1].split(' ')[0] + '').val();
                            } else if (commands[commandID].split('when the mouse pointer is being moved out of it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'sentence') {
                                resourceData = commands[commandID].split('when the mouse pointer is being moved out of it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the sentence ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when the mouse pointer is being moved out of it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'word') {
                                resourceData = commands[commandID].split('when the mouse pointer is being moved out of it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the word ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when the mouse pointer is being moved out of it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'words') {
                                resourceData = commands[commandID].split('when the mouse pointer is being moved out of it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the words ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when the mouse pointer is being moved out of it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'value') {
                                resourceData = commands[commandID].split('when the mouse pointer is being moved out of it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            }
                            $.ajax({
                                method: 'POST',
                                url: 'PHP/DBRead.php',
                                data: {
                                    servername: sessionStorage.dbhost,
                                    username: sessionStorage.dbusername,
                                    password: sessionStorage.dbpassword,
                                    dbname: dbname,
                                    tablename: tablename,
                                    calledSlot: calledSlot,
                                    resourceSlot: resourceSlot,
                                    resourceData: resourceData
                                }
                            }).done(function (returnedValue) {
                                $('#' + commands[commandID].split('and then set it as the value of ')[1] + '').val(returnedValue);
                            })
                        })
                    })(commandID);
                }
            } else if (commands[commandID].split('when the mouse pointer is being moved on it, ')[0] != commands[commandID]) {
                if (commands[commandID].split('when the mouse pointer is being moved on it, ')[1].split(' ')[0] == 'remove') {
                    if (commands[commandID].split('remove ')[1] == 'it') {
                        $('#' + elementName + '').mousemove(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commands[commandID].split('remove ')[1];
                        $('#' + elementName + '').mousemove(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commands[commandID].split('when the mouse pointer is being moved on it, ')[1].split(' ')[0] == 'redirect') {
                    var targetURL = commands[commandID].split('redirect to ')[1];
                    $('#' + elementName + '').mousemove(function () {
                        window.location = targetURL;
                    });
                } else if (commands[commandID].split('when the mouse pointer is being moved on it,')[1].split(' ')[0] == 'play') {
                    var targetElement = commands[commandID].split('play ')[1];
                    $('#' + elementName + '').mousemove(function () {
                        $('#' + targetElement + '').play();
                    });
                } else if (commands[commandID].split('when the mouse pointer is being moved on it,')[1].split(' ')[0] == 'pause') {
                    var targetElement = commands[commandID].split('pause ')[1];
                    $('#' + elementName + '').mousemove(function () {
                        $('#' + targetElement + '').pause();
                    });
                } else if (commands[commandID].split('when the mouse pointer is being moved on it,')[1].split(' ')[0] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it,')[1].split(' ')[1] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it,')[1].split(' ')[2] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it,')[1].split(' ')[3] == 'set its value to') {
                    if (commands[commandID].split('set its value to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set its value to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set its value to ')[1].split(' ')[2] == 'the value of') {
                        var newVal = $('#' + commands[commandID].split('set its value to the value of ')[1] + '').val();
                        $('#' + elementName + '').mousemove(function () {
                            $('#' + elementName + '').val(newVal);
                        });
                    } else {
                        var newVal = commands[commandID].split('set its value to ')[1];
                        $('#' + elementName + '').mousemove(function () {
                            $('#' + targetName + '').val(newVal);
                        });
                    }
                } else if (commands[commandID].split('when the mouse pointer is being moved on it,')[1].split(' ')[0] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it,')[1].split(' ')[1] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it,')[1].split(' ')[2] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it,')[1].split(' ')[3] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it,')[1].split(' ')[5] == 'set the value of to') {
                    var targetElement = commands[commandID].split('when the mouse pointer is being moved on it,')[1].split(' ')[4];
                    var resource = commands[commandID].split('set the value of ' + targetElement + ' to the value of ')[1];
                    if (commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[2] == 'the value of') {
                        $('#' + elementName + '').mousemove(function () {
                            $('#' + targetElement + '').val($('#' + resource + '').val());
                        });
                    } else {
                        var newVal = commands[commandID].split('set the value of ' + targetElement + ' to ')[1];
                        $('#' + elementName + '').mousemove(function () {
                            $('#' + targetElement + '').val(newVal);
                        });
                    }
                } else if (commands[commandID].split('when the mouse pointer is being moved on it,')[1].split(' ')[0] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it,')[1].split(' ')[1] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it,')[1].split(' ')[2] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it,')[1].split(' ')[3] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it,')[1].split(' ')[4] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it,')[1].split(' ')[6] == 'set the time position of to') {
                    var targetElement = commands[commandID].split('when the mouse pointer is being moved on it,')[1].split(' ')[5];
                    var resource = commands[commandID].split('set the value of ' + targetElement + ' to the value of ')[1];
                    if (commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[2] == 'the value of') {
                        $('#' + elementName + '').mousemove(function () {
                            $('#' + targetElement + '').currentTime = $('#' + resource + '').val();
                        });
                    } else {
                        var newTimePosition = commands[commandID].split('set the time position of ' + targetElement + ' to ')[1];
                        $('#' + elementName + '').mousemove(function () {
                            $('#' + targetElement + '').currentTime = newTimePosition;
                        });
                    }
                } else if (commands[commandID].split('when the mouse pointer is being moved on it,')[1].split(' ')[0] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it,')[1].split(' ')[1] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it,')[1].split(' ')[2] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it,')[1].split(' ')[3] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it,')[1].split(' ')[5] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it,')[1].split(' ')[6] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it,')[1].split(' ')[8] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it,')[1].split(' ')[9] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it,')[1].split(' ')[10] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it,')[1].split(' ')[11] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it,')[1].split(' ')[12] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it,')[1].split(' ')[13] == 'go to the database the branch and then insert the following data:') {
                    var dbname = commands[commandID].split('when the mouse pointer is being moved on it,')[1].split(' ')[4];
                    var tablename = commands[commandID].split('when the mouse pointer is being moved on it,')[1].split(' ')[7];
                    var dataRaw = commands[commandID].split('when the mouse pointer is being moved on it,go to the database ' + dbname + ' the branch ' + tablename + ' and then insert the following data: ')[1].split(', ');
                    $('#' + elementName + '').mousemove(function () {
                        var data = '{';
                        for (i = 0; i < dataRaw.length; i++) {
                            var resource = dataRaw[i].split('the value of ')[1].split(' ')[0];
                            var slot = dataRaw[i].split('in the slot ')[1];
                            if (i != dataRaw.length - 1) {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '", ';
                            } else {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '"}';
                            }
                        }
                        $.ajax({
                            method: 'POST',
                            url: 'PHP/DBInsert.php',
                            data: {
                                servername: sessionStorage.dbhost,
                                username: sessionStorage.dbusername,
                                password: sessionStorage.dbpassword,
                                dbname: dbname,
                                tablename: tablename,
                                data: data
                            }
                        })
                    });
                } else if (commands[commandID].split('when the mouse pointer is being moved on it, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it, ')[1].split(' ')[5] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it, ')[1].split(' ')[6] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it, ')[1].split(' ')[8] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it, ')[1].split(' ')[9] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it, ')[1].split(' ')[10] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it, ')[1].split(' ')[11] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it, ')[1].split(' ')[12] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it, ')[1].split(' ')[13] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it, ')[1].split(' ')[14] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it, ')[1].split(' ')[15] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it, ')[1].split(' ')[17] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it, ')[1].split(' ')[18] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it, ')[1].split(' ')[19] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it, ')[1].split(' ')[20] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it, ')[1].split(' ')[21] + ' ' + commands[commandID].split('when the mouse pointer is being moved on it, ')[1].split(' ')[22] == 'go to the database the branch and then get the value of the slot which has the same class of') {
                    var dbname = commands[commandID].split('when the mouse pointer is being moved on it, ')[1].split(' ')[4];
                    var tablename = commands[commandID].split('when the mouse pointer is being moved on it, ')[1].split(' ')[7];
                    var calledSlot = commands[commandID].split('get the value of the slot ')[1].split(' ')[0];
                    var resourceSlot = commands[commandID].split('in the slot ')[1].split(' ')[0];
                    var resourceData;
                    (function (commandID) {
                        $('#' + elementName + '').mousemove(function () {
                            if (commands[commandID].split('when the mouse pointer is being moved on it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value ')[1].split(' ')[0] == 'of') {
                                resourceData = $('#' + commands[commandID].split('when the mouse pointer is being moved on it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value of ')[1].split(' ')[0] + '').val();
                            } else if (commands[commandID].split('when the mouse pointer is being moved on it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'sentence') {
                                resourceData = commands[commandID].split('when the mouse pointer is being moved on it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the sentence ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when the mouse pointer is being moved on it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'word') {
                                resourceData = commands[commandID].split('when the mouse pointer is being moved on it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the word ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when the mouse pointer is being moved on it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'words') {
                                resourceData = commands[commandID].split('when the mouse pointer is being moved on it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the words ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when the mouse pointer is being moved on it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'value') {
                                resourceData = commands[commandID].split('when the mouse pointer is being moved on it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            }
                            $.ajax({
                                method: 'POST',
                                url: 'PHP/DBRead.php',
                                data: {
                                    servername: sessionStorage.dbhost,
                                    username: sessionStorage.dbusername,
                                    password: sessionStorage.dbpassword,
                                    dbname: dbname,
                                    tablename: tablename,
                                    calledSlot: calledSlot,
                                    resourceSlot: resourceSlot,
                                    resourceData: resourceData
                                }
                            }).done(function (returnedValue) {
                                $('#' + commands[commandID].split('and then set it as the value of ')[1] + '').val(returnedValue);
                            })
                        })
                    })(commandID);
                }
            } else if (commands[commandID].split('when it is no longer clicked, ')[0] != commands[commandID]) {
                if (commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[0] == 'remove') {
                    if (commands[commandID].split('remove ')[1] == 'it') {
                        $('#' + elementName + '').mouseup(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commands[commandID].split('remove ')[1];
                        $('#' + elementName + '').mouseup(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[0] == 'redirect') {
                    var targetURL = commands[commandID].split('redirect to ')[1];
                    $('#' + elementName + '').mouseup(function () {
                        window.location = targetURL;
                    });
                } else if (commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[0] == 'play') {
                    var targetElement = commands[commandID].split('play ')[1];
                    $('#' + elementName + '').mouseup(function () {
                        $('#' + targetElement + '').play();
                    });
                } else if (commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[0] == 'pause') {
                    var targetElement = commands[commandID].split('pause ')[1];
                    $('#' + elementName + '').mouseup(function () {
                        $('#' + targetElement + '').pause();
                    });
                } else if (commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[3] == 'set its value to') {
                    if (commands[commandID].split('set its value to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set its value to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set its value to ')[1].split(' ')[2] == 'the value of') {
                        var newVal = $('#' + commands[commandID].split('set its value to the value of ')[1] + '').val();
                        $('#' + elementName + '').mouseup(function () {
                            $('#' + elementName + '').val(newVal);
                        });
                    } else {
                        var newVal = commands[commandID].split('set its value to ')[1];
                        $('#' + elementName + '').mouseup(function () {
                            $('#' + targetName + '').val(newVal);
                        });
                    }
                } else if (commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[5] == 'set the value of to') {
                    var targetElement = commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[4];
                    var resource = commands[commandID].split('set the value of ' + targetElement + ' to the value of ')[1];
                    if (commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[2] == 'the value of') {
                        $('#' + elementName + '').mouseup(function () {
                            $('#' + targetElement + '').val($('#' + resource + '').val());
                        });
                    } else {
                        var newVal = commands[commandID].split('set the value of ' + targetElement + ' to ')[1];
                        $('#' + elementName + '').mouseup(function () {
                            $('#' + targetElement + '').val(newVal);
                        });
                    }
                } else if (commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[4] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[6] == 'set the time position of to') {
                    var targetElement = commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[5];
                    var resource = commands[commandID].split('set the value of ' + targetElement + ' to the value of ')[1];
                    if (commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[2] == 'the value of') {
                        $('#' + elementName + '').mouseup(function () {
                            $('#' + targetElement + '').currentTime = $('#' + resource + '').val();
                        });
                    } else {
                        var newTimePosition = commands[commandID].split('set the time position of ' + targetElement + ' to ')[1];
                        $('#' + elementName + '').mouseup(function () {
                            $('#' + targetElement + '').currentTime = newTimePosition;
                        });
                    }
                } else if (commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[5] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[6] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[8] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[9] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[10] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[11] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[12] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[13] == 'go to the database the branch and then insert the following data:') {
                    var dbname = commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[4];
                    var tablename = commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[7];
                    var dataRaw = commands[commandID].split('when it is no longer clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then insert the following data: ')[1].split(', ');
                    $('#' + elementName + '').mouseup(function () {
                        var data = '{';
                        for (i = 0; i < dataRaw.length; i++) {
                            var resource = dataRaw[i].split('the value of ')[1].split(' ')[0];
                            var slot = dataRaw[i].split('in the slot ')[1];
                            if (i != dataRaw.length - 1) {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '", ';
                            } else {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '"}';
                            }
                        }
                        $.ajax({
                            method: 'POST',
                            url: 'PHP/DBInsert.php',
                            data: {
                                servername: sessionStorage.dbhost,
                                username: sessionStorage.dbusername,
                                password: sessionStorage.dbpassword,
                                dbname: dbname,
                                tablename: tablename,
                                data: data
                            }
                        })
                    });
                } else if (commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[5] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[6] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[8] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[9] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[10] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[11] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[12] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[13] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[14] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[15] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[17] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[18] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[19] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[20] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[21] + ' ' + commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[22] == 'go to the database the branch and then get the value of the slot which has the same class of') {
                    var dbname = commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[4];
                    var tablename = commands[commandID].split('when it is no longer clicked, ')[1].split(' ')[7];
                    var calledSlot = commands[commandID].split('get the value of the slot ')[1].split(' ')[0];
                    var resourceSlot = commands[commandID].split('in the slot ')[1].split(' ')[0];
                    var resourceData;
                    (function (commandID) {
                        $('#' + elementName + '').mouseup(function () {
                            if (commands[commandID].split('when it is no longer clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value ')[1].split(' ')[0] == 'of') {
                                resourceData = $('#' + commands[commandID].split('when it is no longer clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value of ')[1].split(' ')[0] + '').val();
                            } else if (commands[commandID].split('when it is no longer clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'sentence') {
                                resourceData = commands[commandID].split('when it is no longer clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the sentence ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when it is no longer clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'word') {
                                resourceData = commands[commandID].split('when it is no longer clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the word ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when it is no longer clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'words') {
                                resourceData = commands[commandID].split('when it is no longer clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the words ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when it is no longer clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'value') {
                                resourceData = commands[commandID].split('when it is no longer clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            }
                            $.ajax({
                                method: 'POST',
                                url: 'PHP/DBRead.php',
                                data: {
                                    servername: sessionStorage.dbhost,
                                    username: sessionStorage.dbusername,
                                    password: sessionStorage.dbpassword,
                                    dbname: dbname,
                                    tablename: tablename,
                                    calledSlot: calledSlot,
                                    resourceSlot: resourceSlot,
                                    resourceData: resourceData
                                }
                            }).done(function (returnedValue) {
                                $('#' + commands[commandID].split('and then set it as the value of ')[1] + '').val(returnedValue);
                            })
                        })
                    })(commandID);
                }
            } else if (commands[commandID].split('when double clicked, ')[0] != commands[commandID]) {
                if (commands[commandID].split('when double clicked, ')[1].split(' ')[0] == 'remove') {
                    if (commands[commandID].split('remove ')[1] == 'it') {
                        $('#' + elementName + '').dblclick(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commands[commandID].split('remove ')[1];
                        $('#' + elementName + '').dblclick(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commands[commandID].split('when double clicked, ')[1].split(' ')[0] == 'redirect') {
                    var targetURL = commands[commandID].split('redirect to ')[1];
                    $('#' + elementName + '').dblclick(function () {
                        window.location = targetURL;
                    });
                } else if (commands[commandID].split('when double clicked, ')[1].split(' ')[0] == 'play') {
                    var targetElement = commands[commandID].split('play ')[1];
                    $('#' + elementName + '').dblclick(function () {
                        $('#' + targetElement + '').play();
                    });
                } else if (commands[commandID].split('when double clicked, ')[1].split(' ')[0] == 'pause') {
                    var targetElement = commands[commandID].split('pause ')[1];
                    $('#' + elementName + '').dblclick(function () {
                        $('#' + targetElement + '').pause();
                    });
                } else if (commands[commandID].split('when double clicked, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[3] == 'set its value to') {
                    if (commands[commandID].split('set its value to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set its value to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set its value to ')[1].split(' ')[2] == 'the value of') {
                        var newVal = $('#' + commands[commandID].split('set its value to the value of ')[1] + '').val();
                        $('#' + elementName + '').dblclick(function () {
                            $('#' + elementName + '').val(newVal);
                        });
                    } else {
                        var newVal = commands[commandID].split('set its value to ')[1];
                        $('#' + elementName + '').dblclick(function () {
                            $('#' + targetName + '').val(newVal);
                        });
                    }
                } else if (commands[commandID].split('when double clicked, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[5] == 'set the value of to') {
                    var targetElement = commands[commandID].split('when double clicked, ')[1].split(' ')[4];
                    var resource = commands[commandID].split('set the value of ' + targetElement + ' to the value of ')[1];
                    if (commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[2] == 'the value of') {
                        $('#' + elementName + '').dblclick(function () {
                            $('#' + targetElement + '').val($('#' + resource + '').val());
                        });
                    } else {
                        var newVal = commands[commandID].split('set the value of ' + targetElement + ' to ')[1];
                        $('#' + elementName + '').dblclick(function () {
                            $('#' + targetElement + '').val(newVal);
                        });
                    }
                } else if (commands[commandID].split('when double clicked, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[4] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[6] == 'set the time position of to') {
                    var targetElement = commands[commandID].split('when double clicked, ')[1].split(' ')[5];
                    var resource = commands[commandID].split('set the value of ' + targetElement + ' to the value of ')[1];
                    if (commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[2] == 'the value of') {
                        $('#' + elementName + '').dblclick(function () {
                            $('#' + targetElement + '').currentTime = $('#' + resource + '').val();
                        });
                    } else {
                        var newTimePosition = commands[commandID].split('set the time position of ' + targetElement + ' to ')[1];
                        $('#' + elementName + '').dblclick(function () {
                            $('#' + targetElement + '').currentTime = newTimePosition;
                        });
                    }
                } else if (commands[commandID].split('when double clicked, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[5] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[6] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[8] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[9] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[10] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[11] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[12] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[13] == 'go to the database the branch and then insert the following data:') {
                    var dbname = commands[commandID].split('when double clicked, ')[1].split(' ')[4];
                    var tablename = commands[commandID].split('when double clicked, ')[1].split(' ')[7];
                    var dataRaw = commands[commandID].split('when double clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then insert the following data: ')[1].split(', ');
                    $('#' + elementName + '').dblclick(function () {
                        var data = '{';
                        for (i = 0; i < dataRaw.length; i++) {
                            var resource = dataRaw[i].split('the value of ')[1].split(' ')[0];
                            var slot = dataRaw[i].split('in the slot ')[1];
                            if (i != dataRaw.length - 1) {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '", ';
                            } else {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '"}';
                            }
                        }
                        $.ajax({
                            method: 'POST',
                            url: 'PHP/DBInsert.php',
                            data: {
                                servername: sessionStorage.dbhost,
                                username: sessionStorage.dbusername,
                                password: sessionStorage.dbpassword,
                                dbname: dbname,
                                tablename: tablename,
                                data: data
                            }
                        })
                    });
                } else if (commands[commandID].split('when double clicked, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[5] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[6] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[8] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[9] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[10] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[11] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[12] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[13] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[14] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[15] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[17] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[18] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[19] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[20] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[21] + ' ' + commands[commandID].split('when double clicked, ')[1].split(' ')[22] == 'go to the database the branch and then get the value of the slot which has the same class of') {
                    var dbname = commands[commandID].split('when double clicked, ')[1].split(' ')[4];
                    var tablename = commands[commandID].split('when double clicked, ')[1].split(' ')[7];
                    var calledSlot = commands[commandID].split('get the value of the slot ')[1].split(' ')[0];
                    var resourceSlot = commands[commandID].split('in the slot ')[1].split(' ')[0];
                    var resourceData;
                    (function (commandID) {
                        $('#' + elementName + '').dblclick(function () {
                            if (commands[commandID].split('when double clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value ')[1].split(' ')[0] == 'of') {
                                resourceData = $('#' + commands[commandID].split('when double clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value of ')[1].split(' ')[0] + '').val();
                            } else if (commands[commandID].split('when double clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'sentence') {
                                resourceData = commands[commandID].split('when double clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the sentence ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when double clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'word') {
                                resourceData = commands[commandID].split('when double clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the word ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when double clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'words') {
                                resourceData = commands[commandID].split('when double clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the words ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when double clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'value') {
                                resourceData = commands[commandID].split('when double clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            }
                            $.ajax({
                                method: 'POST',
                                url: 'PHP/DBRead.php',
                                data: {
                                    servername: sessionStorage.dbhost,
                                    username: sessionStorage.dbusername,
                                    password: sessionStorage.dbpassword,
                                    dbname: dbname,
                                    tablename: tablename,
                                    calledSlot: calledSlot,
                                    resourceSlot: resourceSlot,
                                    resourceData: resourceData
                                }
                            }).done(function (returnedValue) {
                                $('#' + commands[commandID].split('and then set it as the value of ')[1] + '').val(returnedValue);
                            })
                        })
                    })(commandID);
                }
            } else if (commands[commandID].split('when right clicked, ')[0] != commands[commandID]) {
                if (commands[commandID].split('when right clicked, ')[1].split(' ')[0] == 'remove') {
                    if (commands[commandID].split('remove ')[1] == 'it') {
                        $('#' + elementName + '').contextmenu(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commands[commandID].split('remove ')[1];
                        $('#' + elementName + '').contextmenu(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commands[commandID].split('when right clicked, ')[1].split(' ')[0] == 'redirect') {
                    var targetURL = commands[commandID].split('redirect to ')[1];
                    $('#' + elementName + '').contextmenu(function () {
                        window.location = targetURL;
                    });
                } else if (commands[commandID].split('when right clicked, ')[1].split(' ')[0] == 'play') {
                    var targetElement = commands[commandID].split('play ')[1];
                    $('#' + elementName + '').contextmenu(function () {
                        $('#' + targetElement + '').play();
                    });
                } else if (commands[commandID].split('when right clicked, ')[1].split(' ')[0] == 'pause') {
                    var targetElement = commands[commandID].split('pause ')[1];
                    $('#' + elementName + '').contextmenu(function () {
                        $('#' + targetElement + '').pause();
                    });
                } else if (commands[commandID].split('when right clicked, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[3] == 'set its value to') {
                    if (commands[commandID].split('set its value to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set its value to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set its value to ')[1].split(' ')[2] == 'the value of') {
                        var newVal = $('#' + commands[commandID].split('set its value to the value of ')[1] + '').val();
                        $('#' + elementName + '').contextmenu(function () {
                            $('#' + elementName + '').val(newVal);
                        });
                    } else {
                        var newVal = commands[commandID].split('set its value to ')[1];
                        $('#' + elementName + '').contextmenu(function () {
                            $('#' + targetName + '').val(newVal);
                        });
                    }
                } else if (commands[commandID].split('when right clicked, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[5] == 'set the value of to') {
                    var targetElement = commands[commandID].split('when right clicked, ')[1].split(' ')[4];
                    var resource = commands[commandID].split('set the value of ' + targetElement + ' to the value of ')[1];
                    if (commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[2] == 'the value of') {
                        $('#' + elementName + '').contextmenu(function () {
                            $('#' + targetElement + '').val($('#' + resource + '').val());
                        });
                    } else {
                        var newVal = commands[commandID].split('set the value of ' + targetElement + ' to ')[1];
                        $('#' + elementName + '').contextmenu(function () {
                            $('#' + targetElement + '').val(newVal);
                        });
                    }
                } else if (commands[commandID].split('when right clicked, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[4] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[6] == 'set the time position of to') {
                    var targetElement = commands[commandID].split('when right clicked, ')[1].split(' ')[5];
                    var resource = commands[commandID].split('set the value of ' + targetElement + ' to the value of ')[1];
                    if (commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[2] == 'the value of') {
                        $('#' + elementName + '').contextmenu(function () {
                            $('#' + targetElement + '').currentTime = $('#' + resource + '').val();
                        });
                    } else {
                        var newTimePosition = commands[commandID].split('set the time position of ' + targetElement + ' to ')[1];
                        $('#' + elementName + '').contextmenu(function () {
                            $('#' + targetElement + '').currentTime = newTimePosition;
                        });
                    }
                } else if (commands[commandID].split('when right clicked, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[5] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[6] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[8] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[9] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[10] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[11] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[12] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[13] == 'go to the database the branch and then insert the following data:') {
                    var dbname = commands[commandID].split('when right clicked, ')[1].split(' ')[4];
                    var tablename = commands[commandID].split('when right clicked, ')[1].split(' ')[7];
                    var dataRaw = commands[commandID].split('when right clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then insert the following data: ')[1].split(', ');
                    $('#' + elementName + '').contextmenu(function () {
                        var data = '{';
                        for (i = 0; i < dataRaw.length; i++) {
                            var resource = dataRaw[i].split('the value of ')[1].split(' ')[0];
                            var slot = dataRaw[i].split('in the slot ')[1];
                            if (i != dataRaw.length - 1) {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '", ';
                            } else {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '"}';
                            }
                        }
                        $.ajax({
                            method: 'POST',
                            url: 'PHP/DBInsert.php',
                            data: {
                                servername: sessionStorage.dbhost,
                                username: sessionStorage.dbusername,
                                password: sessionStorage.dbpassword,
                                dbname: dbname,
                                tablename: tablename,
                                data: data
                            }
                        })
                    });
                } else if (commands[commandID].split('when right clicked, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[5] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[6] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[8] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[9] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[10] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[11] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[12] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[13] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[14] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[15] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[17] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[18] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[19] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[20] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[21] + ' ' + commands[commandID].split('when right clicked, ')[1].split(' ')[22] == 'go to the database the branch and then get the value of the slot which has the same class of') {
                    var dbname = commands[commandID].split('when right clicked, ')[1].split(' ')[4];
                    var tablename = commands[commandID].split('when right clicked, ')[1].split(' ')[7];
                    var calledSlot = commands[commandID].split('get the value of the slot ')[1].split(' ')[0];
                    var resourceSlot = commands[commandID].split('in the slot ')[1].split(' ')[0];
                    var resourceData;
                    (function (commandID) {
                        $('#' + elementName + '').contextmenu(function () {
                            if (commands[commandID].split('when right clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value ')[1].split(' ')[0] == 'of') {
                                resourceData = $('#' + commands[commandID].split('when right clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value of ')[1].split(' ')[0] + '').val();
                            } else if (commands[commandID].split('when right clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'sentence') {
                                resourceData = commands[commandID].split('when right clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the sentence ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when right clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'word') {
                                resourceData = commands[commandID].split('when right clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the word ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when right clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'words') {
                                resourceData = commands[commandID].split('when right clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the words ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when right clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'value') {
                                resourceData = commands[commandID].split('when right clicked, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            }
                            $.ajax({
                                method: 'POST',
                                url: 'PHP/DBRead.php',
                                data: {
                                    servername: sessionStorage.dbhost,
                                    username: sessionStorage.dbusername,
                                    password: sessionStorage.dbpassword,
                                    dbname: dbname,
                                    tablename: tablename,
                                    calledSlot: calledSlot,
                                    resourceSlot: resourceSlot,
                                    resourceData: resourceData
                                }
                            }).done(function (returnedValue) {
                                $('#' + commands[commandID].split('and then set it as the value of ')[1] + '').val(returnedValue);
                            })
                        })
                    })(commandID);
                }
            } else if (commands[commandID].split('when a key pressed while focusing it, ')[0] != commands[commandID]) {
                if (commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[0] == 'remove') {
                    if (commands[commandID].split('remove ')[1] == 'it') {
                        $('#' + elementName + '').keypress(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commands[commandID].split('remove ')[1];
                        $('#' + elementName + '').keypress(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[0] == 'redirect') {
                    var targetURL = commands[commandID].split('redirect to ')[1];
                    $('#' + elementName + '').keypress(function () {
                        window.location = targetURL;
                    });
                } else if (commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[0] == 'play') {
                    var targetElement = commands[commandID].split('play ')[1];
                    $('#' + elementName + '').keypress(function () {
                        $('#' + targetElement + '').play();
                    });
                } else if (commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[0] == 'pause') {
                    var targetElement = commands[commandID].split('pause ')[1];
                    $('#' + elementName + '').keypress(function () {
                        $('#' + targetElement + '').pause();
                    });
                } else if (commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[3] == 'set its value to') {
                    if (commands[commandID].split('set its value to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set its value to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set its value to ')[1].split(' ')[2] == 'the value of') {
                        var newVal = $('#' + commands[commandID].split('set its value to the value of ')[1] + '').val();
                        $('#' + elementName + '').keypress(function () {
                            $('#' + elementName + '').val(newVal);
                        });
                    } else {
                        var newVal = commands[commandID].split('set its value to ')[1];
                        $('#' + elementName + '').keypress(function () {
                            $('#' + targetName + '').val(newVal);
                        });
                    }
                } else if (commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[5] == 'set the value of to') {
                    var targetElement = commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[4];
                    var resource = commands[commandID].split('set the value of ' + targetElement + ' to the value of ')[1];
                    if (commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[2] == 'the value of') {
                        $('#' + elementName + '').keypress(function () {
                            $('#' + targetElement + '').val($('#' + resource + '').val());
                        });
                    } else {
                        var newVal = commands[commandID].split('set the value of ' + targetElement + ' to ')[1];
                        $('#' + elementName + '').keypress(function () {
                            $('#' + targetElement + '').val(newVal);
                        });
                    }
                } else if (commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[4] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[6] == 'set the time position of to') {
                    var targetElement = commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[5];
                    var resource = commands[commandID].split('set the value of ' + targetElement + ' to the value of ')[1];
                    if (commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[2] == 'the value of') {
                        $('#' + elementName + '').keypress(function () {
                            $('#' + targetElement + '').currentTime = $('#' + resource + '').val();
                        });
                    } else {
                        var newTimePosition = commands[commandID].split('set the time position of ' + targetElement + ' to ')[1];
                        $('#' + elementName + '').keypress(function () {
                            $('#' + targetElement + '').currentTime = newTimePosition;
                        });
                    }
                } else if (commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[5] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[6] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[8] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[9] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[10] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[11] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[12] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[13] == 'go to the database the branch and then insert the following data:') {
                    var dbname = commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[4];
                    var tablename = commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[7];
                    var dataRaw = commands[commandID].split('when a key pressed while focusing it, go to the database ' + dbname + ' the branch ' + tablename + ' and then insert the following data: ')[1].split(', ');
                    $('#' + elementName + '').keypress(function () {
                        var data = '{';
                        for (i = 0; i < dataRaw.length; i++) {
                            var resource = dataRaw[i].split('the value of ')[1].split(' ')[0];
                            var slot = dataRaw[i].split('in the slot ')[1];
                            if (i != dataRaw.length - 1) {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '", ';
                            } else {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '"}';
                            }
                        }
                        $.ajax({
                            method: 'POST',
                            url: 'PHP/DBInsert.php',
                            data: {
                                servername: sessionStorage.dbhost,
                                username: sessionStorage.dbusername,
                                password: sessionStorage.dbpassword,
                                dbname: dbname,
                                tablename: tablename,
                                data: data
                            }
                        })
                    });
                } else if (commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[5] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[6] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[8] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[9] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[10] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[11] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[12] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[13] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[14] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[15] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[17] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[18] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[19] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[20] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[21] + ' ' + commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[22] == 'go to the database the branch and then get the value of the slot which has the same class of') {
                    var dbname = commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[4];
                    var tablename = commands[commandID].split('when a key pressed while focusing it, ')[1].split(' ')[7];
                    var calledSlot = commands[commandID].split('get the value of the slot ')[1].split(' ')[0];
                    var resourceSlot = commands[commandID].split('in the slot ')[1].split(' ')[0];
                    var resourceData;
                    (function (commandID) {
                        $('#' + elementName + '').keypress(function () {
                            if (commands[commandID].split('when a key pressed while focusing it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value ')[1].split(' ')[0] == 'of') {
                                resourceData = $('#' + commands[commandID].split('when a key pressed while focusing it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value of ')[1].split(' ')[0] + '').val();
                            } else if (commands[commandID].split('when a key pressed while focusing it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'sentence') {
                                resourceData = commands[commandID].split('when a key pressed while focusing it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the sentence ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when a key pressed while focusing it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'word') {
                                resourceData = commands[commandID].split('when a key pressed while focusing it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the word ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when a key pressed while focusing it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'words') {
                                resourceData = commands[commandID].split('when a key pressed while focusing it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the words ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when a key pressed while focusing it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'value') {
                                resourceData = commands[commandID].split('when a key pressed while focusing it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            }
                            $.ajax({
                                method: 'POST',
                                url: 'PHP/DBRead.php',
                                data: {
                                    servername: sessionStorage.dbhost,
                                    username: sessionStorage.dbusername,
                                    password: sessionStorage.dbpassword,
                                    dbname: dbname,
                                    tablename: tablename,
                                    calledSlot: calledSlot,
                                    resourceSlot: resourceSlot,
                                    resourceData: resourceData
                                }
                            }).done(function (returnedValue) {
                                $('#' + commands[commandID].split('and then set it as the value of ')[1] + '').val(returnedValue);
                            })
                        })
                    })(commandID);
                }
            } else if (commands[commandID].split('when a key is being pressed while focusing it, ')[0] != commands[commandID]) {
                if (commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[0] == 'remove') {
                    if (commands[commandID].split('remove ')[1] == 'it') {
                        $('#' + elementName + '').keydown(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commands[commandID].split('remove ')[1];
                        $('#' + elementName + '').keydown(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[0] == 'redirect') {
                    var targetURL = commands[commandID].split('redirect to ')[1];
                    $('#' + elementName + '').keydown(function () {
                        window.location = targetURL;
                    });
                } else if (commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[0] == 'play') {
                    var targetElement = commands[commandID].split('play ')[1];
                    $('#' + elementName + '').keydown(function () {
                        $('#' + targetElement + '').play();
                    });
                } else if (commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[0] == 'pause') {
                    var targetElement = commands[commandID].split('pause ')[1];
                    $('#' + elementName + '').keydown(function () {
                        $('#' + targetElement + '').pause();
                    });
                } else if (commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[3] == 'set its value to') {
                    if (commands[commandID].split('set its value to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set its value to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set its value to ')[1].split(' ')[2] == 'the value of') {
                        var newVal = $('#' + commands[commandID].split('set its value to the value of ')[1] + '').val();
                        $('#' + elementName + '').keydown(function () {
                            $('#' + elementName + '').val(newVal);
                        });
                    } else {
                        var newVal = commands[commandID].split('set its value to ')[1];
                        $('#' + elementName + '').keydown(function () {
                            $('#' + targetName + '').val(newVal);
                        });
                    }
                } else if (commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[5] == 'set the value of to') {
                    var targetElement = commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[4];
                    var resource = commands[commandID].split('set the value of ' + targetElement + ' to the value of ')[1];
                    if (commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[2] == 'the value of') {
                        $('#' + elementName + '').keydown(function () {
                            $('#' + targetElement + '').val($('#' + resource + '').val());
                        });
                    } else {
                        var newVal = commands[commandID].split('set the value of ' + targetElement + ' to ')[1];
                        $('#' + elementName + '').keydown(function () {
                            $('#' + targetElement + '').val(newVal);
                        });
                    }
                } else if (commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[4] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[6] == 'set the time position of to') {
                    var targetElement = commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[5];
                    var resource = commands[commandID].split('set the value of ' + targetElement + ' to the value of ')[1];
                    if (commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[2] == 'the value of') {
                        $('#' + elementName + '').keydown(function () {
                            $('#' + targetElement + '').currentTime = $('#' + resource + '').val();
                        });
                    } else {
                        var newTimePosition = commands[commandID].split('set the time position of ' + targetElement + ' to ')[1];
                        $('#' + elementName + '').keydown(function () {
                            $('#' + targetElement + '').currentTime = newTimePosition;
                        });
                    }
                } else if (commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[5] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[6] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[8] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[9] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[10] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[11] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[12] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[13] == 'go to the database the branch and then insert the following data:') {
                    var dbname = commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[4];
                    var tablename = commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[7];
                    var dataRaw = commands[commandID].split('when a key is being pressed while focusing it, go to the database ' + dbname + ' the branch ' + tablename + ' and then insert the following data: ')[1].split(', ');
                    $('#' + elementName + '').keydown(function () {
                        var data = '{';
                        for (i = 0; i < dataRaw.length; i++) {
                            var resource = dataRaw[i].split('the value of ')[1].split(' ')[0];
                            var slot = dataRaw[i].split('in the slot ')[1];
                            if (i != dataRaw.length - 1) {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '", ';
                            } else {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '"}';
                            }
                        }
                        $.ajax({
                            method: 'POST',
                            url: 'PHP/DBInsert.php',
                            data: {
                                servername: sessionStorage.dbhost,
                                username: sessionStorage.dbusername,
                                password: sessionStorage.dbpassword,
                                dbname: dbname,
                                tablename: tablename,
                                data: data
                            }
                        })
                    });
                } else if (commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[5] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[6] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[8] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[9] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[10] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[11] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[12] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[13] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[14] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[15] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[17] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[18] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[19] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[20] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[21] + ' ' + commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[22] == 'go to the database the branch and then get the value of the slot which has the same class of') {
                    var dbname = commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[4];
                    var tablename = commands[commandID].split('when a key is being pressed while focusing it, ')[1].split(' ')[7];
                    var calledSlot = commands[commandID].split('get the value of the slot ')[1].split(' ')[0];
                    var resourceSlot = commands[commandID].split('in the slot ')[1].split(' ')[0];
                    var resourceData;
                    (function (commandID) {
                        $('#' + elementName + '').keydown(function () {
                            if (commands[commandID].split('when a key is being pressed while focusing it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value ')[1].split(' ')[0] == 'of') {
                                resourceData = $('#' + commands[commandID].split('when a key is being pressed while focusing it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value of ')[1].split(' ')[0] + '').val();
                            } else if (commands[commandID].split('when a key is being pressed while focusing it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'sentence') {
                                resourceData = commands[commandID].split('when a key is being pressed while focusing it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the sentence ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when a key is being pressed while focusing it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'word') {
                                resourceData = commands[commandID].split('when a key is being pressed while focusing it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the word ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when a key is being pressed while focusing it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'words') {
                                resourceData = commands[commandID].split('when a key is being pressed while focusing it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the words ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when a key is being pressed while focusing it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'value') {
                                resourceData = commands[commandID].split('when a key is being pressed while focusing it, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            }
                            $.ajax({
                                method: 'POST',
                                url: 'PHP/DBRead.php',
                                data: {
                                    servername: sessionStorage.dbhost,
                                    username: sessionStorage.dbusername,
                                    password: sessionStorage.dbpassword,
                                    dbname: dbname,
                                    tablename: tablename,
                                    calledSlot: calledSlot,
                                    resourceSlot: resourceSlot,
                                    resourceData: resourceData
                                }
                            }).done(function (returnedValue) {
                                $('#' + commands[commandID].split('and then set it as the value of ')[1] + '').val(returnedValue);
                            })
                        })
                    })(commandID);
                }
            } else if (commands[commandID].split('when its contents have been changed, ')[0] != commands[commandID]) {
                if (commands[commandID].split('when its contents have been changed, ')[1].split(' ')[0] == 'remove') {
                    if (commands[commandID].split('remove ')[1] == 'it') {
                        $('#' + elementName + '').change(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commands[commandID].split('remove ')[1];
                        $('#' + elementName + '').change(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commands[commandID].split('when its contents have been changed, ')[1].split(' ')[0] == 'redirect') {
                    var targetURL = commands[commandID].split('redirect to ')[1];
                    $('#' + elementName + '').change(function () {
                        window.location = targetURL;
                    });
                }
            } else if (commands[commandID].split('when focused, ')[0] != commands[commandID]) {
                if (commands[commandID].split('when focused, ')[1].split(' ')[0] == 'remove') {
                    if (commands[commandID].split('remove ')[1] == 'it') {
                        $('#' + elementName + '').focus(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commands[commandID].split('remove ')[1];
                        $('#' + elementName + '').focus(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commands[commandID].split('when focused, ')[1].split(' ')[0] == 'redirect') {
                    var targetURL = commands[commandID].split('redirect to ')[1];
                    $('#' + elementName + '').focus(function () {
                        window.location = targetURL;
                    });
                }
            } else if (commands[commandID].split('when it is being focused, ')[0] != commands[commandID]) {
                if (commands[commandID].split('when it is being focusing, ')[1].split(' ')[0] == 'remove') {
                    if (commands[commandID].split('remove ')[1] == 'it') {
                        $('#' + elementName + '').focusin(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commands[commandID].split('remove ')[1];
                        $('#' + elementName + '').focusin(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commands[commandID].split('when it is being focused, ')[1].split(' ')[0] == 'redirect') {
                    var targetURL = commands[commandID].split('redirect to ')[1];
                    $('#' + elementName + '').focusin(function () {
                        window.location = targetURL;
                    });
                } else if (commands[commandID].split('when it is being focused, ')[1].split(' ')[0] == 'play') {
                    var targetElement = commands[commandID].split('play ')[1];
                    $('#' + elementName + '').focusin(function () {
                        $('#' + targetElement + '').play();
                    });
                } else if (commands[commandID].split('when it is being focused, ')[1].split(' ')[0] == 'pause') {
                    var targetElement = commands[commandID].split('pause ')[1];
                    $('#' + elementName + '').focusin(function () {
                        $('#' + targetElement + '').pause();
                    });
                } else if (commands[commandID].split('when it is being focused, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[3] == 'set its value to') {
                    if (commands[commandID].split('set its value to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set its value to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set its value to ')[1].split(' ')[2] == 'the value of') {
                        var newVal = $('#' + commands[commandID].split('set its value to the value of ')[1] + '').val();
                        $('#' + elementName + '').focusin(function () {
                            $('#' + elementName + '').val(newVal);
                        });
                    } else {
                        var newVal = commands[commandID].split('set its value to ')[1];
                        $('#' + elementName + '').focusin(function () {
                            $('#' + targetName + '').val(newVal);
                        });
                    }
                } else if (commands[commandID].split('when it is being focused, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[5] == 'set the value of to') {
                    var targetElement = commands[commandID].split('when it is being focused, ')[1].split(' ')[4];
                    var resource = commands[commandID].split('set the value of ' + targetElement + ' to the value of ')[1];
                    if (commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[2] == 'the value of') {
                        $('#' + elementName + '').focusin(function () {
                            $('#' + targetElement + '').val($('#' + resource + '').val());
                        });
                    } else {
                        var newVal = commands[commandID].split('set the value of ' + targetElement + ' to ')[1];
                        $('#' + elementName + '').focusin(function () {
                            $('#' + targetElement + '').val(newVal);
                        });
                    }
                } else if (commands[commandID].split('when it is being focused, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[4] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[6] == 'set the time position of to') {
                    var targetElement = commands[commandID].split('when it is being focused, ')[1].split(' ')[5];
                    var resource = commands[commandID].split('set the value of ' + targetElement + ' to the value of ')[1];
                    if (commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[2] == 'the value of') {
                        $('#' + elementName + '').focusin(function () {
                            $('#' + targetElement + '').currentTime = $('#' + resource + '').val();
                        });
                    } else {
                        var newTimePosition = commands[commandID].split('set the time position of ' + targetElement + ' to ')[1];
                        $('#' + elementName + '').focusin(function () {
                            $('#' + targetElement + '').currentTime = newTimePosition;
                        });
                    }
                } else if (commands[commandID].split('when it is being focused, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[5] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[6] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[8] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[9] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[10] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[11] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[12] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[13] == 'go to the database the branch and then insert the following data:') {
                    var dbname = commands[commandID].split('when it is being focused, ')[1].split(' ')[4];
                    var tablename = commands[commandID].split('when it is being focused, ')[1].split(' ')[7];
                    var dataRaw = commands[commandID].split('when it is being focused, go to the database ' + dbname + ' the branch ' + tablename + ' and then insert the following data: ')[1].split(', ');
                    $('#' + elementName + '').focusin(function () {
                        var data = '{';
                        for (i = 0; i < dataRaw.length; i++) {
                            var resource = dataRaw[i].split('the value of ')[1].split(' ')[0];
                            var slot = dataRaw[i].split('in the slot ')[1];
                            if (i != dataRaw.length - 1) {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '", ';
                            } else {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '"}';
                            }
                        }
                        $.ajax({
                            method: 'POST',
                            url: 'PHP/DBInsert.php',
                            data: {
                                servername: sessionStorage.dbhost,
                                username: sessionStorage.dbusername,
                                password: sessionStorage.dbpassword,
                                dbname: dbname,
                                tablename: tablename,
                                data: data
                            }
                        })
                    });
                } else if (commands[commandID].split('when it is being focused, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[5] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[6] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[8] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[9] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[10] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[11] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[12] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[13] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[14] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[15] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[17] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[18] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[19] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[20] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[21] + ' ' + commands[commandID].split('when it is being focused, ')[1].split(' ')[22] == 'go to the database the branch and then get the value of the slot which has the same class of') {
                    var dbname = commands[commandID].split('when it is being focused, ')[1].split(' ')[4];
                    var tablename = commands[commandID].split('when it is being focused, ')[1].split(' ')[7];
                    var calledSlot = commands[commandID].split('get the value of the slot ')[1].split(' ')[0];
                    var resourceSlot = commands[commandID].split('in the slot ')[1].split(' ')[0];
                    var resourceData;
                    (function (commandID) {
                        $('#' + elementName + '').focusin(function () {
                            if (commands[commandID].split('when it is being focused, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value ')[1].split(' ')[0] == 'of') {
                                resourceData = $('#' + commands[commandID].split('when it is being focused, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value of ')[1].split(' ')[0] + '').val();
                            } else if (commands[commandID].split('when it is being focused, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'sentence') {
                                resourceData = commands[commandID].split('when it is being focused, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the sentence ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when it is being focused, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'word') {
                                resourceData = commands[commandID].split('when it is being focused, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the word ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when it is being focused, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'words') {
                                resourceData = commands[commandID].split('when it is being focused, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the words ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when it is being focused, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'value') {
                                resourceData = commands[commandID].split('when it is being focused, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            }
                            $.ajax({
                                method: 'POST',
                                url: 'PHP/DBRead.php',
                                data: {
                                    servername: sessionStorage.dbhost,
                                    username: sessionStorage.dbusername,
                                    password: sessionStorage.dbpassword,
                                    dbname: dbname,
                                    tablename: tablename,
                                    calledSlot: calledSlot,
                                    resourceSlot: resourceSlot,
                                    resourceData: resourceData
                                }
                            }).done(function (returnedValue) {
                                $('#' + commands[commandID].split('and then set it as the value of ')[1] + '').val(returnedValue);
                            })
                        })
                    })(commandID);
                }
            } else if (commands[commandID].split('when slept, ')[0] != commands[commandID]) {
                if (commands[commandID].split('when slept, ')[1].split(' ')[0] == 'remove') {
                    if (commands[commandID].split('remove ')[1] == 'it') {
                        $('#' + elementName + '').focusout(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commands[commandID].split('remove ')[1];
                        $('#' + elementName + '').focusout(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commands[commandID].split('when slept, ')[1].split(' ')[0] == 'redirect') {
                    var targetURL = commands[commandID].split('redirect to ')[1];
                    $('#' + elementName + '').focusout(function () {
                        window.location = targetURL;
                    });
                } else if (commands[commandID].split('when slept, ')[1].split(' ')[0] == 'play') {
                    var targetElement = commands[commandID].split('play ')[1];
                    $('#' + elementName + '').focusout(function () {
                        $('#' + targetElement + '').play();
                    });
                } else if (commands[commandID].split('when slept, ')[1].split(' ')[0] == 'pause') {
                    var targetElement = commands[commandID].split('pause ')[1];
                    $('#' + elementName + '').focusout(function () {
                        $('#' + targetElement + '').pause();
                    });
                } else if (commands[commandID].split('when slept, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[3] == 'set its value to') {
                    if (commands[commandID].split('set its value to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set its value to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set its value to ')[1].split(' ')[2] == 'the value of') {
                        var newVal = $('#' + commands[commandID].split('set its value to the value of ')[1] + '').val();
                        $('#' + elementName + '').focusout(function () {
                            $('#' + elementName + '').val(newVal);
                        });
                    } else {
                        var newVal = commands[commandID].split('set its value to ')[1];
                        $('#' + elementName + '').focusout(function () {
                            $('#' + targetName + '').val(newVal);
                        });
                    }
                } else if (commands[commandID].split('when slept, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[5] == 'set the value of to') {
                    var targetElement = commands[commandID].split('when slept, ')[1].split(' ')[4];
                    var resource = commands[commandID].split('set the value of ' + targetElement + ' to the value of ')[1];
                    if (commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[2] == 'the value of') {
                        $('#' + elementName + '').focusout(function () {
                            $('#' + targetElement + '').val($('#' + resource + '').val());
                        });
                    } else {
                        var newVal = commands[commandID].split('set the value of ' + targetElement + ' to ')[1];
                        $('#' + elementName + '').focusout(function () {
                            $('#' + targetElement + '').val(newVal);
                        });
                    }
                } else if (commands[commandID].split('when slept, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[4] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[6] == 'set the time position of to') {
                    var targetElement = commands[commandID].split('when slept, ')[1].split(' ')[5];
                    var resource = commands[commandID].split('set the value of ' + targetElement + ' to the value of ')[1];
                    if (commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[2] == 'the value of') {
                        $('#' + elementName + '').focusout(function () {
                            $('#' + targetElement + '').currentTime = $('#' + resource + '').val();
                        });
                    } else {
                        var newTimePosition = commands[commandID].split('set the time position of ' + targetElement + ' to ')[1];
                        $('#' + elementName + '').focusout(function () {
                            $('#' + targetElement + '').currentTime = newTimePosition;
                        });
                    }
                } else if (commands[commandID].split('when slept, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[5] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[6] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[8] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[9] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[10] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[11] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[12] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[13] == 'go to the database the branch and then insert the following data:') {
                    var dbname = commands[commandID].split('when slept, ')[1].split(' ')[4];
                    var tablename = commands[commandID].split('when slept, ')[1].split(' ')[7];
                    var dataRaw = commands[commandID].split('when slept, go to the database ' + dbname + ' the branch ' + tablename + ' and then insert the following data: ')[1].split(', ');
                    $('#' + elementName + '').focusout(function () {
                        var data = '{';
                        for (i = 0; i < dataRaw.length; i++) {
                            var resource = dataRaw[i].split('the value of ')[1].split(' ')[0];
                            var slot = dataRaw[i].split('in the slot ')[1];
                            if (i != dataRaw.length - 1) {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '", ';
                            } else {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '"}';
                            }
                        }
                        $.ajax({
                            method: 'POST',
                            url: 'PHP/DBInsert.php',
                            data: {
                                servername: sessionStorage.dbhost,
                                username: sessionStorage.dbusername,
                                password: sessionStorage.dbpassword,
                                dbname: dbname,
                                tablename: tablename,
                                data: data
                            }
                        })
                    });
                } else if (commands[commandID].split('when slept, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[5] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[6] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[8] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[9] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[10] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[11] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[12] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[13] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[14] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[15] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[17] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[18] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[19] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[20] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[21] + ' ' + commands[commandID].split('when slept, ')[1].split(' ')[22] == 'go to the database the branch and then get the value of the slot which has the same class of') {
                    var dbname = commands[commandID].split('when slept, ')[1].split(' ')[4];
                    var tablename = commands[commandID].split('when slept, ')[1].split(' ')[7];
                    var calledSlot = commands[commandID].split('get the value of the slot ')[1].split(' ')[0];
                    var resourceSlot = commands[commandID].split('in the slot ')[1].split(' ')[0];
                    var resourceData;
                    (function (commandID) {
                        $('#' + elementName + '').focusout(function () {
                            if (commands[commandID].split('when slept, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value ')[1].split(' ')[0] == 'of') {
                                resourceData = $('#' + commands[commandID].split('when slept, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value of ')[1].split(' ')[0] + '').val();
                            } else if (commands[commandID].split('when slept, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'sentence') {
                                resourceData = commands[commandID].split('when slept, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the sentence ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when slept, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'word') {
                                resourceData = commands[commandID].split('when slept, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the word ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when slept, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'words') {
                                resourceData = commands[commandID].split('when slept, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the words ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when slept, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'value') {
                                resourceData = commands[commandID].split('when slept, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            }
                            $.ajax({
                                method: 'POST',
                                url: 'PHP/DBRead.php',
                                data: {
                                    servername: sessionStorage.dbhost,
                                    username: sessionStorage.dbusername,
                                    password: sessionStorage.dbpassword,
                                    dbname: dbname,
                                    tablename: tablename,
                                    calledSlot: calledSlot,
                                    resourceSlot: resourceSlot,
                                    resourceData: resourceData
                                }
                            }).done(function (returnedValue) {
                                $('#' + commands[commandID].split('and then set it as the value of ')[1] + '').val(returnedValue);
                            })
                        })
                    })(commandID);
                }
            } else if (commands[commandID].split('when the data of this form has been sent, ')[0] != commands[commandID]) {
                if (commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[0] == 'remove') {
                    if (commands[commandID].split('remove ')[1] == 'it') {
                        $('#' + elementName + '').submit(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commands[commandID].split('remove ')[1];
                        $('#' + elementName + '').submit(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commands[commandID].split('when the data of this form has been sent, , ')[1].split(' ')[0] == 'redirect') {
                    var targetURL = commands[commandID].split('redirect to ')[1];
                    $('#' + elementName + '').submit(function () {
                        window.location = targetURL;
                    });
                } else if (commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[0] == 'play') {
                    var targetElement = commands[commandID].split('play ')[1];
                    $('#' + elementName + '').submit(function () {
                        $('#' + targetElement + '').play();
                    });
                } else if (commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[0] == 'pause') {
                    var targetElement = commands[commandID].split('pause ')[1];
                    $('#' + elementName + '').submit(function () {
                        $('#' + targetElement + '').pause();
                    });
                } else if (commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[3] == 'set its value to') {
                    if (commands[commandID].split('set its value to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set its value to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set its value to ')[1].split(' ')[2] == 'the value of') {
                        var newVal = $('#' + commands[commandID].split('set its value to the value of ')[1] + '').val();
                        $('#' + elementName + '').submit(function () {
                            $('#' + elementName + '').val(newVal);
                        });
                    } else {
                        var newVal = commands[commandID].split('set its value to ')[1];
                        $('#' + elementName + '').submit(function () {
                            $('#' + targetName + '').val(newVal);
                        });
                    }
                } else if (commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[5] == 'set the value of to') {
                    var targetElement = commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[4];
                    var resource = commands[commandID].split('set the value of ' + targetElement + ' to the value of ')[1];
                    if (commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[2] == 'the value of') {
                        $('#' + elementName + '').submit(function () {
                            $('#' + targetElement + '').val($('#' + resource + '').val());
                        });
                    } else {
                        var newVal = commands[commandID].split('set the value of ' + targetElement + ' to ')[1];
                        $('#' + elementName + '').submit(function () {
                            $('#' + targetElement + '').val(newVal);
                        });
                    }
                } else if (commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[4] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[6] == 'set the time position of to') {
                    var targetElement = commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[5];
                    var resource = commands[commandID].split('set the value of ' + targetElement + ' to the value of ')[1];
                    if (commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[2] == 'the value of') {
                        $('#' + elementName + '').submit(function () {
                            $('#' + targetElement + '').currentTime = $('#' + resource + '').val();
                        });
                    } else {
                        var newTimePosition = commands[commandID].split('set the time position of ' + targetElement + ' to ')[1];
                        $('#' + elementName + '').submit(function () {
                            $('#' + targetElement + '').currentTime = newTimePosition;
                        });
                    }
                } else if (commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[5] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[6] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[8] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[9] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[10] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[11] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[12] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[13] == 'go to the database the branch and then insert the following data:') {
                    var dbname = commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[4];
                    var tablename = commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[7];
                    var dataRaw = commands[commandID].split('when the data of this form has been sent, go to the database ' + dbname + ' the branch ' + tablename + ' and then insert the following data: ')[1].split(', ');
                    $('#' + elementName + '').submit(function () {
                        var data = '{';
                        for (i = 0; i < dataRaw.length; i++) {
                            var resource = dataRaw[i].split('the value of ')[1].split(' ')[0];
                            var slot = dataRaw[i].split('in the slot ')[1];
                            if (i != dataRaw.length - 1) {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '", ';
                            } else {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '"}';
                            }
                        }
                        $.ajax({
                            method: 'POST',
                            url: 'PHP/DBInsert.php',
                            data: {
                                servername: sessionStorage.dbhost,
                                username: sessionStorage.dbusername,
                                password: sessionStorage.dbpassword,
                                dbname: dbname,
                                tablename: tablename,
                                data: data
                            }
                        })
                    });
                } else if (commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[5] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[6] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[8] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[9] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[10] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[11] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[12] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[13] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[14] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[15] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[17] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[18] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[19] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[20] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[21] + ' ' + commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[22] == 'go to the database the branch and then get the value of the slot which has the same class of') {
                    var dbname = commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[4];
                    var tablename = commands[commandID].split('when the data of this form has been sent, ')[1].split(' ')[7];
                    var calledSlot = commands[commandID].split('get the value of the slot ')[1].split(' ')[0];
                    var resourceSlot = commands[commandID].split('in the slot ')[1].split(' ')[0];
                    var resourceData;
                    (function (commandID) {
                        $('#' + elementName + '').submit(function () {
                            if (commands[commandID].split('when the data of this form has been sent, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value ')[1].split(' ')[0] == 'of') {
                                resourceData = $('#' + commands[commandID].split('when the data of this form has been sent, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value of ')[1].split(' ')[0] + '').val();
                            } else if (commands[commandID].split('when the data of this form has been sent, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'sentence') {
                                resourceData = commands[commandID].split('when the data of this form has been sent, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the sentence ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when the data of this form has been sent, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'word') {
                                resourceData = commands[commandID].split('when the data of this form has been sent, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the word ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when the data of this form has been sent, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'words') {
                                resourceData = commands[commandID].split('when the data of this form has been sent, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the words ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when the data of this form has been sent, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'value') {
                                resourceData = commands[commandID].split('when the data of this form has been sent, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            }
                            $.ajax({
                                method: 'POST',
                                url: 'PHP/DBRead.php',
                                data: {
                                    servername: sessionStorage.dbhost,
                                    username: sessionStorage.dbusername,
                                    password: sessionStorage.dbpassword,
                                    dbname: dbname,
                                    tablename: tablename,
                                    calledSlot: calledSlot,
                                    resourceSlot: resourceSlot,
                                    resourceData: resourceData
                                }
                            }).done(function (returnedValue) {
                                $('#' + commands[commandID].split('and then set it as the value of ')[1] + '').val(returnedValue);
                            })
                        })
                    })(commandID);
                }
            } else if (commands[commandID].split('when scrolled, ')[0] != commands[commandID]) {
                if (commands[commandID].split('when scrolled, ')[1].split(' ')[0] == 'remove') {
                    if (commands[commandID].split('remove ')[1] == 'it') {
                        $('#' + elementName + '').scroll(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commands[commandID].split('remove ')[1];
                        $('#' + elementName + '').scroll(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commands[commandID].split('when scrolled, ')[1].split(' ')[0] == 'redirect') {
                    var targetURL = commands[commandID].split('redirect to ')[1];
                    $('#' + elementName + '').scroll(function () {
                        window.location = targetURL;
                    });
                } else if (commands[commandID].split('when scrolled, ')[1].split(' ')[0] == 'play') {
                    var targetElement = commands[commandID].split('play ')[1];
                    $('#' + elementName + '').submit(function () {
                        $('#' + targetElement + '').play();
                    });
                } else if (commands[commandID].split('when scrolled, ')[1].split(' ')[0] == 'pause') {
                    var targetElement = commands[commandID].split('pause ')[1];
                    $('#' + elementName + '').scroll(function () {
                        $('#' + targetElement + '').pause();
                    });
                } else if (commands[commandID].split('when scrolled, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[3] == 'set its value to') {
                    if (commands[commandID].split('set its value to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set its value to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set its value to ')[1].split(' ')[2] == 'the value of') {
                        var newVal = $('#' + commands[commandID].split('set its value to the value of ')[1] + '').val();
                        $('#' + elementName + '').scroll(function () {
                            $('#' + elementName + '').val(newVal);
                        });
                    } else {
                        var newVal = commands[commandID].split('set its value to ')[1];
                        $('#' + elementName + '').scroll(function () {
                            $('#' + targetName + '').val(newVal);
                        });
                    }
                } else if (commands[commandID].split('when scrolled, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[5] == 'set the value of to') {
                    var targetElement = commands[commandID].split('when scrolled, ')[1].split(' ')[4];
                    var resource = commands[commandID].split('set the value of ' + targetElement + ' to the value of ')[1];
                    if (commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set the value of ' + targetElement + ' to ')[1].split(' ')[2] == 'the value of') {
                        $('#' + elementName + '').scroll(function () {
                            $('#' + targetElement + '').val($('#' + resource + '').val());
                        });
                    } else {
                        var newVal = commands[commandID].split('set the value of ' + targetElement + ' to ')[1];
                        $('#' + elementName + '').scroll(function () {
                            $('#' + targetElement + '').val(newVal);
                        });
                    }
                } else if (commands[commandID].split('when scrolled, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[4] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[6] == 'set the time position of to') {
                    var targetElement = commands[commandID].split('when scrolled, ')[1].split(' ')[5];
                    var resource = commands[commandID].split('set the value of ' + targetElement + ' to the value of ')[1];
                    if (commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[0] + ' ' + commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[1] + ' ' + commands[commandID].split('set the time position of ' + targetElement + ' to ')[1].split(' ')[2] == 'the value of') {
                        $('#' + elementName + '').scroll(function () {
                            $('#' + targetElement + '').currentTime = $('#' + resource + '').val();
                        });
                    } else {
                        var newTimePosition = commands[commandID].split('set the time position of ' + targetElement + ' to ')[1];
                        $('#' + elementName + '').scroll(function () {
                            $('#' + targetElement + '').currentTime = newTimePosition;
                        });
                    }
                } else if (commands[commandID].split('when scrolled, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[5] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[6] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[8] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[9] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[10] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[11] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[12] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[13] == 'go to the database the branch and then insert the following data:') {
                    var dbname = commands[commandID].split('when scrolled, ')[1].split(' ')[4];
                    var tablename = commands[commandID].split('when scrolled, ')[1].split(' ')[7];
                    var dataRaw = commands[commandID].split('when scrolled, go to the database ' + dbname + ' the branch ' + tablename + ' and then insert the following data: ')[1].split(', ');
                    $('#' + elementName + '').scroll(function () {
                        var data = '{';
                        for (i = 0; i < dataRaw.length; i++) {
                            var resource = dataRaw[i].split('the value of ')[1].split(' ')[0];
                            var slot = dataRaw[i].split('in the slot ')[1];
                            if (i != dataRaw.length - 1) {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '", ';
                            } else {
                                data += '"' + slot + '":"' + $('#' + resource + '').val() + '"}';
                            }
                        }
                        $.ajax({
                            method: 'POST',
                            url: 'PHP/DBInsert.php',
                            data: {
                                servername: sessionStorage.dbhost,
                                username: sessionStorage.dbusername,
                                password: sessionStorage.dbpassword,
                                dbname: dbname,
                                tablename: tablename,
                                data: data
                            }
                        })
                    });
                } else if (commands[commandID].split('when scrolled, ')[1].split(' ')[0] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[1] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[2] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[3] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[5] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[6] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[8] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[9] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[10] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[11] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[12] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[13] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[14] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[15] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[17] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[18] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[19] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[20] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[21] + ' ' + commands[commandID].split('when scrolled, ')[1].split(' ')[22] == 'go to the database the branch and then get the value of the slot which has the same class of') {
                    var dbname = commands[commandID].split('when scrolled, ')[1].split(' ')[4];
                    var tablename = commands[commandID].split('when scrolled, ')[1].split(' ')[7];
                    var calledSlot = commands[commandID].split('get the value of the slot ')[1].split(' ')[0];
                    var resourceSlot = commands[commandID].split('in the slot ')[1].split(' ')[0];
                    var resourceData;
                    (function (commandID) {
                        $('#' + elementName + '').scroll(function () {
                            if (commands[commandID].split('when scrolled, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value ')[1].split(' ')[0] == 'of') {
                                resourceData = $('#' + commands[commandID].split('when scrolled, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value of ')[1].split(' ')[0] + '').val();
                            } else if (commands[commandID].split('when scrolled, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'sentence') {
                                resourceData = commands[commandID].split('when scrolled, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the sentence ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when scrolled, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'word') {
                                resourceData = commands[commandID].split('when scrolled, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the word ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when scrolled, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'words') {
                                resourceData = commands[commandID].split('when scrolled, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the words ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            } else if (commands[commandID].split('when scrolled, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the ')[1].split(' ')[0] == 'value') {
                                resourceData = commands[commandID].split('when scrolled, go to the database ' + dbname + ' the branch ' + tablename + ' and then get the value of the slot ' + calledSlot + ' which has the same class of the value ')[1].split(' in the slot ' + resourceSlot + '')[0];
                            }
                            $.ajax({
                                method: 'POST',
                                url: 'PHP/DBRead.php',
                                data: {
                                    servername: sessionStorage.dbhost,
                                    username: sessionStorage.dbusername,
                                    password: sessionStorage.dbpassword,
                                    dbname: dbname,
                                    tablename: tablename,
                                    calledSlot: calledSlot,
                                    resourceSlot: resourceSlot,
                                    resourceData: resourceData
                                }
                            }).done(function (returnedValue) {
                                $('#' + commands[commandID].split('and then set it as the value of ')[1] + '').val(returnedValue);
                            })
                        })
                    })(commandID);
                }
            }
        }
    }
    $(function () {
        $.fn[setupTranslations[lang]] = function (options) {
            // Establish our default settings
            var settings = $.extend({
				[logoTranslations[lang]]: null, [titleTranslations[lang]]: null, [modeTranslations[lang]]: null
            }, options);
            return this.each(function () {
                if (settings[modeTranslations[lang]] == 'site') {
                    $('body').append('<contents></contents>');
                } else if (settings[modeTranslations[lang]] == 'app') {
                    $('body').append('<paper-header-panel><paper-toolbar><span class="title">' + settings[titleTranslations[lang]] + '</span></paper-toolbar><div><contents></contents></div></paper-header-panel>');
                }
                if (settings[logoTranslations[lang]]) {
                    $('head').append('<link rel="icon" type="image/png" href="' + settings[logoTranslations[lang]] + '">');
                }
                if (settings[titleTranslations[lang]]) {
                    $('head').append('<title>' + settings[titleTranslations[lang]] + '</title>');
                }
                $.fn[pageTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
						[nameTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        $('contents').append('<page id="' + settings[nameTranslations[lang]] + '" style="display: none;"></page>');
                        $(window).on('hashchange', function (e) {
                            $('page').fadeOut(500);
                            $('' + location.hash + '').fadeIn(500);
                        })
                        $('page').fadeOut(500);
                        $('' + location.hash + '').fadeIn(500);
                    })
                }
                $.fn[textFnTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
						[textTranslations[lang]]: 'It seems that you have typed nothing', [colorTranslations[lang]]: null,
                        size: null, [nameTranslations[lang]]: null, [widthTranslations[lang]]: null, [lengthTranslations[lang]]: null,
                            thickness: null,
                            fontStyle: null, [animationTranslations[lang]]: null, [backgroundTranslations[lang]]: null,
                            transparency: null, [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings.name;
                        var out = '<p id="' + name + '"></p>';
                        $('contents').append(out);
                        $('#' + name + '').text(settings.text);
                        if (settings.colour) {
                            setFontColour(name, settings.colour);
                        }
                        if (settings.fontStyle) {
                            $('#' + name + '').css('font-style', settings.fontStyle);
                        }
                        if (settings.thickness) {
                            if (settings.thickness == 'thick') {
                                $('#' + name + '').css('font-weight', 'bold');
                            } else {
                                $('#' + name + '').css('font-weight', settings.thickness);
                            }
                        }
                        if (settings.size) {
                            $('#' + name + '').css('font-size', settings.size);
                        }
                        if (settings.commands) {
                            execute(name, settings.commands);
                        }
                        if (settings.width) {
                            $('#' + name + '').css('width', settings.width);
                        }
                        if (settings.length) {
                            $('#' + name + '').css('height', settings.length);
                        }
                        if (settings.animation) {
                            setAnimation(name, settings.animation);
                        }
                        if (settings.transparency) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings.transparency + '%)');
                        }
                    });
                };
                $.fn[databaseCenterTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
						[hostTranslations[lang]]: 'localhost', [usernameTranslations[lang]]: 'root', [passwordTranslations[lang]]: 'root'
                    }, options);
                    return this.each(function () {
                        sessionStorage.dbhost = settings[hostTranslations[lang]];
                        sessionStorage.dbusername = settings[usernameTranslations[lang]];
                        sessionStorage.dbpassword = settings[passwordTranslations[lang]];
                    });
                };
                $.fn[buttonTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
						[textTranslations[lang]]: 'It seems that you have typed nothing',
                        fontColour: null,
                            size: null, [nameTranslations[lang]]: null, [widthTranslations[lang]]: null, [lengthTranslations[lang]]: null,
                            thickness: null,
                            fontStyle: null,
                            disabled: null,
                            raised: null,
                            switchedOn: null, [animationTranslations[lang]]: null, [backgroundTranslations[lang]]: null,
                            transparency: null, [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings.name;
                        var out = '<paper-button id="' + name + '"></paper-button>';
                        $('contents').append(out);
                        $('#' + name + '').text(settings.text);
                        if (settings.fontColour) {
                            setFontColour(name, settings.fontColour);
                        }
                        if (settings.fontStyle) {
                            $('#' + name + '').css('font-style', settings.fontStyle);
                        }
                        if (settings.disabled == yesTranslations[lang]) {
                            $('#' + name + '').attr('disabled', '');
                        }
                        if (settings.raised == yesTranslations[lang]) {
                            $('#' + name + '').attr('raised', '');
                        }
                        if (settings.switchedOn == yesTranslations[lang]) {
                            $('#' + name + '').attr('toggles', '');
                        }
                        if (settings.thickness) {
                            if (settings.thickness == 'thick') {
                                $('#' + name + '').css('font-weight', 'bold');
                            } else {
                                $('#' + name + '').css('font-weight', settings.thickness);
                            }
                        }
                        if (settings.size) {
                            $('#' + name + '').css('font-size', settings.size);
                        }
                        if (settings.commands) {
                            execute(name, settings.commands);
                        }
                        if (settings.width) {
                            $('#' + name + '').css('width', settings.width);
                        }
                        if (settings.length) {
                            $('#' + name + '').css('height', settings.length);
                        }
                        if (settings.animation) {
                            setAnimation(name, settings.animation);
                        }
                        if (settings.transparency) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings.transparency + '%)');
                        }
                    });
                };
                $.fn[iconTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        iconColour: null,
                        icon: null,
                        size: null,
						[nameTranslations[lang]]: null,
						[widthTranslations[lang]]: null,
						[lengthTranslations[lang]]: null,
						[animationTranslations[lang]]: null,
						[backgroundTranslations[lang]]: null,
                        transparency: null,
						[commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings.name;
                        var icon = settings.icon;
                        var out = '<iron-icon id="' + name + '" icon="' + icon + '"></iron-icon>';
                        $('contents').append(out);
                        if (settings.iconColour) {
                            if (settings.iconColour == blackTranslations[lang]) {
                                $('#' + name + '').css('color', '#000000');
                            } else if (settings.iconColour == redTranslations[lang]) {
                                $('#' + name + '').css('color', '#F44336');
                            } else if (settings.iconColour == blueTranslations[lang]) {
                                $('#' + name + '').css('color', '#2196F3');
                            } else if (settings.iconColour == cyanTranslations[lang]) {
                                $('#' + name + '').css('color', '#00BCD4');
                            } else if (settings.iconColour == grayTranslations[lang]) {
                                $('#' + name + '').css('color', '#9E9E9E');
                            } else if (settings.iconColour == greenTranslations[lang]) {
                                $('#' + name + '').css('color', '#4CAF50');
                            } else if (settings.iconColour == whiteTranslations[lang]) {
                                $('#' + name + '').css('color', '#FFFFFF');
                            } else if (settings.iconColour == orangeTranslations[lang]) {
                                $('#' + name + '').css('color', '#FF9800');
                            } else if (settings.iconColour == yellowTranslations[lang]) {
                                $('#' + name + '').css('color', '#FFEB3B');
                            } else if (settings.iconColour == brownTranslations[lang]) {
                                $('#' + name + '').css('color', '#795548');
                            } else if (settings.iconColour == tealTranslations[lang]) {
                                $('#' + name + '').css('color', '#009688');
                            } else if (settings.iconColour == pinkTranslations[lang]) {
                                $('#' + name + '').css('color', '#E91E63');
                            } else if (settings.iconColour == lightGreenTranslations[lang]) {
                                $('#' + name + '').css('color', '#8BC34A');
                            } else {
                                $('#' + name + '').css('color', settings.iconColour);
                            }
                        }
                        if (settings.size) {
                            $('#' + name + '').css('font-size', settings.size);
                        }
                        if (settings.commands) {
                            execute(name, settings.commands);
                        }
                        if (settings.width) {
                            $('#' + name + '').css('width', settings.width);
                        }
                        if (settings.length) {
                            $('#' + name + '').css('height', settings.length);
                        }
                        if (settings.animation) {
                            setAnimation(name, settings.animation);
                        }
                        if (settings.transparency) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings.transparency + '%)');
                        }
                    });
                };
                $.fn[buttonWithAnIconTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        iconColour: null,
                        icon: null,
                        size: null,
						[nameTranslations[lang]]: null,
						[widthTranslations[lang]]: null,
						[lengthTranslations[lang]]: null,
						[animationTranslations[lang]]: null,
						[backgroundTranslations[lang]]: null,
                        transparency: null,
						[commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings.name;
                        var icon = settings.icon;
                        var out = '<paper-icon-button id="' + name + '" icon="' + icon + '"></paper-icon-button>';
                        $('contents').append(out);
                        if (settings.iconColour) {
                            if (settings.iconColour == blackTranslations[lang]) {
                                $('#' + name + '').css('color', '#000000');
                            } else if (settings.iconColour == redTranslations[lang]) {
                                $('#' + name + '').css('color', '#F44336');
                            } else if (settings.iconColour == blueTranslations[lang]) {
                                $('#' + name + '').css('color', '#2196F3');
                            } else if (settings.iconColour == cyanTranslations[lang]) {
                                $('#' + name + '').css('color', '#00BCD4');
                            } else if (settings.iconColour == grayTranslations[lang]) {
                                $('#' + name + '').css('color', '#9E9E9E');
                            } else if (settings.iconColour == greenTranslations[lang]) {
                                $('#' + name + '').css('color', '#4CAF50');
                            } else if (settings.iconColour == whiteTranslations[lang]) {
                                $('#' + name + '').css('color', '#FFFFFF');
                            } else if (settings.iconColour == orangeTranslations[lang]) {
                                $('#' + name + '').css('color', '#FF9800');
                            } else if (settings.iconColour == yellowTranslations[lang]) {
                                $('#' + name + '').css('color', '#FFEB3B');
                            } else if (settings.iconColour == brownTranslations[lang]) {
                                $('#' + name + '').css('color', '#795548');
                            } else if (settings.iconColour == tealTranslations[lang]) {
                                $('#' + name + '').css('color', '#009688');
                            } else if (settings.iconColour == pinkTranslations[lang]) {
                                $('#' + name + '').css('color', '#E91E63');
                            } else if (settings.iconColour == lightGreenTranslations[lang]) {
                                $('#' + name + '').css('color', '#8BC34A');
                            } else {
                                $('#' + name + '').css('color', settings.iconColour);
                            }
                        }
                        if (settings.size) {
                            $('#' + name + '').css('font-size', settings.size);
                        }
                        if (settings.commands) {
                            execute(name, settings.commands);
                        }
                        if (settings.width) {
                            $('#' + name + '').css('width', settings.width);
                        }
                        if (settings.length) {
                            $('#' + name + '').css('height', settings.length);
                        }
                        if (settings.animation) {
                            setAnimation(name, settings.animation);
                        }
                        if (settings.transparency) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings.transparency + '%)');
                        }
                    });
                };
                $.fn[sectionTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
						[textTranslations[lang]]: 'It seems that you have typed nothing',
                        fontColour: null,
                            effect: null,
                            size: null, [nameTranslations[lang]]: null, [widthTranslations[lang]]: null, [lengthTranslations[lang]]: null,
                            thickness: null,
                            fontStyle: null, [animationTranslations[lang]]: null, [backgroundTranslations[lang]]: null,
                            transparency: null, [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings.name;
                        var out = '<paper-card id="' + name + '"><div id="الحاجات_اللى_جوة_السيكشن" class="card-content"></div></paper-card>';
                        $('contents').append(out);
                        if (settings.background) {
                            setBG(name, settings.background);
                        }
                        if (settings.imageSource) {
                            $('#' + name + '').attr('image', settings.imageSource);
                        }
                        if (settings.width) {
                            $('#' + name + '').css('width', settings.width);
                        }
                        if (settings.length) {
                            $('#' + name + '').css('height', settings.length);
                        }
                        if (settings.animation) {
                            setAnimation(name, settings.animation);
                        }
                        if (settings.effect == rain) {
                            var engine = new RainyDay({
                                image: settings[nameTranslations[lang]],
                                crop: [0, 0, 50, 60],
                                blur: 10,
                                opacity: 1
                            });
                            engine.rain(
								[
									[1, 0, 20],
									[3, 3, 1]
								], 100);
                        }
                        if (settings.transparency) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings.transparency + '%)');
                        }
                    });
                };
                $.fn[tooltipTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
						[textTranslations[lang]]: 'It seems that you have typed nothing',
                        fontColour: null,
                            size: null, [nameTranslations[lang]]: null, [widthTranslations[lang]]: null, [lengthTranslations[lang]]: null,
                            thickness: null,
                            fontStyle: null,
                            emitter: null,
                            direction: null, [animationTranslations[lang]]: null, [backgroundTranslations[lang]]: null,
                            transparency: null, [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings.name;
                        var out = '<paper-tooltip id="' + name + '" for="' + settings.emitter + '">' + settings.text + '</paper-tooltip>';
                        $('contents').append(out);
                        if (settings.fontColour) {
                            setFontColour(name, settings.fontColour);
                        }
                        if (settings.fontStyle) {
                            $('#' + name + '').css('font-style', settings.fontStyle);
                        }
                        if (settings.background) {
                            setBG(name, settings.background);
                        }
                        if (settings.thickness) {
                            if (settings.thickness == 'thick') {
                                $('#' + name + '').css('font-weight', 'bold');
                            } else {
                                $('#' + name + '').css('font-weight', settings.thickness);
                            }
                        }
                        if (settings.size) {
                            $('#' + name + '').css('font-size', settings.size);
                        }
                        if (settings.commands) {
                            execute(name, settings.commands);
                        }
                        if (settings.width) {
                            $('#' + name + '').css('width', settings.width);
                        }
                        if (settings.length) {
                            $('#' + name + '').css('height', settings.length);
                        }
                        if (settings.animation) {
                            setAnimation(name, settings.animation);
                        }
                        if (settings.direction == 'fromRight') {
                            $('#' + name + '').attr('position', 'right');
                        } else if (settings.direction == 'fromLeft') {
                            $('#' + name + '').attr('position', 'left');
                        } else if (settings.direction == 'fromUp') {
                            $('#' + name + '').attr('position', 'top');
                        } else if (settings.direction == 'fromDown') {
                            $('#' + name + '').attr('position', 'bottom');
                        } else {}
                        if (settings.transparency) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings.transparency + '%)');
                        }
                    });
                };
                $.fn[colorsPaletteTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
						[nameTranslations[lang]]: null, [widthTranslations[lang]]: null, [lengthTranslations[lang]]: null, [animationTranslations[lang]]: null, [backgroundTranslations[lang]]: null,
                        transparency: null, [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings.name;
                        var out = '<paper-swatch-picker id="' + name + '" color="{{selectedColor}}"></paper-swatch-picker>';
                        $('contents').append(out);
                        if (settings.fontColour) {
                            setFontColour(name, settings.fontColour);
                        }
                        if (settings.background) {
                            setBG(name, settings.background);
                        }
                        if (settings.width) {
                            $('#' + name + '').css('width', settings.width);
                        }
                        if (settings.length) {
                            $('#' + name + '').css('height', settings.length);
                        }
                        if (settings.animation) {
                            setAnimation(name, settings.animation);
                        }
                        if (settings.transparency) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings.transparency + '%)');
                        }
                    });
                };
                $.fn[loadingSpinnerTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
						[nameTranslations[lang]]: null, [widthTranslations[lang]]: null, [lengthTranslations[lang]]: null,
                        loading: null, [animationTranslations[lang]]: null, [backgroundTranslations[lang]]: null,
                            transparency: null, [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings.name;
                        var out = '<paper-spinner id="' + name + '"></paper-spinner>';
                        $('contents').append(out);
                        if (settings.fontColour) {
                            setFontColour(name, settings.fontColour);
                        }
                        if (settings.background) {
                            setBG(name, settings.background);
                        }
                        if (settings.loading == yesTranslations[lang]) {
                            $('#' + name + '').attr('active', '');
                        }
                        if (settings.width) {
                            $('#' + name + '').css('width', settings.width);
                        }
                        if (settings.length) {
                            $('#' + name + '').css('height', settings.length);
                        }
                        if (settings.animation) {
                            setAnimation(name, settings.animation);
                        }
                        if (settings.transparency) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings.transparency + '%)');
                        }
                    });
                };
                $.fn[loadingBarTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
						[nameTranslations[lang]]: null, [widthTranslations[lang]]: null, [lengthTranslations[lang]]: null,
                        loading: null, [animationTranslations[lang]]: null, [backgroundTranslations[lang]]: null,
                            transparency: null, [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings.name;
                        var out = '<paper-progress id="' + name + '"></paper-progress>';
                        $('contents').append(out);
                        if (settings.fontColour) {
                            setFontColour(name, settings.fontColour);
                        }
                        if (settings.background) {
                            setBG(name, settings.background);
                        }
                        if (settings.width) {
                            $('#' + name + '').css('width', settings.width);
                        }
                        if (settings.length) {
                            $('#' + name + '').css('height', settings.length);
                        }
                        if (settings.animation) {
                            setAnimation(name, settings.animation);
                        }
                        if (settings.transparency) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings.transparency + '%)');
                        }
                    });
                };
                $.fn[imageTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        title: null,
                        source: null,
                        imageWidth: null,
                        imageLength: null,
						[nameTranslations[lang]]: null,
						[widthTranslations[lang]]: null,
						[lengthTranslations[lang]]: null,
						[animationTranslations[lang]]: null,
                        transparency: null,
						[backgroundTranslations[lang]]: null,
						[commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings.name;
                        var source = settings.source;
                        var out = '<img id="' + name + '" src="' + source + '"></img>';
                        $('contents').append(out);
                        if (settings.background) {
                            setBG(name, settings.background);
                        }
                        if (settings.imageWidth) {
                            $('#' + name + '').attr('width', settings.imageWidth);
                        }
                        if (settings.imageLength) {
                            $('#' + name + '').attr('length', settings.imageLength);
                        }
                        if (settings.title) {
                            $('#' + name + '').attr('alt', settings.title);
                        }
                        if (settings.width) {
                            $('#' + name + '').css('width', settings.width);
                        }
                        if (settings.length) {
                            $('#' + name + '').css('height', settings.length);
                        }
                        if (settings.animation) {
                            setAnimation(name, settings.animation);
                        }
                        if (settings.transparency) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings.transparency + '%)');
                        }
                    });
                };
                $.fn[notificationCountTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
						[textTranslations[lang]]: 'It seems that you have typed nothing',
                        icon: null,
                            target: null,
                            fontColour: null,
                            size: null, [nameTranslations[lang]]: null, [widthTranslations[lang]]: null, [lengthTranslations[lang]]: null,
                            thickness: null,
                            fontStyle: null, [animationTranslations[lang]]: null,
                            transparency: null, [backgroundTranslations[lang]]: null, [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings.name;
                        var out = '<paper-badge id="' + name + '" for="' + target + '"></paper-badge>';
                        $('contents').append(out);
                        if (settings.fontColour) {
                            setFontColour(name, settings.fontColour);
                        }
                        if (settings.background) {
                            setBG(name, settings.background);
                        }
                        if (settings.fontStyle) {
                            $('#' + name + '').css('font-style', settings.fontStyle);
                        }
                        if (settings.text) {
                            $('#' + name + '').attr('label', settings.text);
                        }
                        if (settings.icon) {
                            $('#' + name + '').attr('icon', settings.icon);
                        }
                        if (settings.thickness) {
                            if (settings.thickness == 'thick') {
                                $('#' + name + '').css('font-weight', 'bold');
                            } else {
                                $('#' + name + '').css('font-weight', settings.thickness);
                            }
                        }
                        if (settings.size) {
                            $('#' + name + '').css('font-size', settings.size);
                        }
                        if (settings.commands) {
                            execute(name, settings.commands);
                        }
                        if (settings.width) {
                            $('#' + name + '').css('width', settings.width);
                        }
                        if (settings.length) {
                            $('#' + name + '').css('height', settings.length);
                        }
                        if (settings.animation) {
                            setAnimation(name, settings.animation);
                        }
                        if (settings.transparency) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings.transparency + '%)');
                        }
                    });
                };
                $.fn[checkboxTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
						[textTranslations[lang]]: null,
                        description: null,
                            thickness: null,
                            disabled: null,
                            checked: null,
                            ripple: null,
                            fontColour: null,
                            size: null, [nameTranslations[lang]]: null, [widthTranslations[lang]]: null, [lengthTranslations[lang]]: null,
                            thickness: null,
                            fontStyle: null, [animationTranslations[lang]]: null,
                            transparency: null, [backgroundTranslations[lang]]: null, [commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings.name;
                        var out = '<paper-checkbox id="' + name + '">' + text + '</paper-checkbox>';
                        $('contents').append(out);
                        if (settings.fontColour) {
                            setFontColour(name, settings.fontColour);
                        }
                        if (settings.fontStyle) {
                            $('#' + name + '').css('font-style', settings.fontStyle);
                        }
                        if (settings.background) {
                            setBG(name, settings.background);
                        }
                        if (settings.disabled == yesTranslations[lang]) {
                            $('#' + name + '').attr('disabled', '');
                        }
                        if (settings.checked == yesTranslations[lang]) {
                            $('#' + name + '').attr('checked', '');
                        }
                        if (settings.ripple) {
                            $('#' + name + '').attr('noink', '');
                        }
                        if (settings.description) {
                            $('#' + name + '').append('<span class="subtitle">' + settings.description + '</span>');
                        }
                        if (settings.thickness) {
                            if (settings.thickness == 'thick') {
                                $('#' + name + '').css('font-weight', 'bold');
                            } else {
                                $('#' + name + '').css('font-weight', settings.thickness);
                            }
                        }
                        if (settings.size) {
                            $('#' + name + '').css('font-size', settings.size);
                        }
                        if (settings.commands) {
                            execute(name, settings.commands);
                        }
                        if (settings.width) {
                            $('#' + name + '').css('width', settings.width);
                        }
                        if (settings.length) {
                            $('#' + name + '').css('height', settings.length);
                        }
                        if (settings.animation) {
                            setAnimation(name, settings.animation);
                        }
                        if (settings.transparency) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings.transparency + '%)');
                        }
                    });
                };
                $.fn[dialogBoxTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        title: null,
                        body: null,
                        acceptButton: null,
                        cancelButton: null,
                        emitter: null,
                        scrollable: null,
                        fontColour: null,
                        size: null,
						[nameTranslations[lang]]: null,
						[widthTranslations[lang]]: null,
						[lengthTranslations[lang]]: null,
                        thickness: null,
                        fontStyle: null,
						[animationTranslations[lang]]: null,
                        transparency: null,
						[backgroundTranslations[lang]]: null,
						[commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings.name;
                        var body = settings.body.split('&&&');
                        var out = '<paper-dialog id="' + name + '">';
                        if (settings.title) {
                            out += '<h2>' + settings.title + '</h2>';
                        }
                        if (settings.body) {
                            for (i = 0; i < body.length; i++) {
                                if (settings.scrollable == yesTranslations[lang]) {
                                    out += '<paper-dialog-scrollable><p>' + body[i] + '</p></paper-dialog-scrollable>';
                                } else {
                                    out += '<p>' + body[i] + '</p>';
                                }
                            }
                        }
                        if (settings.cancelButton || settings.acceptButton) {
                            out += '<div class="buttons">'
                            if (settings.cancelButton) {
                                out += '<paper-button dialog-dismiss>' + settings.cancelButton + '</paper-button>';
                            }
                            if (settings.acceptButton) {
                                out += '<paper-button dialog-confirm autofocus>' + settings.acceptButton + '</paper-button>';
                            }
                            out += '</div>';
                        }
                        out += '</paper-dialog>';
                        $('contents').append(out);
                        if (settings.fontColour) {
                            setFontColour(name, settings.fontColour);
                        }
                        if (settings.fontStyle) {
                            $('#' + name + '').css('font-style', settings.fontStyle);
                        }
                        if (settings.emitter) {
                            $('#' + settings.emitter + '').attr('onclick', settings.name + '.open()');
                        }
                        if (settings.background) {
                            setBG(name, settings.background);
                        }
                        if (settings.thickness) {
                            if (settings.thickness == 'thick') {
                                $('#' + name + '').css('font-weight', 'bold');
                            } else {
                                $('#' + name + '').css('font-weight', settings.thickness);
                            }
                        }
                        if (settings.size) {
                            $('#' + name + '').css('font-size', settings.size);
                        }
                        if (settings.commands) {
                            execute(name, settings.commands);
                        }
                        if (settings.width) {
                            $('#' + name + '').css('width', settings.width);
                        }
                        if (settings.length) {
                            $('#' + name + '').css('height', settings.length);
                        }
                        if (settings.animation) {
                            setAnimation(name, settings.animation);
                        }
                        if (settings.transparency) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings.transparency + '%)');
                        }
                    });
                };
                $.fn[dropdownTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        title: null,
                        items: null,
                        ripple: null,
                        preselected: null,
                        disabled: null,
                        fontColour: null,
                        size: null,
						[nameTranslations[lang]]: null,
						[widthTranslations[lang]]: null,
						[lengthTranslations[lang]]: null,
                        thickness: null,
                        fontStyle: null,
						[animationTranslations[lang]]: null,
                        transparency: null,
						[backgroundTranslations[lang]]: null,
						[commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings.name;
                        var out = '<paper-dropdown-menu id="' + name + '" label="' + settings.title + '">';
                        if (settings.items) {
                            var items = settings.items.split(' &&& ');
                            out += '<paper-listbox id="' + name + '-contents" class="dropdown-content" '
                            if (settings.preselected) {
                                out += 'selected="' + settings.preselected + '">'
                            } else {
                                out += '>'
                            }
                            for (i = 0; i < items.length; i++) {
                                out += '<paper-item>' + items[i] + '</paper-item>';
                            }
                            out += '</paper-listbox>';
                        }
                        out += '</paper-dropdown-menu>';
                        $('contents').append(out);
                        if (settings.fontColour) {
                            setFontColour(name, settings.fontColour);
                        }
                        if (settings.fontStyle) {
                            $('#' + name + '').css('font-style', settings.fontStyle);
                        }
                        if (settings.disabled == yesTranslations[lang]) {
                            $('#' + name + '').attr('disabled', '');
                        }
                        if (settings.ripple == noTranslations[lang]) {
                            $('#' + name + '').attr('noink', '');
                        }
                        if (settings.thickness) {
                            if (settings.thickness == 'thick') {
                                $('#' + name + '').css('font-weight', 'bold');
                            } else {
                                $('#' + name + '').css('font-weight', settings.thickness);
                            }
                        }
                        if (settings.size) {
                            $('#' + name + '').css('font-size', settings.size);
                        }
                        if (settings.commands) {
                            execute(name, settings.commands);
                        }
                        if (settings.width) {
                            $('#' + name + '').css('width', settings.width);
                        }
                        if (settings.background) {
                            setBG(name, settings.background);
                        }
                        if (settings.length) {
                            $('#' + name + '').css('height', settings.length);
                        }
                        if (settings.animation) {
                            setAnimation(name, settings.animation);
                        }
                        if (settings.transparency) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings.transparency + '%)');
                        }
                    });
                };
                $.fn[FABTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        description: null,
                        icon: null,
						[textTranslations[lang]]: null,
                        ripple: null,
                        mini: null,
                        disabled: null,
                        ripple: null,
                        fontColour: null,
                        size: null,
						[nameTranslations[lang]]: null,
						[widthTranslations[lang]]: null,
						[lengthTranslations[lang]]: null,
                        thickness: null,
                        fontStyle: null,
						[animationTranslations[lang]]: null,
                        transparency: null,
						[backgroundTranslations[lang]]: null,
						[commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings.name;
                        var out = '<paper-fab ';
                        if (settings.mini == yesTranslations[lang]) {
                            out += 'mini ';
                        }
                        if (settings.disabled == yesTranslations[lang]) {
                            out += 'disabled ';
                        }
                        if (settings.ripple == noTranslations[lang]) {
                            out += 'noink ';
                        }
                        if (settings.text) {
                            out += 'label="' + settings.text + '" ';
                        }
                        if (settings.icon) {
                            out += 'icon="' + settings.icon + '" ';
                        }
                        if (settings.description) {
                            out += 'title="' + settings.description + '" ';
                        }
                        out += 'id="' + name + '"></paper-fab>';
                        $('contents').append(out);
                        if (settings.fontColour) {
                            setFontColour(name, settings.fontColour);
                        }
                        if (settings.fontStyle) {
                            $('#' + name + '').css('font-style', settings.fontStyle);
                        }
                        if (settings.disabled == yesTranslations[lang]) {
                            $('#' + name + '').attr('disabled', '');
                        }
                        if (settings.ripple == noTranslations[lang]) {
                            $('#' + name + '').attr('noink', '');
                        }
                        if (settings.thickness) {
                            if (settings.thickness == 'thick') {
                                $('#' + name + '').css('font-weight', 'bold');
                            } else {
                                $('#' + name + '').css('font-weight', settings.thickness);
                            }
                        }
                        if (settings.size) {
                            $('#' + name + '').css('font-size', settings.size);
                        }
                        if (settings.commands) {
                            execute(name, settings.commands);
                        }
                        if (settings.width) {
                            $('#' + name + '').css('width', settings.width);
                        }
                        if (settings.background) {
                            setBG(name, settings.background);
                        }
                        if (settings.length) {
                            $('#' + name + '').css('height', settings.length);
                        }
                        if (settings.animation) {
                            setAnimation(name, settings.animation);
                        }
                        if (settings.transparency) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings.transparency + '%)');
                        }
                    });
                };
                $.fn[textboxTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        type: null,
                        max: null,
                        min: null,
                        requirement: null,
                        errorMessage: null,
                        prefix: null,
                        suffix: null,
                        clearButton: null,
                        required: null,
                        counter: null,
                        dynamicSize: null,
                        disabled: null,
                        ripple: null,
                        fontColour: null,
                        size: null,
						[nameTranslations[lang]]: null,
						[widthTranslations[lang]]: null,
						[lengthTranslations[lang]]: null,
                        thickness: null,
                        fontStyle: null,
						[animationTranslations[lang]]: null,
                        transparency: null,
						[backgroundTranslations[lang]]: null,
						[commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings.name;
                        if (settings.dynamicSize == yesTranslations[lang]) {
                            var out = '<paper-textarea ';
                        } else {
                            var out = '<paper-input '
                        }
                        if (settings.title) {
                            out += 'label="' + settings.title + '" ';
                        }
                        if (settings.type == 'password') {
                            out += 'type="password" ';
                        } else if (settings.type == 'number') {
                            out += 'type="number" ';
                        } else if (settings.type) {
                            out += 'type="' + settings.type + '" ';
                        }
                        if (settings.requirement == 'someText') {
                            out += 'auto-validate ';
                        } else if (settings.requirement == 'lettersOnly') {
                            out += 'auto-validate allowed-pattern="[a-zA-Z]"';
                        } else if (settings.requirement) {
                            out += 'auto-validate allowed-pattern="' + settings.requirement + '"';
                        }
                        if (settings.max) {
                            out += 'maxlength="' + settings.max + '" ';
                        }
                        if (settings.min) {
                            out += 'minlength="' + settings.min + '" ';
                        }
                        if (settings.disabled == yesTranslations[lang]) {
                            out += 'disabled ';
                        }
                        if (settings.counter == yesTranslations[lang]) {
                            out += 'char-counter ';
                        }
                        if (settings.ripple == noTranslations[lang]) {
                            out += 'noink ';
                        }
                        if (settings.text) {
                            out += 'label="' + settings.text + '" ';
                        }
                        if (settings.icon) {
                            out += 'icon="' + settings.icon + '" ';
                        }
                        if (settings.description) {
                            out += 'title="' + settings.description + '" ';
                        }
                        out += 'id="' + name + '">';
                        if (settings.prefix) {
                            var prefix = settings.prefix.split(' &&& ');
                            for (i = 0; i < prefix.length; i++) {
                                if (prefix[i].split("An icon of ")[1]) {
                                    out += '<iron-icon icon="' + prefix[i].split("An icon of ")[1] + '" prefix></iron-icon>';
                                } else {
                                    out += '<div prefix>' + prefix[i] + '</div>';
                                }
                            }
                        }
                        if (settings.suffix) {
                            var suffix = settings.suffix.split(' &&& ');
                            for (i = 0; i < suffix.length; i++) {
                                if (suffix[i].split("An icon of ")[1]) {
                                    out += '<iron-icon icon="' + suffix[i].split("An icon of ")[1] + '" suffix></iron-icon>';
                                } else {
                                    out += '<div suffix>' + suffix[i] + '</div>';
                                }
                            }
                        }
                        if (settings.clearButton == yesTranslations[lang]) {
                            out += '<paper-icon-button suffix onclick="clearInput()" icon="clear" alt="clear" title="clear"></paper-icon-button>';
                        }
                        if (settings.dynamicSize == yesTranslations[lang]) {
                            out += '</paper-textarea>';
                        } else {
                            out += '</paper-input>'
                        }
                        $('contents').append(out);
                        if (settings.fontColour) {
                            setFontColour(name, settings.fontColour);
                        }
                        if (settings.fontStyle) {
                            $('#' + name + '').css('font-style', settings.fontStyle);
                        }
                        if (settings.disabled == yesTranslations[lang]) {
                            $('#' + name + '').attr('disabled', '');
                        }
                        if (settings.ripple == noTranslations[lang]) {
                            $('#' + name + '').attr('noink', '');
                        }
                        if (settings.thickness) {
                            if (settings.thickness == 'thick') {
                                $('#' + name + '').css('font-weight', 'bold');
                            } else {
                                $('#' + name + '').css('font-weight', settings.thickness);
                            }
                        }
                        if (settings.size) {
                            $('#' + name + '').css('font-size', settings.size);
                        }
                        if (settings.commands) {
                            execute(name, settings.commands);
                        }
                        if (settings.width) {
                            $('#' + name + '').css('width', settings.width);
                        }
                        if (settings.length) {
                            $('#' + name + '').css('height', settings.length);
                        }
                        if (settings.animation) {
                            setAnimation(name, settings.animation);
                        }
                        if (settings.background) {
                            setBG(name, settings.background);
                        }
                        if (settings.transparency) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings.transparency + '%)');
                        }
                    });
                };
                $.fn[sliderTranslations[lang]] = function (options) {
                    // Establish our default settings
                    var settings = $.extend({
                        title: null,
                        max: null,
                        min: null,
                        step: null,
                        progress: null,
                        prevalue: null,
                        valueBox: null,
						[pinTranslations[lang]]: null,
                        disabled: null,
                        fontColour: null,
                        size: null,
						[nameTranslations[lang]]: null,
						[widthTranslations[lang]]: null,
						[lengthTranslations[lang]]: null,
                        thickness: null,
                        fontStyle: null,
						[animationTranslations[lang]]: null,
                        transparency: null,
						[backgroundTranslations[lang]]: null,
						[commandsTranslations[lang]]: null
                    }, options);
                    return this.each(function () {
                        var name = settings.name;
                        if (settings.title) {
                            var out = '<div>' + settings.title + '</div><br><paper-slider ';
                        } else {
                            var out = '<paper-slider '
                        }
                        if (settings.max) {
                            out += 'max="' + settings.max + '" ';
                        }
                        if (settings.min) {
                            out += 'min="' + settings.min + '" ';
                        }
                        if (settings.progress) {
                            out += 'secondary-progress="' + settings.progress + '" ';
                        }
                        if (settings.step) {
                            out += 'step="' + settings.step + '" ';
                        }
                        if (settings.disabled == yesTranslations[lang]) {
                            out += 'disabled ';
                        }
                        if (settings.pin == yesTranslations[lang]) {
                            out += 'pin ';
                        }
                        if (settings.valueBox == yesTranslations[lang]) {
                            out += 'editable ';
                        }
                        out += 'id="' + name + '">';
                        out += '</paper-slider>'
                        $('contents').append(out);
                        if (settings.fontColour) {
                            setFontColour(name, settings.fontColour);
                        }
                        if (settings.fontStyle) {
                            $('#' + name + '').css('font-style', settings.fontStyle);
                        }
                        if (settings.disabled == yesTranslations[lang]) {
                            $('#' + name + '').attr('disabled', '');
                        }
                        if (settings.ripple == noTranslations[lang]) {
                            $('#' + name + '').attr('noink', '');
                        }
                        if (settings.thickness) {
                            if (settings.thickness == 'thick') {
                                $('#' + name + '').css('font-weight', 'bold');
                            } else {
                                $('#' + name + '').css('font-weight', settings.thickness);
                            }
                        }
                        if (settings.size) {
                            $('#' + name + '').css('font-size', settings.size);
                        }
                        if (settings.commands) {
                            execute(name, settings.commands);
                        }
                        if (settings.width) {
                            $('#' + name + '').css('width', settings.width);
                        }
                        if (settings.background) {
                            setBG(name, settings.background);
                        }
                        if (settings.length) {
                            $('#' + name + '').css('height', settings.length);
                        }
                        if (settings.animation) {
                            setAnimation(name, settings.animation);
                        }
                        if (settings.transparency) {
                            $('#' + name + '').css('-webkit-filter', 'opacity(' + settings.transparency + '%)');
                        }
                    });
                };
            });
        };
    });
}(jQuery));
