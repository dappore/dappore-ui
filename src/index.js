console.log('test');
$('select.dropdown').dropdown();
$(".ui.sgcard .icon.close").click(function () {
  $(this).closest(".ui.sgcard").transition("fade");
});
$(document).ready(function(){
    $(".image.field").dimmer('show');
    $(".image.field").click(function () {
    $(".image.field").dimmer('hide');
    $("img").attr("src", "image/tom.jpg");
      $(".image.field").click(function(){
        $("img").attr("src", "image/nan.jpg");
      })
  });
});
