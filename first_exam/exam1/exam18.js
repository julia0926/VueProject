function path(s, index) {
    for(let i=0;i<s.length;i++){
        let a=s.split("/");
        return a[index];
    }
    

}

let s = "c:/pj/frontend/chap05/substring1.js";
for (let index = 0; index <= 4; ++index)
    console.log(path(s, index));
