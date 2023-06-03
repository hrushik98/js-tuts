const person = {
    name: "Phani",
    age: 20,
    isMarried: false,

}

//how to call the elements inside of an object?
console.log(person.name)
console.log(person.age)
console.log(person.isMarried)

//another easier method is

const {name, age, isMarried} = person 
console.log(name)
console.log(age)
console.log(isMarried)


////////////////////
//using "spread syntax" in js

person2 = {...person, name:"Rajesh"}

console.log(person2.name)

/// can also use spread syntax to add a new element in an array
names = ["Phani", "Rahul", "Rajesh"]
names2 = [...names, "Joel"]
for (i in names2){
    console.log(names2[i])
}
//or you can also use forEach


// *****
names2.forEach((name) =>{
    console.log(name)
} )

//done!
