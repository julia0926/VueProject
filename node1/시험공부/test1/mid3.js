let persons1=[];
for(let i=0;i<3;i++){
    persons1[i]={name:"홍길동",age:16+i};
}
persons1[0].age = 20;
let persons2=persons1;
console.log(persons1);
console.log(persons2);