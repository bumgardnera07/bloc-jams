var pointsArray = document.getElementsByClassName('point');

var animatePoints = function(points){

  var revealPoint = function(j) {
     points[j].style.opacity = 1;
     points[j].style.transform = "scaleX(1) translateY(0)";
     points[j].style.msTransform = "scaleX(1) translateY(0)";
     points[j].style.WebkitTransform = "scaleX(1) translateY(0)";
    }
    for (var i= 0; i< points.length; i++) {
      revealPoint(i);
    }
};

 $(window).load(function() {

   if ($(window).height() > 950) {
    animatePoints();
}
   var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;
   $(window).scroll(function(event) {
     if ($(window).scrollTop() >= scrollDistance) {
             animatePoints();
      }
    });
});
