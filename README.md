# JSWeek3
# July 30th, 2025

JS Prompt.

#Easy: 
- A local gym wants to implement an "exercise of the day" program where there is a free class for that day that promotes a certain exercise. 
- The gym needs some backend logic to update its system to reflect which exercise will be promoted that day. 

- Write a function that will take as an input the name of an exercise and console log a message like Today's exercise: running

- Write one function that can dynamically print the value of the exercise for that day, and it must be closure.


#Medium: 
- Write a function that will allow you to calculate how many slices of pizza x each person y would get if they shared evenly. 
- The function should return an interpolated string like Each person gets 4.00 slices of pizza; from our 8-slice pizza x being a decimal in case there is no way to split the pizza evenly.


#Hard:
- Inside a closure, create an object called PII (Personally Identifiable Information)that cannot be accessed directly. The object should have at least two properties: name and SSN. Only the name property should be accessible, and it should be called through a public function. The SSN property should not be accessible at all. 
- Creating private objects and private properties helps you control who has access to what data and helps you prevent people who shouldn't see important info like social security numbers from getting access to the data. 
- You can use 'getName' or other get methods to access data that people might need. For example, people addressing a package or email may need a customer's name, but they definitely shouldn't have access to their SSN.


#Very Hard:
- Object prototype chain and prototypal inheritance exercise.
- Create a Person constructor that has three properties: name, job, and age.
- Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
- Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a back-end developer".
- Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.
- Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also, give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
- Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g., should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
- Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.
- Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers? 

- Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add new methods or properties to incorporate the syntax.
# JS-Week3
