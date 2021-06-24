function test(f){
    let result=f(3,4);
    console.log(result);
}

test(function multiple(a,b) {
    return a*b;
})
