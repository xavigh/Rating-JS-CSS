//Rating star exercise, Xavi Gargallo Jané


//we loop through DOM elem and change the css Class to display differently
// events listeners to catch click anyhere in the screen but
// in the DOM element Id's that target our stars.
window.addEventListener("click",reset);
window.addEventListener("click",resetStarsClicked);
starElements.addEventListener("click",stopReset);

//Add marked class
function mark(n){
      reset();
      for(var i=1; i<=n; i++) {
        let elemId = document.querySelector("#star"+i);
        elemId.classList.toggle("marked",true);
      }
}
//Reset the stars
function reset(){
      for(var i=1; i<=5; i++) {
          let elemId = document.querySelector("#star"+i);
          elemId.classList.toggle("marked", false);
         // console.log("elemId= "+ elemId);
      }
}
//reset the stars when clicked on them.
function resetStarsClicked() {

      for(var i=1; i<=5; i++) {
          let elemId = document.querySelector("#star"+i);
          elemId.classList.toggle("starClick", false);
            // console.log("elemId= "+ elemId);
      }
}
// if user clicks on star then stop reset.
function stopReset(e){
    e.stopPropagation();//this stops reset()
}
// if user click on star then add css class starClick.
function clickOnStar(n){
      resetStarsClicked();

      for(var i=1; i<=n; i++) {
        let elemId = document.querySelector("#star"+i);
        elemId.classList.toggle("starClick",true);
      }
}
