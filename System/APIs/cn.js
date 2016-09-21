(function($) {

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

$.fn.文本 = function(options) {

        // Establish our default settings
        var settings = $.extend({
            文本: '看来你已经忘记了写什么',
            颜色: null,
            尺寸: null,
            名称: null,
            宽度: null,
            长度: null,
            厚度: null,
            动画: null,
            字体样式: null,
            当下载完毕: null
        }, options);

        return this.each(function() {
            var name = settings.名称;
            var out = '<p id="' + name + '"></p>';
            $('内容').append(out);
            $('#' + name + '').text(settings.文本);

            if (settings.颜色) {
                if (settings.颜色 == 'black') {
                    $('#' + name + '').css('color', '#000000');
                } else if (settings.颜色 == 'red') {
                    $('#' + name + '').css('color', '#F44336');
                } else if (settings.颜色 == 'blue') {
                    $('#' + name + '').css('color', '#2196F3');
                } else if (settings.颜色 == 'orange') {
                    $('#' + name + '').css('color', '#FF9800');
                } else if (settings.颜色 == 'cyan') {
                    $('#' + name + '').css('color', '#00BCD4');
                } else if (settings.颜色 == 'grey') {
                    $('#' + name + '').css('color', '#9E9E9E');
                } else if (settings.颜色 == 'green') {
                    $('#' + name + '').css('color', '#4CAF50');
                } else if (settings.颜色 == 'white') {
                    $('#' + name + '').css('color', '#FFFFFF');
                } else if (settings.颜色 == 'yellow') {
                    $('#' + name + '').css('color', '#FFEB3B');
                } else if (settings.颜色 == 'brown') {
                    $('#' + name + '').css('color', '#795548');
                } else if (settings.颜色 == 'teal') {
                    $('#' + name + '').css('color', '#009688');
                } else if (settings.颜色 == 'pink') {
                    $('#' + name + '').css('color', '#E91E63');
                } else if (settings.颜色 == 'rose') {
                    $('#' + name + '').css('color', '#E91E63');
                } else if (settings.颜色 == 'light_green') {
                    $('#' + name + '').css('color', '#8BC34A');
                } else {
                $('#' + name + '').css('color', settings.颜色);
}
            }

            if (settings.字体样式) {

                $('#' + name + '').css('font-style', settings.字体样式);
            }

if (settings.厚度) {
                if (settings.厚度 == '厚') {
           $('#' + name + '').css('font-weight', 'bold');
                } else {
                    $('#' + name + '').css('font-weight', settings.厚度);
}
            }
            if (settings.尺寸) {
                $('#' + name + '').css('font-size', settings.尺寸);
            }
            if (settings.动画) {
                $('#' + name + '').animateCss('settings.动画');
            }
            if (settings.宽度) {
                $('#' + name + '').css('width', settings.宽度);
            }
            if (settings.长度) {
                $('#' + name + '').css('height', settings.长度);
            }

            if ($.isFunction(settings.当下载完毕)) {
                settings.当下载完毕.call(this);
            }
        });

    };

$.fn.图片 = function(options) {

        // Establish our default settings
        var settings = $.extend({
            标题: null,
            资源: null,
            图像宽度: null,
            图像长度: null,
            名称: null,
            宽度: null,
            动画: null,
            长度: null,
            当下载完毕: null
        }, options);

        return this.each(function() {
            var name = settings.名称;
            var source = settings.资源;
            var out = '<img id="' + name + '" src="' + source + '" alt="' + title +'"></img>';
            $('内容').append(out);

            
            if (settings.图像宽度) {
                $('#' + name + '').attr('width', settings.图像宽度);
            }
            if (settings.图像长度) {
                $('#' + name + '').attr('length', settings.图像长度);
            }
            if (settings.标题) {
                $('#' + name + '').attr('alt', settings.标题);
            }
            if (settings.宽度) {
                $('#' + name + '').css('width', settings.宽度);
            }
            if (settings.长度) {
                $('#' + name + '').css('height', settings.长度);
            }
            if (settings.动画) {
                $('#' + name + '').animateCss('settings.动画');
            }
            if ($.isFunction(settings.当下载完毕)) {
                settings.当下载完毕.call(this);
            }
        });

    };

}(jQuery));
