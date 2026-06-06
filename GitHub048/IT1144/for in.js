const student ={
	name:"John",
	age:20,
	grade:"A"
};

for(let key in student){
	console.log(key+":",student[key]);
}