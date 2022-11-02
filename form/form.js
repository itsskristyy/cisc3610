// Selection of id's and classes from html document
const bgclr = document.getElementById("clr");
const textclr = document.getElementById("textColor")
const fontColor = document.getElementById("brushscript")
  
// Here we are adding event listener which 
// is used to detect the mouse movement
bgclr.addEventListener("input", () => {
  // This updates the background color which is 
  // picked by the user from the picker
  document.body.style.backgroundColor = bgclr.value;
});


//change text color 
textclr.addEventListener("input", () => {
    // This updates the text color which is 
    // picked by the user from the picker
    document.body.style.color = textclr.value;
    
    // This is the conditional statement that is used
    // to change the text color from BLACK to WHITE
    // when the background color changes to dark!
  });

  fontColor.addEventListener("input", () => {
    // This updates the text color which is 
    // picked by the user from the picker
    h2 = brushscript.value;
    
    // This is the conditional statement that is used
    // to change the text color from BLACK to WHITE
    // when the background color changes to dark!
  });