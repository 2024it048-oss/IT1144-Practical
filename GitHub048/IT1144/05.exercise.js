let studentName="Dahami"
let studentAge="21"
let hasRegistered=true;
let studentMark=80;
console.log("print using calling element one by one");
console.log("student name: "+studentName);
console.log("studentAge: "+ studentAge);
console.log(hasRegistered);
console.log(studentMark);
console.log();

if (studentMark >=50){
	console.log("pass");
}
else{
	console.log("Fail");
}
console.log();
console.log("creating an array");
let subject=["Maths","Science","English","ICT"];
console.log(subject);
console.log();


console.log("showing array by using loop");
for(let key in subject){
		console.log(subject[key]);
}

function calculateTotal(a,b)
{return a+b;}
let total=calculateTotal(45,80);
console.log("Total Marks: "+total);

