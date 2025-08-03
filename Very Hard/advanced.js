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
        super(name,job,age); // Calls the parents constructor
        this.languages = languages;
        this.busy = true; //Defaults to busy
    }
    //complete task method
    completeTask(){
        this.busy = false; //Updates the busy property
    }
    acceptNewTask(){
        this.busy = true;
    }
    offerNewTask(){
        if(this.busy){
            console.log(`${this.name} can't accept any new tasks right now.`);
        }else{
            console.log(`${this.name} would love to take on a new responsibility.`);
        }
    }
    learnLanguage(language){
        this.languages.push(language)
    }
    listLanguages(){
        console.log(`${this.name} knows the following coding languages: ${this.languages.join(', ')}`);
        return this.languages;
    }
}

//Person Instances
const person1 = new Person("Harold", "Backend Engineer", 20);

//Programmer Instances
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "Janitor", 55, ["HTML", "SASS”, ”Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31, [("HTML", "CSS", "JS", "R")]);

//testing instances w/o parenthesis to see what will display in the console log.
const c4 = new Programmer("Latori", "Programming Instructor", 31, ["HTML", "CSS", "JS", "R"]);

// Person Method Test
person1.exercise();
person1.fetchJob();

//inherited from person method
c4.fetchJob();

//Adds The following Langauges to the array in Programmer Instances
c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");

//Programmer 1 instance test. Should Change Programmer's "this.busy from true to false."
//console.log(c1.busy);
c1.offerNewTask();
c1.completeTask();
//console.log(c1.busy);
c1.offerNewTask();
c1.acceptNewTask();
//console.log(c1.busy);

//lists programmers that are busy based on default condition.
c2.offerNewTask();
c3.offerNewTask();
c4.offerNewTask();


console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);
console.log(c4);

//Lists Arrays in Console Log & Console Log output
console.log(c1.listLanguages());
console.log(c2.listLanguages());
console.log(c3.listLanguages());
console.log(c4.listLanguages());
//person1.listLanguages();