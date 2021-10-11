 var y = document.getElementById("setting-menu"); 


  function settingsMenuToggle() {
     y.style.height = "430px"

}

var lightbtn = document.getElementById("light-btn");

     lightbtn.onclick = function() {
     	lightbtn.classList.toggle("light-btn-on")
     }