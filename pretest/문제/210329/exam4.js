function sum(a) {
    let num=0
    for(let i=0;i<a.length;i++){
        num+=a[i]
    }
    return num
}
console.log(sum([1, 2, 3, 4]))
console.log(sum([3, 4, 5]))
console.log(sum([20, 21]))
