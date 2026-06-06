console.log(" ==Arithmatic Operators==")
// ==  ->   Equal to(loose) //only the value
//=== ->   Equal to(strict) //value and data type

//!=  ->   Not Equal to(loose)
//!== ->   Not Equal to(strict)

//>   ->   Greater than
//<   ->   Less than

//>=  ->   Greater than or equal to
//<=  ->   Less than or equal to

console.log (55=="55"); //true
console.log (5==="5"); //false
console.log (10!= 5); //true
console.log (10> 5); //true
console.log (10< 5); //false
console.log (10>= 5); //true
console.log (10<=5); //false

console.log(" ======= Logical Operators =======")
// && ->  AND -> Both must be true
// || ->  OR  -> either one is true
// !  ->  NOT -> flips the value

let age= 15;
let hasId = true;
			// true		true		=> true
console.log(age >= 18 && hasId === true);
			// true		false		=> true
console.log(age >= 18 || hasId === false);
		//true flips and output is "false"
console.log(!hasId); 

console.log(" ======= IF condition =======");

if(age>=18){
	console.log("You are an adult..")
}
console.log("You can vote now..!")

console.log("======= Conditionals =======")

if (age >= 18){
	console.log("Access granted.Welcome!")
}
else{
	console.log("Access denied..You must be 18 or older..!")
}

console.log("=======Else if=======")

let number=15

if (number>0){
	console.log("Positive number");
}
else if (number<0){
	console.log("Negative number");
}

else {
	console.log("Number is Zero");
}