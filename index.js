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

//let menuGD = document.getElementById("menuGD");

//let menuWD = document.getElementById("menuWD");

//let menuFE = document.getElementById("menuFE");

//let menuRes = document.getElementById("menuRes");

let closeModalbutton = document.getElementById("closeModalbutton");

let GDModal = document.getElementById("GDModal");

let menuContact = document.getElementById("menuContact");

let closeWelcomeModal = document.getElementById("closeWelcomeModal");

let welcomeModal = document.getElementById("welcomeModal");

let contactButtonModal = document.getElementById("contactButtonModal");

let indexSliderDots = document.getElementById("indexSliderDots");

let indexSliderDot1 = document.getElementById("indexSliderDot1");

let indexSliderDot2 = document.getElementById("indexSliderDot2");

let indexSliderDot3 = document.getElementById("indexSliderDot3");


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






/////// click event dots on index slider /////////////

indexSliderDot1.addEventListener("click", slider_GD);

indexSliderDot2.addEventListener("click", slider_WD);

indexSliderDot3.addEventListener("click", slider_FeWD);

function slider_GD(){
    
        document.getElementById("indexSubhead1").style.display = "block";
        document.getElementById("indexSubhead2").style.display = "none";
        document.getElementById("indexSubhead3").style.display = "none";   
        document.getElementById("GDthumbnailGrid").style.display = "block";
        document.getElementById("WDthumbnailGrid").style.display = "none";
        document.getElementById("FeWDthumbnailGrid").style.display = "none";
        document.getElementById("indexSliderDot1").style.backgroundColor = "#4F3E60";
        document.getElementById("indexSliderDot2").style.backgroundColor = "#707070";
        document.getElementById("indexSliderDot3").style.backgroundColor = "#707070";
};

function slider_WD(){
        document.getElementById("indexSubhead1").style.display = "none";
        document.getElementById("indexSubhead2").style.display = "block";
        document.getElementById("indexSubhead3").style.display = "none";
        document.getElementById("GDthumbnailGrid").style.display = "none";
        document.getElementById("WDthumbnailGrid").style.display = "block";
        document.getElementById("FeWDthumbnailGrid").style.display = "none";
        document.getElementById("indexSliderDot1").style.backgroundColor = "#707070";
        document.getElementById("indexSliderDot2").style.backgroundColor = "#4F3E60";
        document.getElementById("indexSliderDot3").style.backgroundColor = "#707070";
};

function slider_FeWD(){
        document.getElementById("indexSubhead1").style.display = "none";
        document.getElementById("indexSubhead2").style.display = "none";
        document.getElementById("indexSubhead3").style.display = "block";
        document.getElementById("GDthumbnailGrid").style.display = "none";
        document.getElementById("WDthumbnailGrid").style.display = "none";
        document.getElementById("FeWDthumbnailGrid").style.display = "block";
        document.getElementById("indexSliderDot1").style.backgroundColor = "#707070";
        document.getElementById("indexSliderDot2").style.backgroundColor = "#707070";
        document.getElementById("indexSliderDot3").style.backgroundColor = "#4F3E60";
};






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



