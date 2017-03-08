(function($) {

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

    $.fn.كلام = function(options) {

        // Establish our default settings
        var settings = $.extend({
            الكلام: 'انت شكلك نسيت تكتب حاجة',
            اللون: null,
            الحجم: null,
            الاسم: null,
            العرض: null,
            الطول: null,
            الطخن: null,
            شكل_الخط: null,
            الحركة: null,
            لما_يخلص_تحميل: null
        }, options);

        return this.each(function() {
            var name = settings.الاسم;
            var out = '<p id="' + name + '"></p>';
            $('Eطبق_السلطة').append(out);
            $('#' + name + '').text(settings.الكلام);

            if (settings.اللون) {
                if (settings.اللون == 'اسود') {
                    $('#' + name + '').css('color', '#000000');
                } else if (settings.اللون == 'احمر') {
                    $('#' + name + '').css('color', '#F44336');
                } else if (settings.اللون == 'ازرق') {
                    $('#' + name + '').css('color', '#2196F3');
                } else if (settings.اللون == 'اورانج') {
                    $('#' + name + '').css('color', '#FF9800');
                } else if (settings.اللون == 'لبنى') {
                    $('#' + name + '').css('color', '#00BCD4');
                } else if (settings.اللون == 'رصاصى') {
                    $('#' + name + '').css('color', '#9E9E9E');
                } else if (settings.اللون == 'اخضر') {
                    $('#' + name + '').css('color', '#4CAF50');
                } else if (settings.اللون == 'ابيض') {
                    $('#' + name + '').css('color', '#FFFFFF');
                } else if (settings.اللون == 'برتقانى') {
                    $('#' + name + '').css('color', '#FF9800');
                } else if (settings.اللون == 'برتقالى') {
                    $('#' + name + '').css('color', '#FF9800');
                } else if (settings.اللون == 'اصفر') {
                    $('#' + name + '').css('color', '#FFEB3B');
                } else if (settings.اللون == 'بنى') {
                    $('#' + name + '').css('color', '#795548');
                } else if (settings.اللون == 'تركواز') {
                    $('#' + name + '').css('color', '#009688');
                } else if (settings.اللون == 'بينك') {
                    $('#' + name + '').css('color', '#E91E63');
                } else if (settings.اللون == 'بمبى') {
                    $('#' + name + '').css('color', '#E91E63');
                } else if (settings.اللون == 'روز') {
                    $('#' + name + '').css('color', '#E91E63');
                } else if (settings.اللون == 'اخضر_فاتح') {
                    $('#' + name + '').css('color', '#8BC34A');
                } else {
                $('#' + name + '').css('color', settings.اللون);
}
            }

                        if (settings.شكل_الخط) {

                $('#' + name + '').css('font-style', settings.شكل_الخط);
            }



            if (settings.الطخن) {
                if (settings.الطخن == 'طخين') {
$('#' + name + '').css('font-weight', 'bold');
                   
                } else {
 $('#' + name + '').css('font-weight', settings.الطخن);
}
            }
            if (settings.الحجم) {
                $('#' + name + '').css('font-size', settings.الحجم);
            }
            if (settings.العرض) {
                $('#' + name + '').css('width', settings.العرض);
            }
            if (settings.الطول) {
                $('#' + name + '').css('height', settings.الطول);
            }
            if (settings.الحركة) {
                if (settings.الحركة == 'بيطنطط') {
                    $('#' + name + '').animateCss('bounce');
                } else {
$('#' + name + '').animateCss(settings.الحركة);
}
            }
if (settings.الشفافية) {
                $('#' + name + '').css('-webkit-filter', 'opacity(' + settings.الشفافية + '%)');
            }
            if ($.isFunction(settings.لما_يخلص_تحميل)) {
                settings.لما_يخلص_تحميل.call(this);
            }
        });

    };

    $.fn.زرار = function(options) {

        // Establish our default settings
        var settings = $.extend({
            الكلام: 'انت شكلك نسيت تكتب حاجة',
            لون_الخط: null,
            الحجم: null,
            الاسم: null,
            العرض: null,
            الطول: null,
            الطخن: null,
            شكل_الخط: null,
            مقفول: null,
            مرفوع: null,
            سويتش: null,
            الحركة: null,
            لما_يخلص_تحميل: null
        }, options);

        return this.each(function() {
            var name = settings.الاسم;
            var out = '<paper-button id="' + name + '"></paper-button>';
            $('Eطبق_السلطة').append(out);
            $('#' + name + '').text(settings.الكلام);

            if (settings.لون_الخط) {
                if (settings.لون_الخط == 'اسود') {
                    $('#' + name + '').css('color', '#000000');
                } else if (settings.لون_الخط == 'احمر') {
                    $('#' + name + '').css('color', '#F44336');
                } else if (settings.لون_الخط == 'ازرق') {
                    $('#' + name + '').css('color', '#2196F3');
                } else if (settings.لون_الخط == 'اورانج') {
                    $('#' + name + '').css('color', '#FF9800');
                } else if (settings.لون_الخط == 'لبنى') {
                    $('#' + name + '').css('color', '#00BCD4');
                } else if (settings.لون_الخط == 'رصاصى') {
                    $('#' + name + '').css('color', '#9E9E9E');
                } else if (settings.لون_الخط == 'اخضر') {
                    $('#' + name + '').css('color', '#4CAF50');
                } else if (settings.لون_الخط == 'ابيض') {
                    $('#' + name + '').css('color', '#FFFFFF');
                } else if (settings.لون_الخط == 'برتقانى') {
                    $('#' + name + '').css('color', '#FF9800');
                } else if (settings.لون_الخط == 'برتقالى') {
                    $('#' + name + '').css('color', '#FF9800');
                } else if (settings.لون_الخط == 'اصفر') {
                    $('#' + name + '').css('color', '#FFEB3B');
                } else if (settings.لون_الخط == 'بنى') {
                    $('#' + name + '').css('color', '#795548');
                } else if (settings.لون_الخط == 'تركواز') {
                    $('#' + name + '').css('color', '#009688');
                } else if (settings.لون_الخط == 'بينك') {
                    $('#' + name + '').css('color', '#E91E63');
                } else if (settings.لون_الخط == 'بمبى') {
                    $('#' + name + '').css('color', '#E91E63');
                } else if (settings.لون_الخط == 'روز') {
                    $('#' + name + '').css('color', '#E91E63');
                } else if (settings.لون_الخط == 'اخضر_فاتح') {
                    $('#' + name + '').css('color', '#8BC34A');
                } else {
                $('#' + name + '').css('color', settings.لون_الخط);
}
            }

                        if (settings.شكل_الخط) {

                $('#' + name + '').css('font-style', settings.شكل_الخط);
            }
            
 if (settings.مقفول == 'ايوة') {
     $('#' + name + '').attr('disabled','');
            }
            
             if (settings.مرفوع == 'ايوة') {
     $('#' + name + '').attr('raised','');
            }
            
                         if (settings.سويتش == 'ايوة') {
     $('#' + name + '').attr('toggles','');
            }
            
            if (settings.الطخن) {
                if (settings.الطخن == 'طخين') {
$('#' + name + '').css('font-weight', 'bold');
                   
                } else {
 $('#' + name + '').css('font-weight', settings.الطخن);
}
            }
            if (settings.الحجم) {
                $('#' + name + '').css('font-size', settings.الحجم);
            }
            if (settings.العرض) {
                $('#' + name + '').css('width', settings.العرض);
            }
            if (settings.الطول) {
                $('#' + name + '').css('height', settings.الطول);
            }
            if (settings.الحركة) {
                if (settings.الحركة == 'بيطنطط') {
                    $('#' + name + '').animateCss('bounce');
                } else {
$('#' + name + '').animateCss(settings.الحركة);
}
            }
if (settings.الشفافية) {
                $('#' + name + '').css('-webkit-filter', 'opacity(' + settings.الشفافية + '%)');
            }
            if ($.isFunction(settings.لما_يخلص_تحميل)) {
                settings.لما_يخلص_تحميل.call(this);
            }
        });

    };
   
    $.fn.ايكونة = function(options) {

        // Establish our default settings
        var settings = $.extend({
            لون_الايكونة: null,
            الايكونة: null,
            الحجم: null,
            الاسم: null,
            العرض: null,
            الطول: null,
            الحركة: null,
            لما_يخلص_تحميل: null
        }, options);

        return this.each(function() {
            var name = settings.الاسم;
            var icon = settings.الايكونة;
            var out = '<iron-icon id="' + name + '" icon="' + icon + '"></iron-icon>';
            $('Eطبق_السلطة').append(out);

            if (settings.لون_الايكونة) {
                if (settings.لون_الايكونة == 'اسود') {
                    $('#' + name + '').css('color', '#000000');
                } else if (settings.لون_الايكونة == 'احمر') {
                    $('#' + name + '').css('color', '#F44336');
                } else if (settings.لون_الايكونة == 'ازرق') {
                    $('#' + name + '').css('color', '#2196F3');
                } else if (settings.لون_الايكونة == 'اورانج') {
                    $('#' + name + '').css('color', '#FF9800');
                } else if (settings.لون_الايكونة == 'لبنى') {
                    $('#' + name + '').css('color', '#00BCD4');
                } else if (settings.لون_الايكونة == 'رصاصى') {
                    $('#' + name + '').css('color', '#9E9E9E');
                } else if (settings.لون_الايكونة == 'اخضر') {
                    $('#' + name + '').css('color', '#4CAF50');
                } else if (settings.لون_الايكونة == 'ابيض') {
                    $('#' + name + '').css('color', '#FFFFFF');
                } else if (settings.لون_الايكونة == 'برتقانى') {
                    $('#' + name + '').css('color', '#FF9800');
                } else if (settings.لون_الايكونة == 'برتقالى') {
                    $('#' + name + '').css('color', '#FF9800');
                } else if (settings.لون_الايكونة == 'اصفر') {
                    $('#' + name + '').css('color', '#FFEB3B');
                } else if (settings.لون_الايكونة == 'بنى') {
                    $('#' + name + '').css('color', '#795548');
                } else if (settings.لون_الايكونة == 'تركواز') {
                    $('#' + name + '').css('color', '#009688');
                } else if (settings.لون_الايكونة == 'بينك') {
                    $('#' + name + '').css('color', '#E91E63');
                } else if (settings.لون_الايكونة == 'بمبى') {
                    $('#' + name + '').css('color', '#E91E63');
                } else if (settings.لون_الايكونة == 'روز') {
                    $('#' + name + '').css('color', '#E91E63');
                } else if (settings.لون_الايكونة == 'اخضر_فاتح') {
                    $('#' + name + '').css('color', '#8BC34A');
                } else {
                $('#' + name + '').css('color', settings.لون_الايكونة);
}
            }

                        
            if (settings.الحجم) {
                $('#' + name + '').css('font-size', settings.الحجم);
            }
            if (settings.العرض) {
                $('#' + name + '').css('width', settings.العرض);
            }
            if (settings.الطول) {
                $('#' + name + '').css('height', settings.الطول);
            }
            if (settings.الحركة) {
                if (settings.الحركة == 'بيطنطط') {
                    $('#' + name + '').animateCss('bounce');
                } else {
$('#' + name + '').animateCss(settings.الحركة);
}
            }
if (settings.الشفافية) {
                $('#' + name + '').css('-webkit-filter', 'opacity(' + settings.الشفافية + '%)');
            }
            if ($.isFunction(settings.لما_يخلص_تحميل)) {
                settings.لما_يخلص_تحميل.call(this);
            }
        });

    };
    $.fn.زرار_بأيكونة = function(options) {

                // Establish our default settings
        var settings = $.extend({
            لون_الايكونة: null,
            الايكونة: null,
            الحجم: null,
            الاسم: null,
            العرض: null,
            الطول: null,
            الحركة: null,
            لما_يخلص_تحميل: null
        }, options);

        return this.each(function() {
            var name = settings.الاسم;
            var icon = settings.الايكونة;
            var out = '<paper-icon-button id="' + name + '" icon="' + icon + '"></paper-icon-button>';
            $('Eطبق_السلطة').append(out);

            if (settings.لون_الايكونة) {
                if (settings.لون_الايكونة == 'اسود') {
                    $('#' + name + '').css('color', '#000000');
                } else if (settings.لون_الايكونة == 'احمر') {
                    $('#' + name + '').css('color', '#F44336');
                } else if (settings.لون_الايكونة == 'ازرق') {
                    $('#' + name + '').css('color', '#2196F3');
                } else if (settings.لون_الايكونة == 'اورانج') {
                    $('#' + name + '').css('color', '#FF9800');
                } else if (settings.لون_الايكونة == 'لبنى') {
                    $('#' + name + '').css('color', '#00BCD4');
                } else if (settings.لون_الايكونة == 'رصاصى') {
                    $('#' + name + '').css('color', '#9E9E9E');
                } else if (settings.لون_الايكونة == 'اخضر') {
                    $('#' + name + '').css('color', '#4CAF50');
                } else if (settings.لون_الايكونة == 'ابيض') {
                    $('#' + name + '').css('color', '#FFFFFF');
                } else if (settings.لون_الايكونة == 'برتقانى') {
                    $('#' + name + '').css('color', '#FF9800');
                } else if (settings.لون_الايكونة == 'برتقالى') {
                    $('#' + name + '').css('color', '#FF9800');
                } else if (settings.لون_الايكونة == 'اصفر') {
                    $('#' + name + '').css('color', '#FFEB3B');
                } else if (settings.لون_الايكونة == 'بنى') {
                    $('#' + name + '').css('color', '#795548');
                } else if (settings.لون_الايكونة == 'تركواز') {
                    $('#' + name + '').css('color', '#009688');
                } else if (settings.لون_الايكونة == 'بينك') {
                    $('#' + name + '').css('color', '#E91E63');
                } else if (settings.لون_الايكونة == 'بمبى') {
                    $('#' + name + '').css('color', '#E91E63');
                } else if (settings.لون_الايكونة == 'روز') {
                    $('#' + name + '').css('color', '#E91E63');
                } else if (settings.لون_الايكونة == 'اخضر_فاتح') {
                    $('#' + name + '').css('color', '#8BC34A');
                } else {
                $('#' + name + '').css('color', settings.لون_الايكونة);
}
            }

                        
            if (settings.الحجم) {
                $('#' + name + '').css('font-size', settings.الحجم);
            }
            if (settings.العرض) {
                $('#' + name + '').css('width', settings.العرض);
            }
            if (settings.الطول) {
                $('#' + name + '').css('height', settings.الطول);
            }
            if (settings.الحركة) {
                if (settings.الحركة == 'بيطنطط') {
                    $('#' + name + '').animateCss('bounce');
                } else {
$('#' + name + '').animateCss(settings.الحركة);
}
            }
if (settings.الشفافية) {
                $('#' + name + '').css('-webkit-filter', 'opacity(' + settings.الشفافية + '%)');
            }
            if ($.isFunction(settings.لما_يخلص_تحميل)) {
                settings.لما_يخلص_تحميل.call(this);
            }
        });
    };
    $.fn.سيكشن = function(options) {

        // Establish our default settings
        var settings = $.extend({
            الكلام: 'انت شكلك نسيت تكتب حاجة',
            لون_الخط: null,
            الحجم: null,
            الاسم: null,
            العرض: null,
            الطول: null,
            الطخن: null,
            شكل_الخط: null,
            مقفول: null,
            مرفوع: null,
            سويتش: null,
            الحركة: null,
            لما_يخلص_تحميل: null
        }, options);

        return this.each(function() {
            var name = settings.الاسم;
            var out = '<paper-card id="' + name + '"><div id="الحاجات_اللى_جوة_السيكشن" class="card-content"></div></paper-card>';
            $('Eطبق_السلطة').append(out);


            if (settings.الخلفية) {
                if (settings.الخلفية == 'سودة') {
                    $('#' + name + '').css('background', '#000000');
                } else if (settings.الخلفية == 'حمرة') {
                    $('#' + name + '').css('background', '#F44336');
                } else if (settings.الخلفية == 'زرقة') {
                    $('#' + name + '').css('background', '#2196F3');
                } else if (settings.الخلفية == 'اورانج') {
                    $('#' + name + '').css('background', '#FF9800');
                } else if (settings.الخلفية == 'لبنى') {
                    $('#' + name + '').css('background', '#00BCD4');
                } else if (settings.الخلفية == 'رصاصى') {
                    $('#' + name + '').css('background', '#9E9E9E');
                } else if (settings.الخلفية == 'خضرة') {
                    $('#' + name + '').css('background', '#4CAF50');
                } else if (settings.الخلفية == 'بيضة') {
                    $('#' + name + '').css('background', '#FFFFFF');
                } else if (settings.الخلفية == 'برتقانى') {
                    $('#' + name + '').css('background', '#FF9800');
                } else if (settings.الخلفية == 'برتقالى') {
                    $('#' + name + '').css('background', '#FF9800');
                } else if (settings.الخلفية == 'صفرة') {
                    $('#' + name + '').css('background', '#FFEB3B');
                } else if (settings.الخلفية == 'بنى') {
                    $('#' + name + '').css('background', '#795548');
                } else if (settings.الخلفية == 'تركواز') {
                    $('#' + name + '').css('background', '#009688');
                } else if (settings.الخلفية == 'بينك') {
                    $('#' + name + '').css('background', '#E91E63');
                } else if (settings.الخلفية == 'بمبى') {
                    $('#' + name + '').css('background', '#E91E63');
                } else if (settings.الخلفية == 'روز') {
                    $('#' + name + '').css('background', '#E91E63');
                } else if (settings.الخلفية == 'اخضر_فاتح') {
                    $('#' + name + '').css('background', '#8BC34A');
                } else {
                $('#' + name + '').css('background', settings.الخلفية);
}
            }


            
             if (settings.مصدر_الصورة) {
                $('#' + name + '').attr('image', settings.مصدر_الصورة);
            }
            

            if (settings.العرض) {
                $('#' + name + '').css('width', settings.العرض);
            }
            if (settings.الطول) {
                $('#' + name + '').css('height', settings.الطول);
            }
            if (settings.الحركة) {
                if (settings.الحركة == 'بيطنطط') {
                    $('#' + name + '').animateCss('bounce');
                } else {
$('#' + name + '').animateCss(settings.الحركة);
}
            }
if (settings.الشفافية) {
                $('#' + name + '').css('-webkit-filter', 'opacity(' + settings.الشفافية + '%)');
            }
            if ($.isFunction(settings.لما_يخلص_تحميل)) {
                settings.لما_يخلص_تحميل.call(this);
            }
        });

    };
    
    
    $.fn.التوضيح = function(options) {

        // Establish our default settings
        var settings = $.extend({
            الكلام: 'انت شكلك نسيت تكتب حاجة',
            لون_الخط: null,
            الحجم: null,
            الاسم: null,
            العرض: null,
            الطول: null,
            الطخن: null,
            شكل_الخط: null,
            الام: null,
            المكان: null,
            الحركة: null,
            لما_يخلص_تحميل: null
        }, options);

        return this.each(function() {
            var name = settings.الاسم;
            var out = '<paper-tooltip id="' + name + '" for="' + settings.الام + '"></paper-tooltip>';
            $('Eطبق_السلطة').append(out);
            $('#' + name + '').text(settings.الكلام);

            if (settings.لون_الخط) {
                if (settings.لون_الخط == 'اسود') {
                    $('#' + name + '').css('color', '#000000');
                } else if (settings.لون_الخط == 'احمر') {
                    $('#' + name + '').css('color', '#F44336');
                } else if (settings.لون_الخط == 'ازرق') {
                    $('#' + name + '').css('color', '#2196F3');
                } else if (settings.لون_الخط == 'اورانج') {
                    $('#' + name + '').css('color', '#FF9800');
                } else if (settings.لون_الخط == 'لبنى') {
                    $('#' + name + '').css('color', '#00BCD4');
                } else if (settings.لون_الخط == 'رصاصى') {
                    $('#' + name + '').css('color', '#9E9E9E');
                } else if (settings.لون_الخط == 'اخضر') {
                    $('#' + name + '').css('color', '#4CAF50');
                } else if (settings.لون_الخط == 'ابيض') {
                    $('#' + name + '').css('color', '#FFFFFF');
                } else if (settings.لون_الخط == 'برتقانى') {
                    $('#' + name + '').css('color', '#FF9800');
                } else if (settings.لون_الخط == 'برتقالى') {
                    $('#' + name + '').css('color', '#FF9800');
                } else if (settings.لون_الخط == 'اصفر') {
                    $('#' + name + '').css('color', '#FFEB3B');
                } else if (settings.لون_الخط == 'بنى') {
                    $('#' + name + '').css('color', '#795548');
                } else if (settings.لون_الخط == 'تركواز') {
                    $('#' + name + '').css('color', '#009688');
                } else if (settings.لون_الخط == 'بينك') {
                    $('#' + name + '').css('color', '#E91E63');
                } else if (settings.لون_الخط == 'بمبى') {
                    $('#' + name + '').css('color', '#E91E63');
                } else if (settings.لون_الخط == 'روز') {
                    $('#' + name + '').css('color', '#E91E63');
                } else if (settings.لون_الخط == 'اخضر_فاتح') {
                    $('#' + name + '').css('color', '#8BC34A');
                } else {
                $('#' + name + '').css('color', settings.لون_الخط);
}
            }

                        if (settings.شكل_الخط) {

                $('#' + name + '').css('font-style', settings.شكل_الخط);
            }
            
            if (settings.الطخن) {
                if (settings.الطخن == 'طخين') {
$('#' + name + '').css('font-weight', 'bold');
                   
                } else {
 $('#' + name + '').css('font-weight', settings.الطخن);
}
            }
            if (settings.الحجم) {
                $('#' + name + '').css('font-size', settings.الحجم);
            }
            if (settings.العرض) {
                $('#' + name + '').css('width', settings.العرض);
            }
            if (settings.الطول) {
                $('#' + name + '').css('height', settings.الطول);
            }
            if (settings.الحركة) {
                if (settings.الحركة == 'بيطنطط') {
                    $('#' + name + '').animateCss('bounce');
                } else {
$('#' + name + '').animateCss(settings.الحركة);
}
            }
             if (settings.المكان == 'على_اللمين') {
     $('#' + name + '').attr('position','right');
             }
                 else if (settings.المكان == 'على_الشمال') {
     $('#' + name + '').attr('position','left');
                 }
                     else if (settings.المكان == 'من_فوق') {
     $('#' + name + '').attr('position','top');
                     }
                         else if (settings.المكان == 'من_تحت') {
     $('#' + name + '').attr('position','bottom');
                         }
                             else {
                                 
            }
if (settings.الشفافية) {
                $('#' + name + '').css('-webkit-filter', 'opacity(' + settings.الشفافية + '%)');
            }
            if ($.isFunction(settings.لما_يخلص_تحميل)) {
                settings.لما_يخلص_تحميل.call(this);
            }
        });

    };
    $.fn.بلتة_الوان = function(options) {

        // Establish our default settings
        var settings = $.extend({
            الاسم: null,
            العرض: null,
            الطول: null,
            الحركة: null,
            لما_يخلص_تحميل: null
        }, options);

        return this.each(function() {
            var name = settings.الاسم;
            var out = '<paper-swatch-picker id="' + name + '" color="{{selectedColor}}"></paper-swatch-picker>';
            $('Eطبق_السلطة').append(out);

            if (settings.لون_الخط) {
                if (settings.لون_الخط == 'اسود') {
                    $('#' + name + '').css('color', '#000000');
                } else if (settings.لون_الخط == 'احمر') {
                    $('#' + name + '').css('color', '#F44336');
                } else if (settings.لون_الخط == 'ازرق') {
                    $('#' + name + '').css('color', '#2196F3');
                } else if (settings.لون_الخط == 'اورانج') {
                    $('#' + name + '').css('color', '#FF9800');
                } else if (settings.لون_الخط == 'لبنى') {
                    $('#' + name + '').css('color', '#00BCD4');
                } else if (settings.لون_الخط == 'رصاصى') {
                    $('#' + name + '').css('color', '#9E9E9E');
                } else if (settings.لون_الخط == 'اخضر') {
                    $('#' + name + '').css('color', '#4CAF50');
                } else if (settings.لون_الخط == 'ابيض') {
                    $('#' + name + '').css('color', '#FFFFFF');
                } else if (settings.لون_الخط == 'برتقانى') {
                    $('#' + name + '').css('color', '#FF9800');
                } else if (settings.لون_الخط == 'برتقالى') {
                    $('#' + name + '').css('color', '#FF9800');
                } else if (settings.لون_الخط == 'اصفر') {
                    $('#' + name + '').css('color', '#FFEB3B');
                } else if (settings.لون_الخط == 'بنى') {
                    $('#' + name + '').css('color', '#795548');
                } else if (settings.لون_الخط == 'تركواز') {
                    $('#' + name + '').css('color', '#009688');
                } else if (settings.لون_الخط == 'بينك') {
                    $('#' + name + '').css('color', '#E91E63');
                } else if (settings.لون_الخط == 'بمبى') {
                    $('#' + name + '').css('color', '#E91E63');
                } else if (settings.لون_الخط == 'روز') {
                    $('#' + name + '').css('color', '#E91E63');
                } else if (settings.لون_الخط == 'اخضر_فاتح') {
                    $('#' + name + '').css('color', '#8BC34A');
                } else {
                $('#' + name + '').css('color', settings.لون_الخط);
}
            }

                      
            if (settings.العرض) {
                $('#' + name + '').css('width', settings.العرض);
            }
            if (settings.الطول) {
                $('#' + name + '').css('height', settings.الطول);
            }
            if (settings.الحركة) {
                if (settings.الحركة == 'بيطنطط') {
                    $('#' + name + '').animateCss('bounce');
                } else {
$('#' + name + '').animateCss(settings.الحركة);
}
            }
if (settings.الشفافية) {
                $('#' + name + '').css('-webkit-filter', 'opacity(' + settings.الشفافية + '%)');
            }
            if ($.isFunction(settings.لما_يخلص_تحميل)) {
                settings.لما_يخلص_تحميل.call(this);
            }
        });

    };
    $.fn.البتاع_اللى_بتحمل = function(options) {

        // Establish our default settings
        var settings = $.extend({
            الاسم: null,
            العرض: null,
            الطول: null,
            بيحمل: null,
            الحركة: null,
            لما_يخلص_تحميل: null
        }, options);

        return this.each(function() {
            var name = settings.الاسم;
            var out = '<paper-spinner id="' + name + '"></paper-spinner>';
            $('Eطبق_السلطة').append(out);

            if (settings.لون_الخط) {
                if (settings.لون_الخط == 'اسود') {
                    $('#' + name + '').css('color', '#000000');
                } else if (settings.لون_الخط == 'احمر') {
                    $('#' + name + '').css('color', '#F44336');
                } else if (settings.لون_الخط == 'ازرق') {
                    $('#' + name + '').css('color', '#2196F3');
                } else if (settings.لون_الخط == 'اورانج') {
                    $('#' + name + '').css('color', '#FF9800');
                } else if (settings.لون_الخط == 'لبنى') {
                    $('#' + name + '').css('color', '#00BCD4');
                } else if (settings.لون_الخط == 'رصاصى') {
                    $('#' + name + '').css('color', '#9E9E9E');
                } else if (settings.لون_الخط == 'اخضر') {
                    $('#' + name + '').css('color', '#4CAF50');
                } else if (settings.لون_الخط == 'ابيض') {
                    $('#' + name + '').css('color', '#FFFFFF');
                } else if (settings.لون_الخط == 'برتقانى') {
                    $('#' + name + '').css('color', '#FF9800');
                } else if (settings.لون_الخط == 'برتقالى') {
                    $('#' + name + '').css('color', '#FF9800');
                } else if (settings.لون_الخط == 'اصفر') {
                    $('#' + name + '').css('color', '#FFEB3B');
                } else if (settings.لون_الخط == 'بنى') {
                    $('#' + name + '').css('color', '#795548');
                } else if (settings.لون_الخط == 'تركواز') {
                    $('#' + name + '').css('color', '#009688');
                } else if (settings.لون_الخط == 'بينك') {
                    $('#' + name + '').css('color', '#E91E63');
                } else if (settings.لون_الخط == 'بمبى') {
                    $('#' + name + '').css('color', '#E91E63');
                } else if (settings.لون_الخط == 'روز') {
                    $('#' + name + '').css('color', '#E91E63');
                } else if (settings.لون_الخط == 'اخضر_فاتح') {
                    $('#' + name + '').css('color', '#8BC34A');
                } else {
                $('#' + name + '').css('color', settings.لون_الخط);
}
            }

                        
            
                         if (settings.بيحمل == 'ايوة') {
     $('#' + name + '').attr('active','');
            }
            
            
            if (settings.العرض) {
                $('#' + name + '').css('width', settings.العرض);
            }
            if (settings.الطول) {
                $('#' + name + '').css('height', settings.الطول);
            }
            if (settings.الحركة) {
                if (settings.الحركة == 'بيطنطط') {
                    $('#' + name + '').animateCss('bounce');
                } else {
$('#' + name + '').animateCss(settings.الحركة);
}
            }
if (settings.الشفافية) {
                $('#' + name + '').css('-webkit-filter', 'opacity(' + settings.الشفافية + '%)');
            }
            if ($.isFunction(settings.لما_يخلص_تحميل)) {
                settings.لما_يخلص_تحميل.call(this);
            }
        });

    };
    $.fn.شريط_التحميل = function(options) {

        // Establish our default settings
                var settings = $.extend({
            الاسم: null,
            العرض: null,
            الطول: null,
            بيحمل: null,
            الحركة: null,
            لما_يخلص_تحميل: null
        }, options);

        return this.each(function() {
            var name = settings.الاسم;
            var out = '<paper-progress id="' + name + '"></paper-progress>';
            $('Eطبق_السلطة').append(out);

            if (settings.لون_الخط) {
                if (settings.لون_الخط == 'اسود') {
                    $('#' + name + '').css('color', '#000000');
                } else if (settings.لون_الخط == 'احمر') {
                    $('#' + name + '').css('color', '#F44336');
                } else if (settings.لون_الخط == 'ازرق') {
                    $('#' + name + '').css('color', '#2196F3');
                } else if (settings.لون_الخط == 'اورانج') {
                    $('#' + name + '').css('color', '#FF9800');
                } else if (settings.لون_الخط == 'لبنى') {
                    $('#' + name + '').css('color', '#00BCD4');
                } else if (settings.لون_الخط == 'رصاصى') {
                    $('#' + name + '').css('color', '#9E9E9E');
                } else if (settings.لون_الخط == 'اخضر') {
                    $('#' + name + '').css('color', '#4CAF50');
                } else if (settings.لون_الخط == 'ابيض') {
                    $('#' + name + '').css('color', '#FFFFFF');
                } else if (settings.لون_الخط == 'برتقانى') {
                    $('#' + name + '').css('color', '#FF9800');
                } else if (settings.لون_الخط == 'برتقالى') {
                    $('#' + name + '').css('color', '#FF9800');
                } else if (settings.لون_الخط == 'اصفر') {
                    $('#' + name + '').css('color', '#FFEB3B');
                } else if (settings.لون_الخط == 'بنى') {
                    $('#' + name + '').css('color', '#795548');
                } else if (settings.لون_الخط == 'تركواز') {
                    $('#' + name + '').css('color', '#009688');
                } else if (settings.لون_الخط == 'بينك') {
                    $('#' + name + '').css('color', '#E91E63');
                } else if (settings.لون_الخط == 'بمبى') {
                    $('#' + name + '').css('color', '#E91E63');
                } else if (settings.لون_الخط == 'روز') {
                    $('#' + name + '').css('color', '#E91E63');
                } else if (settings.لون_الخط == 'اخضر_فاتح') {
                    $('#' + name + '').css('color', '#8BC34A');
                } else {
                $('#' + name + '').css('color', settings.لون_الخط);
}
            }
            
            
            if (settings.العرض) {
                $('#' + name + '').css('width', settings.العرض);
            }
            if (settings.الطول) {
                $('#' + name + '').css('height', settings.الطول);
            }
            if (settings.الحركة) {
                if (settings.الحركة == 'بيطنطط') {
                    $('#' + name + '').animateCss('bounce');
                } else {
$('#' + name + '').animateCss(settings.الحركة);
}
            }
if (settings.الشفافية) {
                $('#' + name + '').css('-webkit-filter', 'opacity(' + settings.الشفافية + '%)');
            }
            if ($.isFunction(settings.لما_يخلص_تحميل)) {
                settings.لما_يخلص_تحميل.call(this);
            }
        });

    };
    
$.fn.صورة = function(options) {

        // Establish our default settings
        var settings = $.extend({
            العنوان: null,
            المصدر: null,
            عرض_الصورة: null,
            طول_الصورة: null,
            الاسم: null,
            العرض: null,
            الطول: null,
            الحركة: null,
            لما_يخلص_تحميل: null
        }, options);

        return this.each(function() {
            var name = settings.الاسم;
            var source = settings.المصدر;
            var out = '<img id="' + name + '" src="' + source + '"></img>';
            $('Eطبق_السلطة').append(out);

            
            if (settings.عرض_الصورة) {
                $('#' + name + '').attr('width', settings.عرض_الصورة);
            }
            if (settings.طول_الصورة) {
                $('#' + name + '').attr('length', settings.طول_الصورة);
            }
            if (settings.العنوان) {
                $('#' + name + '').attr('alt', settings.العنوان);
            }
            if (settings.العرض) {
                $('#' + name + '').css('width', settings.العرض);
            }
            if (settings.الطول) {
                $('#' + name + '').css('height', settings.الطول);
            }
               if (settings.الحركة == 'بيطنطط') {
                    $('#' + name + '').animateCss('bounce');
                } else {
$('#' + name + '').animateCss(settings.الحركة);
}
            if ($.isFunction(settings.لما_يخلص_تحميل)) {
                settings.لما_يخلص_تحميل.call(this);
            }
        });

    };

}(jQuery));
