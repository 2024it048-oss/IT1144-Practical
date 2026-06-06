const fruits=["apple","banana","cherry"];
console.log("using array Elements")
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log();

console.log("using for loop..")
for(let key in fruits)
{console.log(fruits[key]);}
console.log();



console.log("modifying elements..")
fruits[1]="grapes";
console.log(fruits[1]);
console.log();


console.log("print using for loop")
let friends =["Akash","Yasuri","Sanugi","Nimani","Pasindu","Shehan","Kaveen","Sachintha","Akaesha","Himasha"];
for (let key in friends)
{
	console.log(friends[key]);
}
console.log();

friends[2]="Mithu";
console.log("After modification: ");

for(let key in friends){
	console.log(friends[key]);
}
console.log();
console.log("add another friend using push command: ");
friends.push("Abhiman");
for(let key in friends){
	console.log(friends[key]);
}console.log();

console.log("removing 'last element'by  using pop command: ");
friends.pop();
console.log("after removing: ")
for(let key in friends){
	console.log(friends[key]);
}console.log();