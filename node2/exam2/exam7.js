function concat7(...a) {
    let result=""
    for(let i=0;i<a.length;i++){
        result+=a[i]
    }
    return result

}
console.log(concat7("a", "b", "c", "d"));
console.log(concat7("e", "f", "g"));
console.log(concat7("h", "i"));
