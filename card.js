let surpriseButton = document.getElementById("surprise-button");

function surpriseMe (){
	let index = randomNumber (0, closings.length -1);
closingText.textContent = closings[index];}

surpriseButton.addEventListener("click", surpriseMe);
 