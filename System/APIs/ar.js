(function($) {

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

$.fn.نص = function(options) {

        // Establish our default settings
        var settings = $.extend({
            النص: 'يبدو انك قد نسيت كتابة شئ',
            اللون: null,
            الحجم: null,
            الاسم: null,
            العرض: null,
            الطول: null,
            السمك: null,
            الحركة: null,
            شكل_الخط: null,
            عند_الانتهاء_من_التحميل: null
        }, options);

        return this.each(function() {
            var name = settings.الاسم;
            var out = '<p id="' + name + '"></p>';
            $('Eالمحتوى').append(out);
            $('#' + name + '').text(settings.الكلام);

            if (settings.اللون) {
                if (settings.اللون == 'اسود') {
                    $('#' + name + '').css('color', '#000000');
                } else if (settings.اللون == 'احمر') {
                    $('#' + name + '').css('color', '#F44336');
                } else if (settings.اللون == 'ازرق') {
                    $('#' + name + '').css('color', '#2196F3');
                } else if (settings.اللون == 'لبنى') {
                    $('#' + name + '').css('color', '#00BCD4');
                } else if (settings.اللون == 'رصاصى') {
                    $('#' + name + '').css('color', '#9E9E9E');
                } else if (settings.اللون == 'اخضر') {
                    $('#' + name + '').css('color', '#4CAF50');
                } else if (settings.اللون == 'ابيض') {
                    $('#' + name + '').css('color', '#FFFFFF');
                } else if (settings.اللون == 'برتقالى') {
                    $('#' + name + '').css('color', '#FF9800');
                } else if (settings.اللون == 'اصفر') {
                    $('#' + name + '').css('color', '#FFEB3B');
                } else if (settings.اللون == 'بنى') {
                    $('#' + name + '').css('color', '#795548');
                } else if (settings.اللون == 'تركواز') {
                    $('#' + name + '').css('color', '#009688');
                } else if (settings.اللون == 'بمبى') {
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


            if (settings.السمك) {
                if (settings.السمك == 'سميك') {
                    $('#' + name + '').css('font-weight', settings.السمك);
                } else {
$('#' + name + '').css('font-weight', 'bold');
}
            }
            if (settings.الحجم) {
                $('#' + name + '').css('font-size', settings.الحجم);
            }
            if (settings.العرض) {
                $('#' + name + '').css('width', settings.العرض);
            }
            if (settings.الطول) {
                $('#' + name + '').css('length', settings.الطول);
            }
            if (settings.الحركة) {
                $('#' + name + '').animateCss('settings.الحركة');
            }
            if ($.isFunction(settings.عند_الانتهاء_من_التحميل)) {
                settings.عند_الانتهاء_من_التحميل.call(this);
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
            عند_الانتهاء_من_التحميل: null
        }, options);

        return this.each(function() {
            var name = settings.الاسم;
            var source = settings.المصدر;
            var out = '<img id="' + name + '" src="' + source '"></img>';
            $('Eالمحتوى').append(out);

            
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
                $('#' + name + '').css('length', settings.الطول);
            }
            if (settings.الحركة) {
                $('#' + name + '').animateCss('settings.الحركة');
            }
            if ($.isFunction(settings.عند_الانتهاء_من_التحميل)) {
                settings.عند_الانتهاء_من_التحميل.call(this);
            }
        });

    };

}(jQuery));
