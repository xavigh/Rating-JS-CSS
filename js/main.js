//Rating exercise
//@Xavi Gargallo


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
        // console.log("elemId= "+ elemId);
  }
}

// events listeners to catch click anyhere in the screen but
// in the DOM element Id's that target our stars.
window.addEventListener("click",reset);
starElements.addEventListener("click",stopReset);


function stopReset(e){
    e.stopPropagation();//this stops reset()
}

function clickOnStar(n){
  // window.removeEventListener("click",reset);
  // starElements.removeEventListener("click",stopReset);
  for(var i=1; i<=n; i++) {
    let elemId = document.querySelector("#star"+i);
    elemId.classList.toggle("starClick",true);
  }

}
