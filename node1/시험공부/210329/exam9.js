function createArray(count) {
    let arr=[]
    for(let i=0;i<count;i++){
        arr.push(i*2+1) //0부터 더해서 2+1=3 , 4+1=5
    }
    return arr
}

console.log(createArray(4));
console.log(createArray(5));
console.log(createArray(6));
