function contains(a, value) {
    for(let i=0;i<a.length;i++){
        if(a[i]===value) return true;
    }
    return false //계산 다해봤는데 없으면..
}

let a = [1, 3, 5, 6];
console.log(contains(a, 3));
console.log(contains(a, 4));
console.log(contains(a, "3"));
