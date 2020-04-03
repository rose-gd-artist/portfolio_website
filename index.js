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
} //this works



/////// index page slider //////////

//coding challenge - slider

//let leftButton = document.getElementById("left");
//let rightButton = document.getElementById("right");
//let slider = document.getElementById("slider");
//let index = 0;
//
//let colors = ["red", "blue", "yellow", "green"];
//
//leftButton.addEventListener("click", moveLeft)
//rightButton.addEventListener("click", moveRight)
//
//
//function assignColor() {
//	slider.style.background = colors[index +2]
//}
//
//  function moveLeft(){
//      index = index - 1;
//      if(index < 0){
//          index = colors.length-1
//      }
//      slider.style.background = colors[index]
//  }
//
//  function moveRight(){
//      index = index + 1
//      if (index > colors.length-1){
//          index = 0;
//      }
//      
//      slider.style.background = colors[index]
//  }
//  
//window.onload = assignColor()

let indexLeftArrow = document.getElementById("indexLeftArrow");

let indexRightArrow = document.getElementById("indexRightArrow");

let slider = document.getElementById("slider");

let menuGD = document.getElementById("menuGD");

let menuWD = document.getElementById("menuWD");

let menuFE = document.getElementById("menuFE");

let menuRes = document.getElementById("menuRes");

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

let indexSliderDot4 = document.getElementById("indexSliderDot4");

let GDthumbnailGrid = document.getElementById("GDthumbnailGrid");

let WDthumbnailGrid = 
document.getElementById("WDthumbnailGrid");
    
let FeWDthumbnailGrid = 
document.getElementById("FeWDthumbnailGrid");







///////////  code to alter below   ///////////
//////////   for slider that isn't working  ///////////


//let index = 0;
//
//let indexSubheads = {
//    category: "indexSubhead1",
//    category: "indexSubhead2",
//    category: "indexSubhead3",
//    category: "indexSubhead4"
//};
//
//
//indexLeftArrow.addEventListener("click", goLeft)
//
//indexRightArrow.addEventListener("click", goRight)
//
//function firstCategory() {
//	slider.style.display = indexSubheads[index +2]
//}
//
//function goLeft(){
//      console.log("go left fx");
//      index = index - 1;
//      if(index < 0){
//          index = indexSubheads.length-1
//      }
//      slider.style.display = indexSubheads[index]
//  }
//
//function goRight(){
//      console.log("go right fx");
//      index = index + 1
//      if (index > indexSubheads.length-1){
//          
//          index = 0;
//      }
//      
//      slider.style.display = indexSubheads[index]
//  }
//
//window.onload = firstCategory()




// Oggi started here

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

//indexLeftArrow.addEventListener("click", goLeft)
//indexRightArrow.addEventListener("click", goRight)

// function firstCategory() {
// 	slider.style.display = indexSubheads[index +2]
// }

indexLeftArrow.addEventListener("click", function(){
    goLeft()
    goLeftGrid()
    displayGrid()
    displayTitle()
});
indexRightArrow.addEventListener("click", function(){
    goRight()
    goRightGrid()
    displayGrid()
    displayTitle()
});

function goLeft(){
      index = index - 1;
      if(index < 0){
          index = subheads.length-1
      }
      displayTitle(index)
  }

function goRight(){
      index = index + 1
      if (index > subheads.length-1){         
          index = 0;
      }
    displayTitle(index)
  }
function goLeftGrid(){
      index = index - 1;
      if(index < 0){
          index = sliderIndex.length-1
      }
      displayGrid(index)
  }

function goRightGrid(){
      index = index + 1
      if (index > sliderIndex.length-1){         
          index = 0;
      }
    displayGrid(index)
  }


window.onload = displayTitle(index)
window.onload = displayGrid(index)

// Oggi finished here




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






menuGD.addEventListener("click", openGD);

function openGD(){
    document.getElementsByClassName("intro")[0].style.display = "none";
    document.getElementsByClassName("introExp")[0].style.display = "none";
    document.getElementById("indexSubhead1").style.display = "block";
    document.getElementById("indexSubhead2").style.display = "none";
    document.getElementById("indexSubhead3").style.display = "none";
    document.getElementById("indexSubhead4").style.display = "none";
    document.getElementById("indexSliderDots").style.display = "none";
    document.getElementById("GDthumbnailGrid").style.display = "block";
    document.getElementById("WDthumbnailGrid").style.display = "none";
    document.getElementById("FeWDthumbnailGrid").style.display = "none";
    document.getElementById("aboutMeGrid").style.display = "none";
    
};

menuWD.addEventListener("click", openWD);

function openWD(){
    document.getElementsByClassName("intro")[0].style.display = "none";
    document.getElementsByClassName("introExp")[0].style.display = "none";
    document.getElementById("indexSubhead1").style.display = "none";
    document.getElementById("indexSubhead2").style.display = "block";
    document.getElementById("indexSubhead3").style.display = "none";
    document.getElementById("indexSubhead4").style.display = "none";
    document.getElementById("indexSliderDots").style.display = "none";
    document.getElementById("GDthumbnailGrid").style.display = "none";
    document.getElementById("WDthumbnailGrid").style.display = "block";
    document.getElementById("FeWDthumbnailGrid").style.display = "none";
    document.getElementById("aboutMeGrid").style.display = "none";
    
};

menuFE.addEventListener("click", openFE);

function openFE(){
    document.getElementsByClassName("intro")[0].style.display = "none";
    document.getElementsByClassName("introExp")[0].style.display = "none";
    document.getElementById("indexSubhead1").style.display = "none";
    document.getElementById("indexSubhead2").style.display = "none";
    document.getElementById("indexSubhead3").style.display = "block";
    document.getElementById("indexSubhead4").style.display = "none";
    document.getElementById("indexSliderDots").style.display = "none";
    document.getElementById("GDthumbnailGrid").style.display = "none";
    document.getElementById("WDthumbnailGrid").style.display = "none";
    document.getElementById("FeWDthumbnailGrid").style.display = "block";
    document.getElementById("aboutMeGrid").style.display = "none";
    
};

menuRes.addEventListener("click", openRes);

function openRes(){
    document.getElementsByClassName("intro")[0].style.display = "none";
    document.getElementsByClassName("introExp")[0].style.display = "none";
    document.getElementById("indexSubhead1").style.display = "none";
    document.getElementById("indexSubhead2").style.display = "none";
    document.getElementById("indexSubhead3").style.display = "none";
    document.getElementById("indexSubhead4").style.display = "block";
    document.getElementById("indexSliderDots").style.display = "none";
    document.getElementById("GDthumbnailGrid").style.display = "none";
    document.getElementById("WDthumbnailGrid").style.display = "none";
    document.getElementById("FeWDthumbnailGrid").style.display = "none";
    document.getElementById("aboutMeGrid").style.display = "block";
    
};



/////// contact modal //////////

menuContact.addEventListener("click", openContactModal);

function openContactModal(){
    document.getElementById("GDModal").style.display = "block";
};


closeModalbutton.addEventListener("click", closeContactModal);

function closeContactModal(){
    document.getElementById("GDModal").style.display = "none";
};

/////// timeout welcome modal //////////

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



