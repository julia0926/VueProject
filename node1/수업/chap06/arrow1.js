function test(f){
    let result=f(3,4);
    console.log(result);
}

test((a,b) => {
    return a*b;
});