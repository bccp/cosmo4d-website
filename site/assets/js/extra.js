
(function($) {

    var sections;
    var i = 0;
    var disabled = 0;
    var mousedisabled = 0;
    function scrollnext() {
        if (mousedisabled) {
            mousedisabled = 0; return;
        }
        if (disabled) return;
        console.log("scrollnext" + i + "\n");
        sections[i].scrollIntoView({block: "start", behavior: "smooth"});
        i = i + 1;
        if (i == sections.length) i = 0;
    }
    $(window).on('load', function() {
        sections = $('section.wrapper');
        console.log("load\n");
        window.setInterval(scrollnext, 20000);
        }
    );
    $(document).on('dblclick', function() {
        console.log("dblclick\n");
        disabled = 1 - disabled;
        }
    );
    $(document).on('mousemove mousewheel DOMMouseScroll keydown', function() {
        mousedisabled = 1;
        }
    );
})(jQuery);
