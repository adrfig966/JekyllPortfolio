$(document).ready(()=>{

    $(".mockup-image").each(function() {
        var img = $(this)
        var src = img.attr("src");
        var linkcontainer = $(`<a href="${src}" target="_blank"></a>`);
        img.wrap(linkcontainer);
    });


})