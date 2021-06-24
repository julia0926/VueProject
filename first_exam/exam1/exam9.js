function createArray(count) {
    let a=[];
    let odd=1;
    for(let i=0;i<count;i++){
        a[i]=odd+(2*i);
    }
    return a;
}

console.log(createArray(4));
console.log(createArray(5));
console.log(createArray(6));
