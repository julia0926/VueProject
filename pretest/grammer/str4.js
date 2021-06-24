let a = ["c:/temp/guide.hwp",
         "c:/pj/frontend/chap05/substring1.js",
         "homework.docx"]

for(let i=0;i<a.length;i++){
    let index=a[i].lastIndexOf(".")
    console.log(a[i].slice(index))
}


for(let i=0;i<a.length;i++){
    let index=a[i].lastIndexOf("/")+1
    console.log(a[i].slice(index))
}

for(let i=0;i<a.length;i++){
    let index=a[i].lastIndexOf("/")+1
    let index2=a[i].indexOf(".")
    console.log(a[i].slice(index,index2))
}
