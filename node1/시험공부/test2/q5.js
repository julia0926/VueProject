let a = ["c:/temp/guide.hwp",
         "c:/pj/frontend/chap05/substring1.js",
         "homework.docx"];

for(let i=0;i<a.length;i++){
    let num2=a[i].indexOf(".");
    let num=a[i].lastIndexOf("/");
    console.log(a[i].slice(num+1,num2));
}