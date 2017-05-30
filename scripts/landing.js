var pointsArray = document.getElementsByClassName('point');

var animatePoints = function(points){

  var revealPoint = function(j) {
     points[j].style.opacity = 1;
     points[j].style.transform = "scaleX(1) translateY(0)";
     points[j].style.msTransform = "scaleX(1) translateY(0)";
     points[j].style.WebkitTransform = "scaleX(1) translateY(0)";
    }
    forEach(points, revealPoint);
};

window.onload = function() {

  if (window.innerHeight > 950) {
        animatePoints(pointsArray);
    }
   var sellingPoints = document.getElementsByClassName('selling-points')[0];
   var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

  window.addEventListener('scroll', function(event) {
    if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
          animatePoints(pointsArray);
      }
    });
}
