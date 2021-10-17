
var x = document.querySelector(".setting-menu");


function settingsMenuToggle() {
x.classList.toggle("show");
}


var y = document.querySelector(".light-btn");

function onIt() {
   y.classList.toggle("light-btn-on");
   document.body.classList.toggle("light-theme");

   if (localStorage.getItem("theme") == "dark") {
        localStorage.setItem("theme", "light");
   }
   else{
      localStorage.setItem("theme", "light");
   }
}




if (localStorage.getItem("theme") == "dark") {
    y.classList.remove("light-btn-on");
    document.body.classList.remove("light-theme");
}

else if(localStorage.getItem("theme") == "light"){
   y.classList.add("light-btn-on");
    document.body.classList.add("light-theme");

}



else{
   localStorage.setItem("theme", "light");
}
