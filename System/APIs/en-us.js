$.fn.text = function(options) {

        // Establish our default settings
        var settings = $.extend({
            text: 'It seems that you have forgotten writing anything',
            color: null,
            size: null,
            name: null,
            width: null,
            length: null,
            thickness: null,
            font_style: null,
            when_finishes_downloading: null
        }, options);

        return this.each(function() {
            var name = settings.الاسم;
            var out = '<p id="' + name + '"></p>';
            $('contents').append(out);
            $('#' + name + '').text(settings.text);

            if (settings.color) {
                if (settings.color == 'black') {
                    $('#' + name + '').css('color', '#000000');
                } else if (settings.color == 'red') {
                    $('#' + name + '').css('color', '#F44336');
                } else if (settings.color == 'blue') {
                    $('#' + name + '').css('color', '#2196F3');
                } else if (settings.color == 'orange') {
                    $('#' + name + '').css('color', '#FF9800');
                } else if (settings.color == 'cyan') {
                    $('#' + name + '').css('color', '#00BCD4');
                } else if (settings.color == 'grey') {
                    $('#' + name + '').css('color', '#9E9E9E');
                } else if (settings.color == 'green') {
                    $('#' + name + '').css('color', '#4CAF50');
                } else if (settings.color == 'white') {
                    $('#' + name + '').css('color', '#FFFFFF');
                } else if (settings.color == 'yellow') {
                    $('#' + name + '').css('color', '#FFEB3B');
                } else if (settings.color == 'brown') {
                    $('#' + name + '').css('color', '#795548');
                } else if (settings.color == 'teal') {
                    $('#' + name + '').css('color', '#009688');
                } else if (settings.color == 'pink') {
                    $('#' + name + '').css('color', '#E91E63');
                } else if (settings.color == 'rose') {
                    $('#' + name + '').css('color', '#E91E63');
                } else if (settings.color == 'light_green') {
                    $('#' + name + '').css('color', '#8BC34A');
                } else {
                $('#' + name + '').css('color', settings.color);
}
            }

            if (settings.font_style) {

                $('#' + name + '').css('font-style', settings.الخط);
            }


            if (settings.thickness) {
                if (settings.thickness == 'thick') {
                    $('#' + name + '').css('font-weight', settings.thickness);
                } else {
$('#' + name + '').css('font-weight', 'bold');
}
            }
            if (settings.size) {
                $('#' + name + '').css('font-size', settings.size);
            }
            if (settings.width) {
                $('#' + name + '').css('width', settings.width);
            }
            if (settings.length) {
                $('#' + name + '').css('length', settings.length);
            }

            if ($.isFunction(settings.when_finishes_downloading)) {
                settings.when_finishes_downloading.call(this);
            }
        });

    };

}(jQuery));
