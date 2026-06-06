//select elements
const title=document.getElementById("title");
const button=document.getElementById("changeBtn");

//add click event
button.addEventListner("click",function(){
	
	// change Text
	title.textContent="Button Clicked !!";
	
	//change color
	title.style.color="red";
});