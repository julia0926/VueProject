let s="When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be.";

let answer=[];
for(let i=0;i<s.length;i++){
    if(s[i].match(/[aeiou]/i)){
        answer.push(i);
    }
}
console.log(answer);