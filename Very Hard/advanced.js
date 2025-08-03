//Nia Manning
//8-3-2025
//General Inquiry Week 8

class Person{
    constructor(name, job, age){
        this.name = name;
        this.job = job;
        this.age = age;
    }
    exercise(){
        console.log("Running is fun!")
    };
    fetchJob(){
        console.log(`${this.name} is a ${this.job}`)
    };
}

class Programmer extends Person{ 
    constructor(name, job, age, languages){
        super(name,job,age);
        this.languages = languages;
        this.busy = true;
    }
    //complete task method
    completeTask(){
        this.busy = false;
    }
    acceptNewTask(){
        this.busy = true;
    }
    offerNewTask(){
        if(this.busy){
            console.log(`${this.name}  can't accept any new tasks right now."`)
        }else{
            console.log(`${this.name} would love to take on a new responsibility.`)
        }
    }
    learnLanguage(language){
        this.languages.push(language)
    }
    listLanguages(){
        return this.languages;
    }
}

const person1 = new Person("Harold", "Backend Engineer", 20);
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS”, ”Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31,[("HTML", "CSS", "JS", "R")]);
c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");
console.log(c1.listLanguages());
console.log(c2.listLanguages());
console.log(c3.listLanguages());
console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);
person1.exercise();
person1.fetchJob();
//person1.listLanguages();