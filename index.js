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




/////////////////// all my variables ///////////////////////

let indexLeftArrow = document.getElementById("indexLeftArrow");

let indexRightArrow = document.getElementById("indexRightArrow");

let slider = document.getElementById("slider");

let closeModalbutton = document.getElementById("closeModalbutton");

let GDModal = document.getElementById("GDModal");

let menuContact = document.getElementById("menuContact");

let closeWelcomeModal = document.getElementById("closeWelcomeModal");

let welcomeModal = document.getElementById("welcomeModal");

let contactButtonModal = document.getElementById("contactButtonModal");

let GDthumbnailGrid = document.getElementById("GDthumbnailGrid");

let WDthumbnailGrid = 
document.getElementById("WDthumbnailGrid");
    
let FeWDthumbnailGrid = 
document.getElementById("FeWDthumbnailGrid");




//////////////// slider on index page ///////////////

 let subheads = document.getElementsByClassName("subheadSwop");

 let sliderIndex = document.getElementsByClassName("sliderIndex");

 let index = 0;

 function displayTitle (number) {
  for(let i = 0; i<subheads.length;i++) {
    subheads[i].style.display = "none"   
  }
  subheads[number].style.display = 'block'
 }

 function displayGrid (number) {
  for(let i = 0; i<sliderIndex.length;i++) {
    sliderIndex[i].style.display = "none"   
  }
  sliderIndex[number].style.display = 'block'
 }



indexLeftArrow.addEventListener("click", goLeft);
indexRightArrow.addEventListener("click", goRight);

function goLeft(){
      index = index - 1;
      if(index < 0){
          index = subheads.length-1;
          index = sliderIndex.length-1;
      }
      displayTitle(index);
      displayGrid(index);
  }


function goRight(){
      index = index + 1
      if (index > subheads.length-1 && sliderIndex.length-1){         
          index = 0;
      }
    displayTitle(index);
    displayGrid(index);
  }



window.onload = displayTitle(index)
window.onload = displayGrid(index)






//////////// contact modal /////////////////

menuContact.addEventListener("click", openContactModal);

function openContactModal(){
    document.getElementById("GDModal").style.display = "block";
};


closeModalbutton.addEventListener("click", closeContactModal);

function closeContactModal(){
    document.getElementById("GDModal").style.display = "none";
};






/////// timeout welcome modal on index page //////////

document.getElementById("welcomeModal").style.display = "none";

function openWelcomeModal(){
    document.getElementById("welcomeModal").style.display = "block";

};

setTimeout("openWelcomeModal()", 2000)

closeWelcomeModal.addEventListener("click", closeWelcomeBox);

function closeWelcomeBox(){
    document.getElementById("welcomeModal").style.display = "none";
};


contactButtonModal.addEventListener("click", contactOpen_welcomeClose);

function contactOpen_welcomeClose(){
    document.getElementById("welcomeModal").style.display = "none";
    document.getElementById("GDModal").style.display = "block";
};



