let a=[]
for(let i=0;i<100;i++){
    a[i]=String(Math.floor(Math.random()*100)+1)  
}
a.sort((p1,p2)=>p1.localeCompare(p2))
console.log(a)