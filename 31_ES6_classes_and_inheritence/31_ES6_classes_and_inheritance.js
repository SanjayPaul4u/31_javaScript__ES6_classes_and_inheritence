console.log("This tutorial is for ES6 classes and for inheritance.");
//ES6 classes📌📌📌
class Employee{
    constructor(givenName, givenExperience, givenDivision){
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }
    slogan(){//proto type
        return `I am ${this.name}, and my company is the best.`
    }
    joiningYear(){//proto type
        return 2022 - this.experience;
    }
    static add(a, b){//proto type
        return a + b;
    }
}

let sanjay = new Employee("Sanjay", 5, "nothing");
// console.log(sanjay);
// console.log(sanjay.slogan());
// console.log(sanjay.joiningYear());
// console.log(Employee.add(5,25));//Static method.


//INHERITENCE📌📌📌
class Programmer extends Employee{
    constructor (givenName, givenExperience, givenDivision, gLanguage, gGithub){
        super(givenName, givenExperience, givenDivision);
        this.language = gLanguage;
        this.github = gGithub;
    }
    favoriteLanguage(){//proto type
        if(this.language === "python"){
            return `python`;
        }
        else{
            return `javaScript`
        }
    }
    static multuply(a, b){//proto type
        return a * b;
    }
}

let rohan = new Programmer("rohan das", 100, "good", "C++", "rohan420");
console.log(rohan);
// console.log(rohan.slogan());
// console.log(rohan.joiningYear());
console.log(rohan.favoriteLanguage());
console.log(Programmer.multuply(10, 10));