function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

function myFunction2(x) {
  x.classList.toggle("change");
}

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function aboutText() {
  var x = document.getElementById("about");
  if (x.innerHTML = "Dylan Runewicz <br/><br> Musician/Writer/Nerd") 
  
     {
    x.innerHTML = "<p style=background-color:lightgrey; >My name is Dylan, you can call me <br><br>Dyldonius, Dyldo or Dyl for short.<br><br>I'm like the bootleg baby of <br><br>Bo Burnham and Adam Sandler, <br><br>the forbidden love child of Dana Carvey <br><br>and Rodney Carrington, I'm the wit and <br><br>repose of Steve Martin drenched in the <br><br>existentialism of George Carlin, a 1-man<br><br> TenaciousD<p>";
    
   } else {
    x.innerHTML = "Dylan Runewicz <br/><br>Musician/Writer/Nerd";
     
      
  }
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
