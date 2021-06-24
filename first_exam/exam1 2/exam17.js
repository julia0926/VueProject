function even(a) {
    for(let i=0;i<a.length;i++){
        if(a[i]%2!=0){
            a.splice(i,1);
            i--;
        }
    }
    let b = a.slice(0);
    return b;
}

let a = [1, 2, 3, 3, 4, 5, 5, 5, 6];
console.log(even(a));
