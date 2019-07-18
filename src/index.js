console.log('test');
$(".ui.checkbox").checkbox();
$("select.dropdown").dropdown();
$(".ui.infor.modal>.ui.form>radio.field>.inline.fields>.field>.ui.radio.checkbox").checkbox();

// .ui.sgcard


$(".ui.sgcard .icon.close").click(function () {
  $(this).closest(".ui.sgcard").transition("fade");
});




// .ui.sgmodal
$('.ui.infor.modal').modal('show');

        $(".ui.form>.inline.fields>.field>.ui.checkbox").checkbox();
        $(".ui.form>.avatar.field>.image.field").click(function(evt) {
            console.log(evt.target.id);
            if (evt.target.id != $("#open_image").id) {
                $("#open_image").click();
            }
        });

        //在input file内容改变的时候触发事件
        $('#open_image').change(function () {

            $(".ui.form>.avatar.field>.image.field>.icon.plus").hide();
            //获取input file的files文件数组;
            //$('#open_image')获取的是jQuery对象，.get(0)转为原生对象;
            //这边默认只能选一个，但是存放形式仍然是数组，所以取第一个元素使用[0];
            var file = $('#open_image').get(0).files[0];
            //创建用来读取此文件的对象
            var reader = new FileReader();
            //使用该对象读取file文件
            reader.readAsDataURL(file);
            //读取文件成功后执行的方法函数
            reader.onload = function (e) {
                //读取成功后返回的一个参数e，整个的一个进度事件
                // console.log(e);
                //选择所要显示图片的img，要赋值给img的src就是e中target下result里面
                //的base64编码格式的地址
                $('#imgshow').get(0).src = e.target.result;
            }
        });





// $('.select.field>.ui.dropdown').dropdown();
$(".ui.infor.modal>.icon.close").click(function () {
    $(this).closest(".ui.infor.modal").transition("fade");
});


 //select field

    var courseArr = ["课程1", "课程2", "课程3", "课程4"];
    createNope(courseArr, 0);
    $(".select.field select").onchange=function(){
        Index = this.selectedIndex - 1;
        // createNope(cityArr[Index], 1);
    };
    function createNope(Arr, sum) {
        $.each(Arr, function (index, value) {
            $(".select.field select").eq(sum).append("<option>" + value + "</option>");
        })
    };

//attach field

  $(".attach.field>.field>.ui.icon.label>.icon.close").click(function() {
    $(this).closest(".attach.field").transition("fade");
  });
  // $(".attach.field>.field>.ui.icon.label>.icon.close").click(function () {
  //     $(this).closest(".attach.field").transition("fade");
  // });
  //add attach field
  $(".add.field").click(function() {
    $(".post.content").append(
      "<div><label>职级2</label><div><select><option>职位</option></select><div><i></i></div></div></div>"
    );
    $(".post.content>div").addClass("attach field");
    $(".post.content>.attach.field>label").addClass("header");
    $(".post.content>.attach.field>div").addClass("field");
    $(".post.content>.attach.field>.field>select").addClass("ui dropdown");
    $(".post.content>.attach.field>.field>select.dropdown").dropdown();
    $(".post.content>.attach.field>.field>div:last").addClass("ui icon circular label");
    $(".post.content>.attach.field>.field>.ui.icon.circular.label>i").addClass("icon close");
    $(".post.content>.attach.field>.field>.ui.icon.label>.icon.close").each(function(index){
        $(".post.content>.attach.field>.field>.ui.icon.label>.icon.close").eq(index).click(function(){
            $(".post.content>.attach.field").each(function(i){
                if(i===index){
                    $(".post.content>.attach.field").eq(i).hide();
                }
            })
        })
         });
  });

//dependent field
$(document).ready(function(){
  var proArr = ["安徽省", "河南省", "河北省", "江苏省", "教研部门"];
  var cityArr = [
    ["合肥市", "蚌埠市", "亳州市", "阜阳市"],
    ["郑州市", "开封市", "商丘市", "焦作市"],
    ["石家庄市", "邯郸市", "衡水市"],
    ["苏州市", "杭州市", "无锡市", "南京市"]
  ];
  var couArr = [
      [
          ["合县1","合县2","合县3","合县4"],
          ["蚌县1","蚌县2","蚌县3","蚌县4"],
          ["亳县1","亳县2","亳县3","亳县4"],
          ["阜县1","阜县2","阜县3","阜县4"],
      ],
      [
          ["郑县1","郑县2","郑县3","郑县4"],
          ["开县1","开县2","开县3","开县4"],
          ["商县1","商县2","商县3","商县4"],
          ["焦县1","焦县2","焦县3","焦县4"],
      ],
      [
          ["石县1","石县2","石县3","石县4"],
          ["邯县1","邯县2","邯县3","邯县4"],
          ["衡县1","衡县2","衡县3","衡县4"],
      ],
      [
          ["苏县1","苏县2","苏县3","苏县4"],
          ["杭县1","杭县2","杭县3","杭县4"],
          ["无县1","无县2","无县3","无县4"],
          ["南县1","南县2","南县3","南县4"],
      ],
  ];
  createNope(proArr,0);
  $(".dependent.field>.field select")[0].onchange = function(){
      $(".dependent.field>.field select")[1].length = 1;
      $(".dependent.field>.field select")[2].length = 1;
      $(".dependent.field>.field select")[1][0].value="1";
      Index = this.selectedIndex-1;
      createNope(cityArr[Index],1);
  };
  $(".dependent.field>.field select")[1].onchange = function(){
      $(".dependent.field>.field select")[2].length = 1;
      createNope(couArr[Index][this.selectedIndex-1],2);
      $(".dependent.field>.field select")[2][0].value = "1";
  };
  function createNope(Arr,sum){
      $.each(Arr,function(index,value){
          $(".dependent.field>.field select").eq(sum).append("<option>"+value+"</option>");
      })
  }

});
//email validation
$('.ui.form>.validation.field>.ui.input>input').change(function () {
    var rgeEmail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    var regPhone = /^1[34578]\d{9}$/;
    if (!rgeEmail.test($(".ui.form>.validation.field>.ui.input>input").val())) {
        if (!regPhone.test($(".ui.form>.validation.field>.ui.input>input").val())){
            $(".ui.form>.validation.field>.tip").css("display", "block").html("邮箱或者电话格式不正确，请重新输入！");
            $(".ui.form>.validation.field>.ui.input>input").focus(function () {
                $(".ui.form>.validation.field>.tip").css("display", "none");
            });
        }
    }
});
