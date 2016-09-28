var panels = [
    "about",
    "comittees",
    "cgu",
    "teaching",
    "contact",
].map(initPanel)

function initPanel(panelName) {
    return {
        button: $("#"+panelName+"-btn"),
        content: $("#"+panelName+"-content")
    }
}

panels.forEach(setEvents)
function setEvents(panel) {
    panel.button.on('click',function() {
        
        $('html, body').animate({
            scrollTop: ($('.button-box').offset().top)
        },500)

        panels.forEach(function(p) {
            if (p === panel)
            {
                p.button.addClass("selected")
                p.content.fadeIn(300)
            }
            else
            {
                p.button.removeClass("selected")
                p.content.hide()
            }
        })
    })
}