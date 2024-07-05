const display = document.getElementById("display");
function appendToDisplay(input){
  display.value +=input;
}
function ClearDisplay(){
display.value='';
}
function calculate(){
 try{
  display.value=eval(display.value);
 }
 catch(error){
  display.value="Error";
 }
}
function sin() {
  display.value = Math.sin(parseFloat(display.value));
}
function cos() {
  display.value = Math.cos(parseFloat(display.value));
}
function tan() {
  display.value = Math.tan(parseFloat(display.value));
}
function BACKSPC() {
  // Removing the last character from the display
  display.value = display.value.slice(0, -1);
}

function square() {
  display.value = Math.pow(parseFloat(display.value),2);
}
  function cube() {
    display.value = Math.pow(parseFloat(display.value),3);
  }
  function sqrt2() {
    display.value = Math.pow(parseFloat(display.value),1/2);
  }
  function square() {
    display.value = Math.pow(parseFloat(display.value),1/3);
  }



  