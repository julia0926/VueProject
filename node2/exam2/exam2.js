function space2(s){
    let i=s.indexOf(" ")
    return s.indexOf(" ",i+1)
}

console.log(space2("a b c d"));
console.log(space2("one two three four"));
