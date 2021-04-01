$(document).ready(function () {
  var movementStrength = 25;
  var height = movementStrength / $(window).height();
  var width = movementStrength / $(window).width();
  $("#main-image").mousemove(function (e) {
    console.log("MOSUEOVER");
    var pageX = e.pageX - $(window).width() / 2;
    var pageY = e.pageY - $(window).height() / 2;
    var newvalueX = width * pageX * -1 - 10;
    var newvalueY = height * pageY * -1 - 10;
    $("#main-image").css(
      "background-position",
      newvalueX + "px     " + newvalueY + "px"
    );
  });

  // function to fade in and out between other photos
  // var images = ["lux-main.png", "jinx-main.png", "akali-main.png"];
  // $(function () {
  //   var i = 0;
  //   $("#main-image").css(
  //     "background-image",
  //     "url(http://localhost/world-of-league/public/images/" + images[i] + ")"
  //   );
  //   setInterval(function () {
  //     i++;
  //     if (i == images.length) {
  //       i = 0;
  //     }
  //     $("#main-image").fadeOut("slow", function () {
  //       $(this).css(
  //         "background-image",
  //         "url(http://localhost/world-of-league/public/images/" +
  //           images[i] +
  //           ")"
  //       );
  //       $(this).fadeIn("slow");
  //     });
  //   }, 5000);
  // });
});
