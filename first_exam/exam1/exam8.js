function remove(a, index) {
    let arr=a.splice(index,1);
    return arr;
}

let a = [0, 1, 2, 3];
remove(a, 2);
console.log(a);

remove(a, 1);
console.log(a);
