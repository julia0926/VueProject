function remove(a, value) {
    let num=a.indexOf(value);
    let num2=a.lastIndexOf(value);
    let arr=a.splice(num,1);
    arr=a.splice(num2-1,1);
    return arr;
}

let a = [1, 3, 5, 5, 3, 6];

remove(a, 3);
console.log(a);

remove(a, 5);
console.log(a);
