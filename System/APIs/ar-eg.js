(function($) {

    $.fn.كلام = function(options) {

        // Establish our default settings
        var settings = $.extend({
            الكلام: 'انت شكلك نسيت تكتب حاجة',
            اللون: null,
            الحجم: null,
            الاسم: null,
            الحجم: null,
            العرض: null,
            الطول: null,
            الطخن: null,
            لما_يخلص_تحميل: null
        }, options);

        return this.each(function() {
            var name = settings.الاسم;
            var out = '<p id="' + name + '"></p>';
            $('Eطبق_السلطة').append(out);
            $('#' + name + '').text(settings.الكلام);

            if (settings.اللون) {
                $('#' + name + '').css('color', settings.اللون);
            }

            if (settings.الخط) {

                $('#' + name + '').css('font-style', settings.الخط);
            }


            if (settings.الطخن) {
                if (settings.الطخن == 'طخين') {
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

            if ($.isFunction(settings.لما_يخلص_تحميل)) {
                settings.لما_يخلص_تحميل.call(this);
            }
        });

    };

}(jQuery));
