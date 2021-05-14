"use strict";

$(document).ready(async function () {

  let response = await fetch(
    "http://promo.888.com/888sport/webmaster/data.php"
  );
  let result = await response.json();

  $("#left_city").text("if " + result.left.teamName + " win");
  $("#right_city").text("if " + result.right.teamName + " win");
  $("#bet_1").html(result.slider.low);
  $("#bet_2").html(result.slider.medium);
  $("#bet_3").html(result.slider.high);
  var _symbol_num = result.slider.low.split(" ")[1];
  var _symbol = _symbol_num.slice(0, 6);


  $("#left_price").html(_symbol + result.left.price[0]);
  $("#right_price").html(_symbol + result.right.price[0]);

  $("#bet_1").on("click", function (e) {
    var getBtnBackground = $("#bet_1").attr("active-background");
    $("#bet_1").css({ background: getBtnBackground });
    $("#left_price").html(_symbol + result.left.price[0]);
    $("#right_price").html(_symbol + result.right.price[0]);
    $("#bet_2").css("background", "transparent");
    $("#bet_3").css("background", "transparent");
  });

  $("#bet_2").on("click", function (e) {
    var getBtnBackground = $("#bet_2").attr("active-background");
    // alert(getBtnBackground);
    $("#bet_2").css({ background: getBtnBackground });
    $("#left_price").html(_symbol + result.left.price[1]);
    $("#right_price").html(_symbol + result.right.price[1]);
    $("#bet_1").css("background", "transparent");
    $("#bet_3").css("background", "transparent");
  });
  $("#bet_3").on("click", function (e) {
    var getBtnBackground = $("#bet_3").attr("active-background");
    $("#bet_3").css({ background: getBtnBackground });
    $("#left_price").html(_symbol + result.left.price[2]);
    $("#right_price").html(_symbol + result.right.price[2]);
    $("#bet_1").css("background", "transparent");
    $("#bet_2").css("background", "transparent");
  });
});
