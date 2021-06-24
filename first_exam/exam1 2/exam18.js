function path(s, index) {
    for(let i=0;i<s.length;i++){
        let num=s[i].indexOf("/");
        index=s[i].slice(num+1);
    }
    

}

let s = "c:/pj/frontend/chap05/substring1.js";
for (let index = 0; index <= 4; ++index)
    console.log(path(s, index));
