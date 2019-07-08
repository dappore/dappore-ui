console.log('test');
$("select.dropdown").dropdown();

// .ui.sgcard


$(".ui.sgcard .icon.close").click(function () {
  $(this).closest(".ui.sgcard").transition("fade");
});


// .ui.sgmodal
$(".ui.sgmodal>.icon.close").click(function () {
    $(this).closest(".ui.sgmodal").transition("fade");
});

//image field
$(document).ready(function(){
    // $(".image.field").dimmer('show');
    $(".image.field").click(function () {
    //   $(".image.field").dimmer('hide');
      $(".icon.plus").hide();
      $("img").attr("src", "image/tom.jpg");
      $(".image.field").click(function(){
          $("img").attr("src", "image/nan.jpg");
      })
  });
});
 //select field
$(document).ready(function(){
    var courseArr = ["课程1", "课程2", "课程3", "课程4"];
    createNope(courseArr, 0);
    $(".select.field select").onchange=function(){
        Index = this.selectedIndex - 1;
        createNope(cityArr[Index], 1);
    };
    function createNope(Arr, sum) {
        $.each(Arr, function (index, value) {
            $(".select.field select").eq(sum).append("<option>" + value + "</option>");
        })
    }
});




//dependent field
$(document).ready(function(){
  var proArr = ["安徽","河南","河北","江苏"];
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
  $(".dependent.field select")[0].onchange = function(){
      $(".dependent.field select")[1].length = 1;
      $(".dependent.field select")[2].length = 1;
      $(".dependent.field select")[1][0].value="1";
      Index = this.selectedIndex-1;
      createNope(cityArr[Index],1);
  };
  $(".dependent.field select")[1].onchange = function(){
      $(".dependent.field select")[2].length = 1;
      createNope(couArr[Index][this.selectedIndex-1],2);
      $(".dependent.field select")[2][0].value = "1";
  };
  function createNope(Arr,sum){
      $.each(Arr,function(index,value){
          $(".dependent.field select").eq(sum).append("<option>"+value+"</option>");
      })
  }

})
