function doSomething(s, index) {
    let arr=s.split(",")
    arr.splice(index,1)
    return arr.toString()
}

let s = "zero,one,two,three";
console.log(doSomething(s, 0));
console.log(doSomething(s, 1));
console.log(doSomething(s, 2));
console.log(doSomething(s, 3));
