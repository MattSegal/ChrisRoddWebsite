var panels = [
    "about",
    "comittees",
    "cgu",
    "teaching",
    "contact",
].map(initPanel)
panels.forEach(setEvents)

function initPanel(panelName) {
    return {
        button: $("#"+panelName+"-btn"),
        content: $("#"+panelName+"-content")
    }
}

function setEvents(panel) {
    panel.button.on('click',function() {
        showContent(panel.content)
    })
}

function showContent(content) {
    $('html, body').animate({
        scrollTop: ($('.button-box').offset().top)
    },500)
    panels.forEach(function(panel) {
        panel.content.hide()
    })
    content.fadeIn(300)
}