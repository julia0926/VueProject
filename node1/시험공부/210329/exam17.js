function even(a) {
    let a2=[]
    for(let i=0;i<a.length;i++){
        if(a[i]%2==0){
            a2.push(a[i])
        }
    }
    return a2
}


let a = [1, 2, 3, 3, 4, 5, 5, 5, 6];
console.log(even(a));
