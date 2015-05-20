//18 of the more commonly used jQuery methods

//.addClass
$(document).ready(function(){
$("#btn1").click(function(){
    $("#demo1").addClass("cursive");
  });
});

//.after
$(document).ready(function(){
$("#btn2").click(function(){
    $("#demo2").after("<h4>You just added an h4 tag</h4>");
  });
});

//.append
$(document).ready(function(){
$("#btn3").click(function(){
    $("#demo3").append("<button>Easy Button</button>");
  });
});

//.attr
$(document).ready(function() {
  $("#btn4").click(function(){
    $("#demo4-1").append($("#demo4").attr("title"));
  });
});

//.before
$(document).ready(function() {
  $("#btn5").click(function(){
    $("#demo5").before("<p>&#9734</p>");
  });
});

//.html
$(document).ready(function () {
  $("#btn6").click(function() {
    $("#demo6").html("<p>The text was replaced.</p>");
  });
});

//.text
$(document).ready(function () {
  $("#btn7").click(function() {
    $("#demo7").text("<p>The text was replaced.</p>");
  });
});

//.val
$(document).ready(function() {
  $( "#btn8" ).click(function() {
    var text = $( "#btn8" ).text();
    $( "#input1" ).val( text );
  });
});

//.toggle
$(document).ready(function(){
  $("#btn9").click(function(){
    $("#demo9").toggle($("#demo9").css("display:none"));
  });
});

//.hide
$(document).ready(function(){
  $("#btn10").click(function(){
    $("#demo10").hide();
  });
});

//.show
$(document).ready(function(){
  $("#btn11").click(function(){
    $("#demo11").show("slow", function () {
      //animates to show over 600ms
    });
  });
});

//.slideDown
$(document).ready(function(){
  $("#btn12").click(function(){
    $("#demo12").slideDown(300, function () {
      $("#demo12").css("border", "3px solid #606F93");
    });
  });
});

//.slideToggle
$(document).ready(function() {
  $("#btn13").click(function(){
    $("#demo13").slideToggle(1600);
  });
});

//.slideToggle
$(document).ready(function() {
  $("#btn14").click(function(){
    $("#demo14").slideUp(3000);
  });
});

//.fadeOut
$(document).ready(function() {
  $("#btn15").click(function(){
    $("#demo15").fadeOut(750);
  });
});

//.fadeIn
$(document).ready(function() {
  $("#btn16").click(function(){
    $("#demo16").fadeIn(1500);
  });
});

//.focus
$(document).ready(function(){
    $("#demo17").focus("slow", function(){
      $("#demo17").css("background", "pink").val("Thanks!");
    });
});

//.click
$(document).ready(function(){
    $("#demo18").click(function(){
      $("#p18").css("visibility", "visible");
    });
});



















