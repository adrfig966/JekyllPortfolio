$(document).ready(() => {
  $(`[data-tab-group]`).not("[data-tab-open]").hide();

  $("[data-tab-target]").each(function() {
    var displayid = $(this).attr("data-tab-target");
    var display = $("#" + displayid);
    if (display) {
      var group = display.attr("data-tab-group");
      //To-do: Make icon feature modular
      var icon = $(this).children(".tab-button-icon");
      $(this).click(() => {
        $(`[data-tab-group=${group}]`).not(display).hide();
        $(".tab-button-icon").not(icon).text("+");
        display.toggle();
        if(display.is(":hidden")){
          icon.text("+");
        }else{
          icon.text("-");
          $(this)[0].scrollIntoView({behavior: "smooth", block: "start"});
        }
      });
    }
  });
});
