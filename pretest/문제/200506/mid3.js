let a1=[]
for(let i=0;i<3;i++){
    for(let j=0;j<2;j++){
        a1[i]=[i*2,i*2+1]
    }
}
let a2=[]
for(let i=0;i<3;i++){
    a2[i]=a1[i].slice(0)
}
a1[0][0] = 100
console.log(a1)
console.log(a2)