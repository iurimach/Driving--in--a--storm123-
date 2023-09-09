



  function moveElement(direction) {
  var element = document.getElementById('element');
  var currentPosition = parseInt(element.style.left) || 0;
 

  if (direction === 'right' && currentPosition<650) {
    currentPosition += 50; 
  } else if (direction === 'left' && currentPosition>0) {
    currentPosition -= 50; 
    
  }

  element.style.left = currentPosition + 'px';
}

function moveElement2(direction) {
 
    var element = document.getElementById('element');
    var currentPosition = parseInt(element.style.top) || 0;
    console.log(currentPosition)
  
    if (direction === 'down' && currentPosition<320){ // ამ პოზიციაზე ეუბნბა რომ კარგია
        
      currentPosition += 50; 
      messagegood()
      if ( currentPosition>300 ) { //აქ აფრთხილებს რო მაღლა ავიდეს 
     
        messageup();
      }else{}
      
    }
  
    
   
    else if(direction === "up"&& currentPosition<10){

      messagedown(); 
      
    }
    
    else if (direction === 'up' && currentPosition>-20 ) {
      currentPosition -= 50; 
      if(currentPosition<310){// აქ  ეუბნება რომ კარგად მოზრაობს
        messagegood();
        
        if(currentPosition<10){//აქ აფრთილებს  დაბლა ჩავიდეს 
          messagedown();
         
        }
      else{}
      }
      
    }
   
    


    element.style.top = currentPosition + 'px';
    return currentPosition
  }


// -----------------------function message---------------------------------
function messageup(){
  var box=document.querySelector(".box")
  var massage=document.querySelector(".massage")
  massage.textContent="go up !"
  massage.style.color="red"
  massage.style.fontSize="37px"
  massage.style.marginLeft="40%"
  box.appendChild(massage)

  var btdown=document.querySelector(".btdown")// button style
  btdown.style.color="red"

  police.play(); // police sound

  startAnimation(); // start animtion red blu
  
}

function messagedown(){
  var box=document.querySelector(".box")
  var massage=document.querySelector(".massage")
  massage.textContent="come down ! "
  massage.style.color="red"
  massage.style.fontSize="37px"
  massage.style.marginLeft="40%"
  box.appendChild(massage)

  var btup=document.querySelector('.btup') // button style
  btup.style.color="red"

  police.play(); // police sound
  startAnimation(); // start animtion red blu
}

function messagegood(){
  var box=document.querySelector(".box")
  var massage=document.querySelector(".massage")
  massage.textContent="it's good "
  massage.style.color="white"
  massage.style.fontSize="37px"
  massage.style.marginLeft="40%"
  box.appendChild(massage)

  var btup=document.querySelector('.btup') // button style
  btup.style.color="black"

  var btdown=document.querySelector(".btdown")// button style
  btdown.style.color="black"

  police.pause(); // police sound
  police.currentTime = 0;

  stopAnimation(); // stop animtion red blu
  
  
}

// ----------------------------animacia -----------------------------------------------------------------------
let animationInterval;
function autoChangeBackgroundColor() {
  var element = document.querySelector(".section1");
  var colors = ["red", "blue"]; // Array of colors to transition between
  var currentColorIndex = 0;

  animationInterval = setInterval(function() {
      element.style.backgroundColor = colors[currentColorIndex];
      currentColorIndex = (currentColorIndex + 1) % colors.length;
  }, 600); // Change color every 2 seconds (adjust as needed)
}



function startAnimation() {
  if (!animationInterval) {
      autoChangeBackgroundColor(); // Start the animation
  }
}


function stopAnimation() {
  if (animationInterval) {
      clearInterval(animationInterval); // Stop the animation
      animationInterval = null; // Reset the interval variable
      var section1 = document.querySelector(".section1");
      section1.style.backgroundColor="rgb(227, 234, 234)"
  }
}

  // აქ იწყება audio ჩარტვა დაპუზება გამორტვა----------------------------------------------
  var audio=document.querySelector('#audio')
  function play(){
    audio.play();
    
  } 
  function stop(){
    audio.pause();
    audio.currentTime = 0;
  }
  function pause(){
    audio.pause();

  }
  var police=document.querySelector('#police')



