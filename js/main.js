//Rating exercise
//@Xavi Gargallo
// add at the end of the HTML to define global variables depending of DOM elements
// because the file html needs to load first.

  var star1 = document.querySelector("#star1");
  var star2 = document.querySelector("#star2");
  var star3 = document.querySelector("#star3");
  var star4 = document.querySelector("#star4");
  var star5 = document.querySelector("#star5");

   // star1.addEventListener("mouseover", mark, true );

// keep variable DOM elements inside an array
 var starsArray = [star1, star2, star3, star4, star5];

// check stars
function mark(n){
  reset();
      for(var i=0; i<=n; i++) {
        starsArray[i].classList.toggle("marked",true);
        // console.log(starsArray[i]);
      }

}
function reset(){
  for(var i=0; i<=4; i++) {
    starsArray[i].classList.toggle("marked", false);
    console.log(starsArray[i]);
  }
}
