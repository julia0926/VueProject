function doSomething(s, index) {
    let a=s.split(",")
    a.splice(index,1)
    return a.toString()

}

let s = "zero,one,two,three";
console.log(doSomething(s, 0));
console.log(doSomething(s, 1));
console.log(doSomething(s, 2));
console.log(doSomething(s, 3));

/*

one,two,three
zero,two,three
zero,one,three
zero,one,two*/
