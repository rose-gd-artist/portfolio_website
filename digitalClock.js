//////////// this makes the clock work ////////////////



let clock = document.getElementById("clock");
let color = document.getElementById("outermostDiv");
let hourColor = document.getElementById("hourColor");
let minuteColor = document.getElementById("minuteColor");
let secondColor = document.getElementById("secondColor");

function clockTime() {
  let d = new Date();
  let h = d.getHours();
  h = (h>12 ? h-12 : (h!=0 ? h : 12)).toString().padStart(2, '0');
  let m = d.getMinutes().toString().padStart(2, '0');
  let s = d.getSeconds().toString().padStart(2, '0');
  let AMorPM = d.getHours()<12 ? "AM" : "PM";

  document.getElementById("AMorPM").innerText = AMorPM;
  document.getElementById("hours").innerText = h;
  document.getElementById("minutes").innerText = m;
  document.getElementById("seconds").innerText = s;
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#"+randomColor;
  document.getElementById("minuteColor").style.backgroundColor = "#"+randomColor;
    
  setTimeout("clockTime()", 1000)
}
clockTime()


///////// dropdown menu controls /////////////

document.getElementById("menu1").onclick = function() {menuOpen()};

function menuOpen(){
    document.getElementById("menu1").style.display = "none";
    document.getElementById("menu2").style.display = "block";
    document.getElementById("dropdown").style.display = "block";
}

document.getElementById("menu2").onclick = function() {menuClose()};

function menuClose(){
    document.getElementById("menu1").style.display = "block";
    document.getElementById("menu2").style.display = "none";
    document.getElementById("dropdown").style.display = "none";
}


//////////// Description drop down ////////////////

let infoClose = document.getElementById("infoClose");

let info_button = document.getElementById("info_button");

document.getElementById("info_button").onclick = function() {descriptionOpen()};

function descriptionOpen(){
    if(infoClose.style.display === "none"){
        document.getElementById("infoClose").style.display = "block";
        document.getElementById("info_modal_godZ").style.display = "block";
    } else {
       document.getElementById("infoClose").style.display = "none";
       document.getElementById("info_modal_godZ").style.display = "none"; 
    }
}





/////////////////// all my variables ///////////////////////

let closeModalbutton = document.getElementById("closeModalbutton");

let GDModal = document.getElementById("GDModal");

let menuContact = document.getElementById("menuContact");

let contactButtonModal = document.getElementById("contactButtonModal");





//////////// contact modal /////////////////

menuContact.addEventListener("click", openContactModal);

function openContactModal(){
    document.getElementById("GDModal").style.display = "block";
};


closeModalbutton.addEventListener("click", closeContactModal);

function closeContactModal(){
    document.getElementById("GDModal").style.display = "none";
};





