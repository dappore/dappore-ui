console.log('test');

$(".ui.checkbox").checkbox();

$("select.dropdown").dropdown();

$(".ui.infor.modal").modal("show");

$(".ui.infor.modal>.ui.form>radio.field>.inline.fields>.field>.ui.radio.checkbox").checkbox();
$('.ui.longer.modal')
    .modal('show')
    ;
// .ui.sgcard
$(".ui.sgcard .icon.close").click(function () {
  $(this).closest(".ui.sgcard").transition("fade");
});
