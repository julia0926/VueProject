function createArray(){
    let a=[[1,2,3],[1,2,3],[1,2,3]]
    return a
}

let a = createArray();
console.log(a);

a[0][0] = 10;
console.log(a);
