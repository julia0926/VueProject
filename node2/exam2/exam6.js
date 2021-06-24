function word6(s, index) {
    return s.split(", ")[index] //부호로 자른 배열의 index의 단어를 리턴한다.
}

let s = "zero, one, two, three";
console.log("[" + word6(s, 0) + "]");
console.log("[" + word6(s, 1) + "]");
console.log("[" + word6(s, 2) + "]");
console.log("[" + word6(s, 3) + "]");
