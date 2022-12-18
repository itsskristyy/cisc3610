var currentPlayer;
function playSound(animal) {

 var thissound=document.getElementById(animal);
 if(currentPlayer  && currentPlayer != thissound) {
      currentPlayer.pause(); 
 }
 if (thissound.paused)
            thissound.play();
    else
        thissound.pause();
        thissound.currentTime = 0;
         currentPlayer = thissound;
}