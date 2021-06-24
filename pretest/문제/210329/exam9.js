function createArray(count) {
    let arr=[]
    for(let i=0;i<count;i++){
        arr.push(i*2+1)
    }
    return arr
}

console.log(createArray(4));
console.log(createArray(5));
console.log(createArray(6));
