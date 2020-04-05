


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

let contactModal = document.getElementById("contactModal");

let menuContact = document.getElementById("menuContact");

let contactButtonModal = document.getElementById("contactButtonModal");





//////////// contact modal /////////////////

menuContact.addEventListener("click", openContactModal);

function openContactModal(){
    document.getElementById("contactModal").style.display = "block";
};


closeModalbutton.addEventListener("click", closeContactModal);

function closeContactModal(){
    document.getElementById("contactModal").style.display = "none";
};


///////// calculator code  /////////////////


var calcScreen1 = document.getElementById("calcScreen1");

var calcScreen2 = document.getElementById("calcScreen2");

var calcScreen3 = document.getElementById("calcScreen3");

var addition = document.getElementById("add");

var subtract = document.getElementById("subtract");

var multiply = document.getElementById("multiply");

var divide = document.getElementById("divide");

var equals = document.getElementById("equals");

var mathOperators;

addition.addEventListener("click", function () {
	mathOperators = "+"
})

subtract.addEventListener("click", function () {
	mathOperators = "-"
})

multiply.addEventListener("click", function () {
	mathOperators = "*"
})

divide.addEventListener("click", function () {
	mathOperators = "/"
})

equals.addEventListener("click", function () {
	if(mathOperators == "+") {
		calcScreen3.innerHTML = (parseInt(calcScreen1.value) + parseInt(calcScreen2.value))
	} else if (mathOperators == "-") {
		calcScreen3.innerHTML = (parseInt(calcScreen1.value) - parseInt(calcScreen2.value))
	} else if (mathOperators == "*") {
		calcScreen3.innerHTML = (parseInt(calcScreen1.value) * parseInt(calcScreen2.value))
	} else if (mathOperators == "/") {
		calcScreen3.innerHTML = (parseInt(calcScreen1.value) / parseInt(calcScreen2.value))
	} 
})





