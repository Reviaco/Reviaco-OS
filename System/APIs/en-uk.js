var put = $('body');

(function ($) {
    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function () {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });

    function setFontColour(elementName, colour) {
        if (colour == 'black') {
            $('#' + elementName + '').css('color', '#000000');
        } else if (colour == 'red') {
            $('#' + elementName + '').css('color', '#F44336');
        } else if (colour == 'blue') {
            $('#' + elementName + '').css('color', '#2196F3');
        } else if (colour == 'cyan') {
            $('#' + elementName + '').css('color', '#00BCD4');
        } else if (colour == 'gray') {
            $('#' + elementName + '').css('color', '#9E9E9E');
        } else if (colour == 'green') {
            $('#' + elementName + '').css('color', '#4CAF50');
        } else if (colour == 'white') {
            $('#' + elementName + '').css('color', '#FFFFFF');
        } else if (colour == 'orange') {
            $('#' + elementName + '').css('color', '#FF9800');
        } else if (colour == 'yellow') {
            $('#' + elementName + '').css('color', '#FFEB3B');
        } else if (colour == 'brown') {
            $('#' + elementName + '').css('color', '#795548');
        } else if (colour == 'teal') {
            $('#' + elementName + '').css('color', '#009688');
        } else if (colour == 'pink') {
            $('#' + elementName + '').css('color', '#E91E63');
        } else if (colour == 'lightGreen') {
            $('#' + elementName + '').css('color', '#8BC34A');
        } else {
            $('#' + elementName + '').css('color', colour);
        }
    }

    function setBG(elementName, background) {
        if (background == 'black') {
            $('#' + elementName + '').css('background-color', '#000000');
        } else if (background == 'red') {
            $('#' + elementName + '').css('background-color', '#F44336');
        } else if (background == 'blue') {
            $('#' + elementName + '').css('background-color', '#2196F3');
        } else if (background == 'cyan') {
            $('#' + elementName + '').css('background-color', '#00BCD4');
        } else if (background == 'gray') {
            $('#' + elementName + '').css('background-color', '#9E9E9E');
        } else if (background == 'green') {
            $('#' + elementName + '').css('background-color', '#4CAF50');
        } else if (background == 'white') {
            $('#' + elementName + '').css('background-color', '#FFFFFF');
        } else if (background == 'orange') {
            $('#' + elementName + '').css('background-color', '#FF9800');
        } else if (background == 'yellow') {
            $('#' + elementName + '').css('background-color', '#FFEB3B');
        } else if (background == 'brown') {
            $('#' + elementName + '').css('background-color', '#795548');
        } else if (background == 'teal') {
            $('#' + elementName + '').css('background-color', '#009688');
        } else if (background == 'pink') {
            $('#' + elementName + '').css('background-color', '#E91E63');
        } else if (background == 'lightGreen') {
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
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else if (animation == 'jumping') {
            $('#' + elementName + '').animateCss('bounce');
        } else {
            $('#' + elementName + '').animateCss(animation);
        }
    }
    $(function () {
        $('body').append('<contents></contents>');
    });

    function execute(elementName, command) {
        var commands = command.split(' &&& ');
        for (i = 0; i < commands.length; i++) {
            if (commands[i].split(' after a period of ')[0] != commands[i]) {
                if (commands[i].split(' after a period of ')[0] == 'remove it') {
                    setTimeout(function () {
                        $('#' + elementName + '').remove();
                    }, commands[i].split(' after a period of ')[1]);
                } else if (commands[i].split(' after a period of ')[0].split(' ')[0] == 'redirect') {
                    var targetURL = commands[i].split('redirect to ')[1];
                    setTimeout(function () {
                        window.location = targetURL;
                    }, commands[i].split(' after a period of ')[1]);
                }
            } else if (commands[i].split('remove it')[0] != commands[i], commands[i].split('remove it')[0] == '') {
                $('#' + elementName + '').remove();

            } else if (commands[i].split('redirect to')[0] != commands[i], commands[i].split('redirect to')[0] == '') {
                window.location = commands[i].split('redirect to ')[1];

            } else if (commands[i].split('when clicked, ')[0] != commands[i]) {
                if (commands[i].split('when clicked, ')[1].split(' ')[0] == 'remove') {
                    if (commands[i].split('remove ')[1] == 'it') {
                        $('#' + elementName + '').click(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commands[i].split('remove ')[1];
                        $('#' + elementName + '').click(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commands[i].split('when clicked, ')[1].split(' ')[0] == 'redirect') {
                    var targetURL = commands[i].split('redirect to ')[1];
                    $('#' + elementName + '').click(function () {
                        window.location = targetURL;
                    });
                }

            } else if (commands[i].split('when the mouse pointer moved on it, ')[0] != commands[i]) {
                if (commands[i].split('when the mouse pointer moved on it, ')[1].split(' ')[0] == 'remove') {
                    if (commands[i].split('remove ')[1] == 'it') {
                        $('#' + elementName + '').mouseenter(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commands[i].split('remove ')[1];
                        $('#' + elementName + '').mouseenter(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commands[i].split('when the mouse pointer moved on it, ')[1].split(' ')[0] == 'redirect') {
                    var targetURL = commands[i].split('redirect to ')[1];
                    $('#' + elementName + '').mouseenter(function () {
                        window.location = targetURL;
                    });
                }
            } else if (commands[i].split('when the mouse pointer moved away from it, ')[0] != commands[i]) {
                if (commands[i].split('when the mouse pointer moved away from it, ')[1].split(' ')[0] == 'remove') {
                    if (commands[i].split('remove ')[1] == 'it') {
                        $('#' + elementName + '').mouseleave(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commands[i].split('remove ')[1];
                        $('#' + elementName + '').mouseleave(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commands[i].split('when the mouse pointer moved away from it, ')[1].split(' ')[0] == 'redirect') {
                    var targetURL = commands[i].split('redirect to ')[1];
                    $('#' + elementName + '').mouseleave(function () {
                        window.location = targetURL;
                    });
                }

            } else if (commands[i].split('when the mouse pointer is being moved out of it, ')[0] != commands[i]) {
                if (commands[i].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[0] == 'remove') {
                    if (commands[i].split('remove ')[1] == 'it') {
                        $('#' + elementName + '').mouseout(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commands[i].split('remove ')[1];
                        $('#' + elementName + '').mouseout(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commands[i].split('when the mouse pointer is being moved out of it, ')[1].split(' ')[0] == 'redirect') {
                    var targetURL = commands[i].split('redirect to ')[1];
                    $('#' + elementName + '').mouseout(function () {
                        window.location = targetURL;
                    });
                }

            } else if (commands[i].split('when the mouse pointer is being moved on it, ')[0] != commands[i]) {
                if (commands[i].split('when the mouse pointer is being moved on it, ')[1].split(' ')[0] == 'remove') {
                    if (commands[i].split('remove ')[1] == 'it') {
                        $('#' + elementName + '').mousemove(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commands[i].split('remove ')[1];
                        $('#' + elementName + '').mousemove(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commands[i].split('when the mouse pointer is being moved on it, ')[1].split(' ')[0] == 'redirect') {
                    var targetURL = commands[i].split('redirect to ')[1];
                    $('#' + elementName + '').mousemove(function () {
                        window.location = targetURL;
                    });
                }

            } else if (commands[i].split('when it is no longer clicked, ')[0] != commands[i]) {
                if (commands[i].split('when it is no longer clicked, ')[1].split(' ')[0] == 'remove') {
                    if (commands[i].split('remove ')[1] == 'it') {
                        $('#' + elementName + '').mouseup(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commands[i].split('remove ')[1];
                        $('#' + elementName + '').mouseup(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commands[i].split('when it is no longer clicked, ')[1].split(' ')[0] == 'redirect') {
                    var targetURL = commands[i].split('redirect to ')[1];
                    $('#' + elementName + '').mouseup(function () {
                        window.location = targetURL;
                    });
                }

            } else if (commands[i].split('when double clicked, ')[0] != commands[i]) {
                if (commands[i].split('when double clicked, ')[1].split(' ')[0] == 'remove') {
                    if (commands[i].split('remove ')[1] == 'it') {
                        $('#' + elementName + '').dblclick(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commands[i].split('remove ')[1];
                        $('#' + elementName + '').dblclick(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commands[i].split('when double clicked, ')[1].split(' ')[0] == 'redirect') {
                    var targetURL = commands[i].split('redirect to ')[1];
                    $('#' + elementName + '').dblclick(function () {
                        window.location = targetURL;
                    });
                }

            } else if (commands[i].split('when right clicked, ')[0] != commands[i]) {
                if (commands[i].split('when right clicked, ')[1].split(' ')[0] == 'remove') {
                    if (commands[i].split('remove ')[1] == 'it') {
                        $('#' + elementName + '').contextmenu(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commands[i].split('remove ')[1];
                        $('#' + elementName + '').contextmenu(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commands[i].split('when right clicked, ')[1].split(' ')[0] == 'redirect') {
                    var targetURL = commands[i].split('redirect to ')[1];
                    $('#' + elementName + '').contextmenu(function () {
                        window.location = targetURL;
                    });
                }

            } else if (commands[i].split('when a key pressed while focusing it, ')[0] != commands[i]) {
                if (commands[i].split('when a key pressed while focusing it, ')[1].split(' ')[0] == 'remove') {
                    if (commands[i].split('remove ')[1] == 'it') {
                        $('#' + elementName + '').keypress(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commands[i].split('remove ')[1];
                        $('#' + elementName + '').keypress(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commands[i].split('when a key pressed when focusing it, ')[1].split(' ')[0] == 'redirect') {
                    var targetURL = commands[i].split('redirect to ')[1];
                    $('#' + elementName + '').keypress(function () {
                        window.location = targetURL;
                    });
                }

            } else if (commands[i].split('when a key is being pressed while focusing it, ')[0] != commands[i]) {
                if (commands[i].split('when a key is being pressed while focusing it, ')[1].split(' ')[0] == 'remove') {
                    if (commands[i].split('remove ')[1] == 'it') {
                        $('#' + elementName + '').keydown(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commands[i].split('remove ')[1];
                        $('#' + elementName + '').keydown(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commands[i].split('when a key is being pressed while focusing it, ')[1].split(' ')[0] == 'redirect') {
                    var targetURL = commands[i].split('redirect to ')[1];
                    $('#' + elementName + '').keydown(function () {
                        window.location = targetURL;
                    });
                }

            } else if (commands[i].split('when its contents have been changed, ')[0] != commands[i]) {
                if (commands[i].split('when its contents have been changed, ')[1].split(' ')[0] == 'remove') {
                    if (commands[i].split('remove ')[1] == 'it') {
                        $('#' + elementName + '').change(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commands[i].split('remove ')[1];
                        $('#' + elementName + '').change(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commands[i].split('when its contents have been changed, ')[1].split(' ')[0] == 'redirect') {
                    var targetURL = commands[i].split('redirect to ')[1];
                    $('#' + elementName + '').change(function () {
                        window.location = targetURL;
                    });
                }

            } else if (commands[i].split('when focused, ')[0] != commands[i]) {
                if (commands[i].split('when focused, ')[1].split(' ')[0] == 'remove') {
                    if (commands[i].split('remove ')[1] == 'it') {
                        $('#' + elementName + '').focus(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commands[i].split('remove ')[1];
                        $('#' + elementName + '').focus(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commands[i].split('when focused, ')[1].split(' ')[0] == 'redirect') {
                    var targetURL = commands[i].split('redirect to ')[1];
                    $('#' + elementName + '').focus(function () {
                        window.location = targetURL;
                    });
                }

            } else if (commands[i].split('when it is being focused, ')[0] != commands[i]) {
                if (commands[i].split('when it is being focusing, ')[1].split(' ')[0] == 'remove') {
                    if (commands[i].split('remove ')[1] == 'it') {
                        $('#' + elementName + '').focusin(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commands[i].split('remove ')[1];
                        $('#' + elementName + '').focusin(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commands[i].split('when it is being focused, ')[1].split(' ')[0] == 'redirect') {
                    var targetURL = commands[i].split('redirect to ')[1];
                    $('#' + elementName + '').focusin(function () {
                        window.location = targetURL;
                    });
                }

            } else if (commands[i].split('when slept, ')[0] != commands[i]) {
                if (commands[i].split('when slept, ')[1].split(' ')[0] == 'remove') {
                    if (commands[i].split('remove ')[1] == 'it') {
                        $('#' + elementName + '').focusout(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commands[i].split('remove ')[1];
                        $('#' + elementName + '').focusout(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commands[i].split('when slept, ')[1].split(' ')[0] == 'redirect') {
                    var targetURL = commands[i].split('redirect to ')[1];
                    $('#' + elementName + '').focusout(function () {
                        window.location = targetURL;
                    });
                }

            } else if (commands[i].split('when the data of this form has been sent, ')[0] != commands[i]) {
                if (commands[i].split('when the data of this form has been sent, ')[1].split(' ')[0] == 'remove') {
                    if (commands[i].split('remove ')[1] == 'it') {
                        $('#' + elementName + '').submit(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commands[i].split('remove ')[1];
                        $('#' + elementName + '').submit(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commands[i].split('when the data of this form has been sent, , ')[1].split(' ')[0] == 'redirect') {
                    var targetURL = commands[i].split('redirect to ')[1];
                    $('#' + elementName + '').submit(function () {
                        window.location = targetURL;
                    });
                }

            } else if (commands[i].split('when scrolled, ')[0] != commands[i]) {
                if (commands[i].split('when scrolled, ')[1].split(' ')[0] == 'remove') {
                    if (commands[i].split('remove ')[1] == 'it') {
                        $('#' + elementName + '').scroll(function () {
                            $('#' + elementName + '').remove();
                        });
                    } else {
                        var targetName = commands[i].split('remove ')[1];
                        $('#' + elementName + '').scroll(function () {
                            $('#' + targetName + '').remove();
                        });
                    }
                } else if (commands[i].split('when scrolled, ')[1].split(' ')[0] == 'redirect') {
                    var targetURL = commands[i].split('redirect to ')[1];
                    $('#' + elementName + '').scroll(function () {
                        window.location = targetURL;
                    });
                }
            }

        }
    }



    $.fn.text0 = function (options) {
        // Establish our default settings
        var settings = $.extend({
            text: 'It seems that you have typed nothing',
            colour: null,
            size: null,
            name: null,
            width: null,
            length: null,
            thickness: null,
            fontStyle: null,
            animation: null,
            background: null,
            transparency: null,
            commands: null
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
    $.fn.button = function (options) {
        // Establish our default settings
        var settings = $.extend({
            text: 'It seems that you have typed nothing',
            fontColour: null,
            size: null,
            name: null,
            width: null,
            length: null,
            thickness: null,
            fontStyle: null,
            disabled: null,
            raised: null,
            switchedOn: null,
            animation: null,
            background: null,
            transparency: null,
            commands: null
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
            if (settings.disabled == 'yes') {
                $('#' + name + '').attr('disabled', '');
            }
            if (settings.raised == 'yes') {
                $('#' + name + '').attr('raised', '');
            }
            if (settings.switchedOn == 'yes') {
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
    $.fn.icon = function (options) {
        // Establish our default settings
        var settings = $.extend({
            iconColour: null,
            icon: null,
            size: null,
            name: null,
            width: null,
            length: null,
            animation: null,
            background: null,
            transparency: null,
            commands: null
        }, options);
        return this.each(function () {
            var name = settings.name;
            var icon = settings.icon;
            var out = '<iron-icon id="' + name + '" icon="' + icon + '"></iron-icon>';
            $('contents').append(out);
            if (settings.iconColour) {
                if (settings.iconColour == 'black') {
                    $('#' + name + '').css('color', '#000000');
                } else if (settings.iconColour == 'red') {
                    $('#' + name + '').css('color', '#F44336');
                } else if (settings.iconColour == 'blue') {
                    $('#' + name + '').css('color', '#2196F3');
                } else if (settings.iconColour == 'cyan') {
                    $('#' + name + '').css('color', '#00BCD4');
                } else if (settings.iconColour == 'gray') {
                    $('#' + name + '').css('color', '#9E9E9E');
                } else if (settings.iconColour == 'green') {
                    $('#' + name + '').css('color', '#4CAF50');
                } else if (settings.iconColour == 'white') {
                    $('#' + name + '').css('color', '#FFFFFF');
                } else if (settings.iconColour == 'orange') {
                    $('#' + name + '').css('color', '#FF9800');
                } else if (settings.iconColour == 'yellow') {
                    $('#' + name + '').css('color', '#FFEB3B');
                } else if (settings.iconColour == 'brown') {
                    $('#' + name + '').css('color', '#795548');
                } else if (settings.iconColour == 'teal') {
                    $('#' + name + '').css('color', '#009688');
                } else if (settings.iconColour == 'pink') {
                    $('#' + name + '').css('color', '#E91E63');
                } else if (settings.iconColour == 'lightGreen') {
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
    $.fn.buttonWithAnIcon = function (options) {
        // Establish our default settings
        var settings = $.extend({
            iconColour: null,
            icon: null,
            size: null,
            name: null,
            width: null,
            length: null,
            animation: null,
            background: null,
            transparency: null,
            commands: null
        }, options);
        return this.each(function () {
            var name = settings.name;
            var icon = settings.icon;
            var out = '<paper-icon-button id="' + name + '" icon="' + icon + '"></paper-icon-button>';
            $('contents').append(out);
            if (settings.iconColour) {
                if (settings.iconColour == 'black') {
                    $('#' + name + '').css('color', '#000000');
                } else if (settings.iconColour == 'red') {
                    $('#' + name + '').css('color', '#F44336');
                } else if (settings.iconColour == 'blue') {
                    $('#' + name + '').css('color', '#2196F3');
                } else if (settings.iconColour == 'cyan') {
                    $('#' + name + '').css('color', '#00BCD4');
                } else if (settings.iconColour == 'gray') {
                    $('#' + name + '').css('color', '#9E9E9E');
                } else if (settings.iconColour == 'green') {
                    $('#' + name + '').css('color', '#4CAF50');
                } else if (settings.iconColour == 'white') {
                    $('#' + name + '').css('color', '#FFFFFF');
                } else if (settings.iconColour == 'orange') {
                    $('#' + name + '').css('color', '#FF9800');
                } else if (settings.iconColour == 'yellow') {
                    $('#' + name + '').css('color', '#FFEB3B');
                } else if (settings.iconColour == 'brown') {
                    $('#' + name + '').css('color', '#795548');
                } else if (settings.iconColour == 'teal') {
                    $('#' + name + '').css('color', '#009688');
                } else if (settings.iconColour == 'pink') {
                    $('#' + name + '').css('color', '#E91E63');
                } else if (settings.iconColour == 'lightGreen') {
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
    $.fn.section = function (options) {
        // Establish our default settings
        var settings = $.extend({
            text: 'It seems that you have typed nothing',
            fontColour: null,
            size: null,
            name: null,
            width: null,
            length: null,
            thickness: null,
            fontStyle: null,
            animation: null,
            background: null,
            transparency: null,
            commands: null
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
            if (settings.transparency) {
                $('#' + name + '').css('-webkit-filter', 'opacity(' + settings.transparency + '%)');
            }
        });
    };
    $.fn.tooltip = function (options) {
        // Establish our default settings
        var settings = $.extend({
            text: 'It seems that you have typed nothing',
            fontColour: null,
            size: null,
            name: null,
            width: null,
            length: null,
            thickness: null,
            fontStyle: null,
            emitter: null,
            direction: null,
            animation: null,
            background: null,
            transparency: null,
            commands: null
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
    $.fn.coloursPalette = function (options) {
        // Establish our default settings
        var settings = $.extend({
            name: null,
            width: null,
            length: null,
            animation: null,
            background: null,
            transparency: null,
            commands: null
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
    $.fn.loadingSpinner = function (options) {
        // Establish our default settings
        var settings = $.extend({
            name: null,
            width: null,
            length: null,
            loading: null,
            animation: null,
            background: null,
            transparency: null,
            commands: null
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
            if (settings.loading == 'yes') {
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
    $.fn.loadingBar = function (options) {
        // Establish our default settings
        var settings = $.extend({
            name: null,
            width: null,
            length: null,
            loading: null,
            animation: null,
            background: null,
            transparency: null,
            commands: null
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
    $.fn.image = function (options) {
        // Establish our default settings
        var settings = $.extend({
            title: null,
            source: null,
            imageWidth: null,
            imageLength: null,
            name: null,
            width: null,
            length: null,
            animation: null,
            transparency: null,
            background: null,
            commands: null
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
    $.fn.notificationCount = function (options) {
        // Establish our default settings
        var settings = $.extend({
            text: 'It seems that you have typed nothing',
            icon: null,
            target: null,
            fontColour: null,
            size: null,
            name: null,
            width: null,
            length: null,
            thickness: null,
            fontStyle: null,
            animation: null,
            transparency: null,
            background: null,
            commands: null
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
    $.fn.checkbox = function (options) {
        // Establish our default settings
        var settings = $.extend({
            text: null,
            description: null,
            thickness: null,
            disabled: null,
            checked: null,
            ripple: null,
            fontColour: null,
            size: null,
            name: null,
            width: null,
            length: null,
            thickness: null,
            fontStyle: null,
            animation: null,
            transparency: null,
            background: null,
            commands: null
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
            if (settings.disabled == 'yes') {
                $('#' + name + '').attr('disabled', '');
            }
            if (settings.checked == 'yes') {
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
    $.fn.dialogBox = function (options) {
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
            name: null,
            width: null,
            length: null,
            thickness: null,
            fontStyle: null,
            animation: null,
            transparency: null,
            background: null,
            commands: null
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
                    if (settings.scrollable == 'yes') {
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
    $.fn.dropdown = function (options) {
        // Establish our default settings
        var settings = $.extend({
            title: null,
            items: null,
            ripple: null,
            preselected: null,
            disabled: null,
            fontColour: null,
            size: null,
            name: null,
            width: null,
            length: null,
            thickness: null,
            fontStyle: null,
            animation: null,
            transparency: null,
            background: null,
            commands: null
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
            if (settings.disabled == 'yes') {
                $('#' + name + '').attr('disabled', '');
            }
            if (settings.ripple == 'no') {
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
    $.fn.fab = function (options) {
        // Establish our default settings
        var settings = $.extend({
            description: null,
            icon: null,
            text: null,
            ripple: null,
            mini: null,
            disabled: null,
            ripple: null,
            fontColour: null,
            size: null,
            name: null,
            width: null,
            length: null,
            thickness: null,
            fontStyle: null,
            animation: null,
            transparency: null,
            background: null,
            commands: null
        }, options);
        return this.each(function () {
            var name = settings.name;
            var out = '<paper-fab ';
            if (settings.mini == 'yes') {
                out += 'mini ';
            }
            if (settings.disabled == 'yes') {
                out += 'disabled ';
            }
            if (settings.ripple == 'no') {
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
            if (settings.disabled == 'yes') {
                $('#' + name + '').attr('disabled', '');
            }
            if (settings.ripple == 'no') {
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
    $.fn.textbox = function (options) {
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
            name: null,
            width: null,
            length: null,
            thickness: null,
            fontStyle: null,
            animation: null,
            transparency: null,
            background: null,
            commands: null
        }, options);
        return this.each(function () {
            var name = settings.name;
            if (settings.dynamicSize == 'yes') {
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
            if (settings.disabled == 'yes') {
                out += 'disabled ';
            }
            if (settings.counter == 'yes') {
                out += 'char-counter ';
            }
            if (settings.ripple == 'no') {
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
            if (settings.clearButton == 'yes') {
                out += '<paper-icon-button suffix onclick="clearInput()" icon="clear" alt="clear" title="clear"></paper-icon-button>';
            }
            if (settings.dynamicSize == 'yes') {
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
            if (settings.disabled == 'yes') {
                $('#' + name + '').attr('disabled', '');
            }
            if (settings.ripple == 'no') {
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
    $.fn.slider = function (options) {
        // Establish our default settings
        var settings = $.extend({
            title: null,
            max: null,
            min: null,
            step: null,
            progress: null,
            prevalue: null,
            valueBox: null,
            pin: null,
            disabled: null,
            fontColour: null,
            size: null,
            name: null,
            width: null,
            length: null,
            thickness: null,
            fontStyle: null,
            animation: null,
            transparency: null,
            background: null,
            commands: null
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
            if (settings.disabled == 'yes') {
                out += 'disabled ';
            }
            if (settings.pin == 'yes') {
                out += 'pin ';
            }
            if (settings.valueBox == 'yes') {
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
            if (settings.disabled == 'yes') {
                $('#' + name + '').attr('disabled', '');
            }
            if (settings.ripple == 'no') {
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
}(jQuery));
