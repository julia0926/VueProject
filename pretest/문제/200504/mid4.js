function sum(arr){
    let num=0
    for(let i=0;i<arr.length;i++){
        num+=arr[i]
    }
    return num
}

function test_sum(f){
    let arr=[]
    for(let i=0;i<5;i++){
        arr.push(Math.floor(Math.random()*10))
    }
    console.log(f(arr))
}

for(let i=0;i<5;i++){
    test_sum(sum)
}