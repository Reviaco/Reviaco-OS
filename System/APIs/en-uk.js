(function($) {
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

$.fn.text0 = function(options) {

        // Establish our default settings
        var settings = $.extend({
            text: 'It seems that you have forgotten writing anything',
            colour: null,
            size: null,
            name: null,
            width: null,
            length: null,
            animation: null,
            thickness: null,
            font_style: null,
            when_finished_downloading: null
        }, options);

        return this.each(function() {
            var name = settings.name;
            var out = '<p id="' + name + '"></p>';
            $('contents').append(out);
            $('#' + name + '').text(settings.text);

            if (settings.colour) {
                if (settings.colour == 'black') {
                    $('#' + name + '').css('color', '#000000');
                } else if (settings.colour == 'red') {
                    $('#' + name + '').css('color', '#F44336');
                } else if (settings.colour == 'blue') {
                    $('#' + name + '').css('color', '#2196F3');
                } else if (settings.colour == 'orange') {
                    $('#' + name + '').css('color', '#FF9800');
                } else if (settings.colour == 'cyan') {
                    $('#' + name + '').css('color', '#00BCD4');
                } else if (settings.colour == 'grey') {
                    $('#' + name + '').css('color', '#9E9E9E');
                } else if (settings.colour == 'green') {
                    $('#' + name + '').css('color', '#4CAF50');
                } else if (settings.colour == 'white') {
                    $('#' + name + '').css('color', '#FFFFFF');
                } else if (settings.colour == 'yellow') {
                    $('#' + name + '').css('color', '#FFEB3B');
                } else if (settings.colour == 'brown') {
                    $('#' + name + '').css('color', '#795548');
                } else if (settings.colour == 'teal') {
                    $('#' + name + '').css('color', '#009688');
                } else if (settings.colour == 'pink') {
                    $('#' + name + '').css('color', '#E91E63');
                } else if (settings.colour == 'rose') {
                    $('#' + name + '').css('color', '#E91E63');
                } else if (settings.colour == 'light_green') {
                    $('#' + name + '').css('color', '#8BC34A');
                } else {
                $('#' + name + '').css('color', settings.colour);
}
            }

            if (settings.font_style) {

                $('#' + name + '').css('font-style', settings.font_style);
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
            if (settings.width) {
                $('#' + name + '').css('width', settings.width);
            }
            if (settings.length) {
                $('#' + name + '').css('height', settings.length);
            }
            if (settings.animation) {
                $('#' + name + '').animateCss('settings.animation');
            }
if (settings.animation) {
                if (settings.animation == 'jumping') {
                    $('#' + name + '').animateCss('bounce');
                } else {
$('#' + name + '').animateCss(settings.animation);
}
            }
if (settings.opacity) {
                $('#' + name + '').css('-webkit-filter', 'opacity(' + settings.opacity + '%)');
            }

            if ($.isFunction(settings.when_finished_downloading)) {
                settings.when_finished_downloading.call(this);
            }
        });

    };


$.fn.image = function(options) {

        // Establish our default settings
        var settings = $.extend({
            title: null,
            source: null,
            image_width: null,
            image_length: null,
            name: null,
            animation: null,
            width: null,
            length: null,
            when_finished_downloading: null
        }, options);

        return this.each(function() {
            var name = settings.name;
            var source = settings.source;
            var out = '<img id="' + name + '" src="' + source + '"></img>';
            $('contents').append(out);

            
            if (settings.image_width) {
                $('#' + name + '').attr('width', settings.image_width);
            }
            if (settings.title) {
                $('#' + name + '').attr('alt', settings.title);
            }
            if (settings.image_length) {
                $('#' + name + '').attr('length', settings.image_length);
            }

            if (settings.width) {
                $('#' + name + '').css('width', settings.width);
            }
            if (settings.animation) {
                $('#' + name + '').animateCss('settings.animation');
            }
            if (settings.length) {
                $('#' + name + '').css('height', settings.length);
            }
if (settings.animation) {
                if (settings.animation == 'jumping') {
                    $('#' + name + '').animateCss('bounce');
                } else {
$('#' + name + '').animateCss(settings.animation);
}
            }
if (settings.opacity) {
                $('#' + name + '').css('-webkit-filter', 'opacity(' + settings.opacity + '%)');
            }
            if ($.isFunction(settings.when_finished_downloading)) {
                settings.when_finished_downloading.call(this);
            }
        });

    };

}(jQuery));
