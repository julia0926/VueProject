function getExtension(fileName){
    let i=fileName.indexOf(".")
    return fileName.slice(-i)

}
let a = [ "hello.html", "world.js", "readme.txt" ]
for(let i=0;i<a.length;i++){
    console.log(getExtension(a[i]))
}
