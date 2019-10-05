$(document).ready(() => {
  $(`.tab-container`).not(".tab-container.tab-open").hide();

  $(".project-title").each(function() {
    var display = $(this).next();
    var icon = $(this).children(".tab-button-icon");
    $(this).click(() => {
      $(".tab-container").not(display).hide();
      $(".tab-button-icon").not(icon).text("+");
      display.toggle();
      if(display.is(":hidden")){
        icon.text("+");
      }else{
        icon.text("-");
        $(this)[0].scrollIntoView({behavior: "smooth", block: "start"});
      }
    });
  });
});
