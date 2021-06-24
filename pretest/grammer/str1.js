let a="When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be."
let arr=[]
for(let i=0;i<a.length;i++){
    if(a[i].match(/[aeiou]/i)) arr.push(i)
}
console.log(a.replace(" ",""))
