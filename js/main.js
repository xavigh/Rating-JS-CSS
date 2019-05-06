




// check stars
function mark(n){

  var star1 = document.querySelector("#star1");
  var star2 = document.querySelector("#star2");
  var star3 = document.querySelector("#star3");
  var star4 = document.querySelector("#star4");
  var star5 = document.querySelector("#star5");

console.log("global variable = " + star1);

// keep variable DOM elements inside an array
var starsArray = [star1, star2, star3, star4, star5];


      for(var i=0; i<=n; i++) {

        starsArray[i].classList.add("marked");
        console.log(starsArray[i]);
      }

}
