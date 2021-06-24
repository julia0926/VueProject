let a = ["c:/temp/guide.hwp",
         "c:/pj/frontend/chap05/substring1.js",
         "homework.docx"];
for(let i=0;i<a.length;i++){
    let num=a[i].indexOf(".");
    let num2=a[i].lastIndexOf("/");
    console.log(a[i].slice(num2+1,num));
}

