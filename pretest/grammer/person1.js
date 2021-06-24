class Person {
    constructor(s, i) {
      this.name = s;
      this.age = i;
    } 
    info(){
        return this.name+this.age
    }
  }
  
  let person = new Person("홍길동", 16);
  console.log(person.info());
  
  