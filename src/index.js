console.log('test');
$("select.dropdown").dropdown();
$('.ui.form>.toggle.field>.ui.checkbox').checkbox();
$(".ui.form>.check.field>.inline.fields>.field>.ui.checkbox").checkbox();
$(".ui.form>.radio.field>.inline.fields>.field>.ui.checkbox").checkbox();
// .ui.sgcard


$(".ui.sgcard .icon.close").click(function () {
  $(this).closest(".ui.sgcard").transition("fade");
});





// .ui.sgmodal

    $(document).ready(function(){
        $('.ui.form')
            .form({
                fields: {
                    email: {
                        identifier: "email",
                        rules: [
                            {
                                type: 'email',
                                optional: true,
                                prompt: "邮箱格式错误，请重新输入",
                            },
                        ]
                    },
                }
            });
    });

$('.ui.infor.modal').modal('show');
// $('.select.field>.ui.dropdown').dropdown();
$(".ui.infor.modal>.icon.close").click(function () {
    $(this).closest(".ui.infor.modal").transition("fade");
});

//image field
$(document).ready(function(){
    $(".ui.form>.image.field").click(function () {
        $(".ui.form>.image.field>.icon.plus").hide();
        $(".ui.form>.image.field>img").attr("src", "image/tom.jpg");
        $(".ui.form>.image.field").click(function () {
            $(".ui.form>.image.field>img").attr("src", "image/nan.jpg");
        })
    });
})


 //select field
$(document).ready(function(){
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
    }
});
//attach field
$(document).ready(function() {
  var postArr = ["职位1", "职位2", "职位3", "职位4"];
  createNope(postArr, 0);
  $(".attach.field>.field select").onchange = function() {
    Index = this.selectedIndex - 1;
    // createNope(cityArr[Index], 1);
  };
  function createNope(Arr, sum) {
    $.each(Arr, function(index, value) {
      $(".attach.field>.field select")
        .eq(sum)
        .append("<option>" + value + "</option>");
    });
  };
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
    $(".post.content>.attach.field>div").addClass("field");
    $(".post.content>.attach.field>.field>select").addClass("ui dropdown");
    $(".post.content>.attach.field>.field>select.dropdown").dropdown();
    $(".post.content>.attach.field>.field>div:last").addClass("ui icon label");
    $(".post.content>.attach.field>.field>.ui.icon.label>i").addClass("icon close");
      $(".post.content>.attach.field>.field>.ui.icon.label>i").attr("name", "close");
    //   $(".post.content>.attach.field").each(function(i){
    //       $(".post.content>.attach.field").eq(i)
    //       var post1Arr = ["职位1", "职位2"];
    //       createNope(post1Arr, 0);
    //       $(
    //         ".post.content>.attach.field>.field select"
    //       ).onchange = function() {
    //         Index = this.selectedIndex - 1;
    //         // createNope(cityArr[Index], 1);
    //       };
    //       function createNope(Arr, sum) {
    //           $.each(Arr, function (index, value) {
    //               $(".post.content>.attach.field>.field select")
    //                   .eq(sum)
    //                   .append("<option>" + value + "</option>");
    //           });
    //       };
    //   });
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

});










//dependent field
$(document).ready(function(){
  var proArr = ["安徽", "河南", "河北", "江苏", "教研部门"];
  var cityArr = [
      ["合肥","蚌埠","亳州","阜阳"],
      ["郑州","开封","商丘","焦作"],
      ["石家庄","邯郸","衡水"],
      ["苏州","杭州","无锡","南京"]
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

})
