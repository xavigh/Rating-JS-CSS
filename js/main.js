//Rating exercise
//@Xavi Gargallo
// add at the end of the HTML to define global variables depending of DOM elements
// because the file html needs to load first.

  //get the element + i then use to add css through classList.add()

   // star1.addEventListener("mouseover", mark, true );



// check stars
//we loop through DOM elem and change their css Class
// to display differently
function mark(n){
  reset();

      for(var i=1; i<=n; i++) {
        let elemId = document.querySelector("#star"+i);
        elemId.classList.toggle("marked",true);
      }
}
function reset(){
  for(var i=1; i<=5; i++) {
      let elemId = document.querySelector("#star"+i);
      elemId.classList.toggle("marked", false);
        console.log("elemId= "+ elemId);
  }
}
window.addEventListener("click",resetScreen);
starElements.addEventListener("click",stopReset);

// event listener to catch click anyhere in the screen but
// in the DOM element Id's that target our stars.
function resetScreen(){
  reset();

}
function stopReset(e){
    e.stopPropagation();
}
