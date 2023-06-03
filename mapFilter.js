//MAP 

let names = ["Phani","Phani", "Phani", "Hrushik", "Reddy", "phani"]

let names2 = names.map((name)=> {
    return name + "1";
})
//MAP FUNCTION CREATES A NEW ARRAY

names2.forEach((name)=>{
    console.log(name)
})

//Filter
console.log("filter starts here")
names3 = names.filter((name)=>{
    return name !=="Phani"

})
//removes all the instances of "Phani" from the list but wont remove "phani"

names3.forEach((name)=>{
    console.log(name)
})