(function($) {

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

$.fn.texte = function(options) {

        // Establish our default settings
        var settings = $.extend({
            texte: 'Il semble que vous avez oublié de écrire quoi que ce soit',
            couleur: null,
            taille: null,
            nom: null,
            largeur: null,
            animation: null,
            longueur: null,
            épaisseur: null,
            le_style_de_police: null,
            lorsque_vous_avez_terminé_le_téléchargement: null
        }, options);

        return this.each(function() {
            var name = settings.nom;
            var out = '<p id="' + name + '"></p>';
            $('contenu').append(out);
            $('#' + name + '').text(settings.texte);

            if (settings.couleur) {
                if (settings.couleur == 'noir') {
                    $('#' + name + '').css('color', '#000000');
                } else if (settings.couleur == 'rouge') {
                    $('#' + name + '').css('color', '#F44336');
                } else if (settings.couleur == 'bleu') {
                    $('#' + name + '').css('color', '#2196F3');
                } else if (settings.couleur == 'orange') {
                    $('#' + name + '').css('color', '#FF9800');
                } else if (settings.couleur == 'cyan') {
                    $('#' + name + '').css('color', '#00BCD4');
                } else if (settings.couleur == 'gris') {
                    $('#' + name + '').css('color', '#9E9E9E');
                } else if (settings.couleur == 'vert') {
                    $('#' + name + '').css('color', '#4CAF50');
                } else if (settings.couleur == 'blanc') {
                    $('#' + name + '').css('color', '#FFFFFF');
                } else if (settings.couleur == 'jaun') {
                    $('#' + name + '').css('color', '#FFEB3B');
                } else if (settings.couleur == 'marron') {
                    $('#' + name + '').css('color', '#795548');
                } else if (settings.couleur == 'sarcelle') {
                    $('#' + name + '').css('color', '#009688');
                } else if (settings.couleur == 'rose') {
                    $('#' + name + '').css('color', '#E91E63');
                } else if (settings.couleur == 'vert_clair') {
                    $('#' + name + '').css('color', '#8BC34A');
                } else {
                $('#' + name + '').css('color', settings.couleur);
}
            }

            if (settings.le_style_de_police) {

                $('#' + name + '').css('font-style', settings.le_style_de_police);
            }


            if (settings.épaisseur) {
                if (settings.épaisseur == 'épais') {
                    $('#' + name + '').css('font-weight', settings.thickness);
                } else {
$('#' + name + '').css('font-weight', 'bold');
}
            }
            if (settings.taille) {
                $('#' + name + '').css('font-size', settings.taille);
            }
            if (settings.largeur) {
                $('#' + name + '').css('width', settings.largeur);
            }
            if (settings.longueur) {
                $('#' + name + '').css('length', settings.longueur);
            }
            if (settings.animation) {
                $('#' + name + '').animateCss('settings.animation');
            }
            if ($.isFunction(settings.lorsque_vous_avez_terminé_le_téléchargement)) {
                settings.lorsque_vous_avez_terminé_le_téléchargement.call(this);
            }
        });

    };

$.fn.image = function(options) {

        // Establish our default settings
        var settings = $.extend({
            titre: null,
            source: null,
            largeur_de_la_image: null,
            longueur_de_la_image: null,
            nom: null,
            largeur: null,
            longueur: null,
            animation: null,
            lorsque_vous_avez_terminé_le_téléchargement: null
        }, options);

        return this.each(function() {
            var name = settings.nom;
            var source = settings.source;
            var title = settings.titre;
            var out = '<img id="' + name + '" src="' + source '" alt="' + title +'"></img>';
            $('contenu').append(out);

            
            if (settings.largeur_de_la_image) {
                $('#' + name + '').attr('width', settings.largeur_de_la_image);
            }
            if (settings.longueur_de_la_image) {
                $('#' + name + '').attr('length', settings.longueur_de_la_image);
            }
            if (settings.titre) {
                $('#' + name + '').attr('alt', settings.titre);
            }
            if (settings.largeur) {
                $('#' + name + '').css('width', settings.largeur);
            }
            if (settings.longueur) {
                $('#' + name + '').css('length', settings.longueur);
            }
            if (settings.animation) {
                $('#' + name + '').animateCss('settings.animation');
            }
            if ($.isFunction(settings.lorsque_vous_avez_terminé_le_téléchargement)) {
                settings.lorsque_vous_avez_terminé_le_téléchargement.call(this);
            }
        });

    };

}(jQuery));
