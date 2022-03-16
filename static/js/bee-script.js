/**
 * bee-cript.js
 */
$(document).ready(function () {

    $('#top-github-link').each(function () {
        // ajout de la class bee-edit-open
        var $link = $(this).find("a");
        if (window.location.pathname.indexOf("hugo/") > -1) {
            $link.addClass("bee-edit-open");
            $(this).removeClass('bee-admin')
        } else{
            $(this).attr("style", "display: none;");
        }
    });

    $(".bee-edit-open").on('click', function (event) {
        var $path = $(this).attr('href');
        window.open($path, '_blank', 'left=' + (screen.availWidth - 1024 - 5) + ',top=5,width=1024,height=1014,scrolling=yes,scrollbars=yes,resizeable=yes');
        event.preventDefault();
    });


});