console.log('test');

$(".ui.checkbox").checkbox();

$("select.dropdown").dropdown();

// $(".ui.infor.modal").modal("show");

$(".ui.infor.modal>.ui.form>radio.field>.inline.fields>.field>.ui.radio.checkbox").checkbox();
$('.ui.longer.modal')
    .modal('show')
    ;
// .ui.sgcard
$(".ui.sgcard .icon.close").click(function () {
  $(this).closest(".ui.sgcard").transition("fade");
});

// tab select
window.onload = function () {
    var headers = $(".ui.infor.modal > .tab.header > ul > li");
    var contents = $(".ui.infor.modal > .tab.content > div");

    for (var i = 0; i < headers.length; i++) {
        if(headers[i].className == "active") {
            for (var j = 0; j < contents.length; j++) {
                contents[j].className = "tab hide";
            }
            contents[i].className = "tab show";
        }

        headers[i].index = i;
        headers[i].onclick = function () {
            for (var i = 0; i < headers.length; i++) {
                headers[i].className = "";
            }
            this.className = "active";
            for (var j = 0; j < contents.length; j++) {
                contents[j].className = "tab hide";
            }
            contents[this.index].className = "tab show";
        }
    }
}

// multi modals
$('.coupled.modal')
    .modal({
        allowMultiple: true,
    })
;

$('.second.modal')
    .modal('attach events', '.first.modal .button')
;

$('.third.modal')
    .modal('attach events', '.second.modal .button')
;

$('.first.modal')
    .modal('show');
