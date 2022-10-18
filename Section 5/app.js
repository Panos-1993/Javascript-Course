// Person constructor

function Person(name, dob) {
    this.name = name;
    // this.age = age;
    //console.log(this);
    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

// const person1 = new Person('Brad', 36);
// const person2 = new Person('John', 30);
// console.log(person1, person2);
// console.log(person1.age);

const brad = new Person('Brad', '9-10-1981');
console.log(brad.calculateAge());