let myImage = document.querySelector("img");

myImage.onclick = function(){
	let mySrc = myImage.getAttribute("src");
	if (mySrc === "images/site-logo.png"){
		myImage.setAttribute("src", "images/Gardevoir.png");
	}
	else{
		myImage.setAttribute("src", "images/site-logo.png");
	}
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
	let myName = prompt("Please enter your user name");
	localStorage.setItem("name", myName);
	myHeading.textcontent = "You are cool! " + myName;
}

if (!localStorage.getItem("name")){
	setUserName();
}
else{
	let storedName = localStorage.getItem("name");
	myHeading.textcontent = "You are cool! " + storedName;
}

myButton.onclick = setUserName;