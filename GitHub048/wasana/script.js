function reserveTable(){
	
	let name=document.getElementById("name").value;
	let phone=document.getElementById("phone").value;
	let date=document.getElementById("date").value;
	
	if(name===""|| phone==="" || date===""){
		alert("Please fill all fields.");
	}
	else{
		alert("Reservation Succrssful for "+  name +" ");
	}
}
