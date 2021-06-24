let cat={name:"미야옹",age:24,sex:"Y"}
for(let key in cat){
    let value=cat[key]
    console.log("%s : %s",key,value)
}
delete cat.name
console.log(cat)