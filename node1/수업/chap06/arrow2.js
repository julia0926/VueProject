function test(f){
    let result=f(3,4);
    console.log(result);
}

//let add = (a,b) => a+b;
let multiple = (a,b) => a*b;

test((a,b) => a+b);
console.log(multiple(4,5));