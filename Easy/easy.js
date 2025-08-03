//Nia Manning
//8-3-2025
//General Inquiry Week 8

function exerciseOfTheDay(){
    let exercise = " "; //empty string
    function newExercise(exerciseName){
        exercise = exerciseName;
        console.log(`Today's exercise: ${exercise}`);
    }
    return newExercise;
}
const setExercise = exerciseOfTheDay();
setExercise("Running");
setExercise("Swimming");
setExercise("Dancing");
setExercise("Fencing");

//testing for Weekdays 4-7
setExercise("Yoga");
setExercise("Roller Skating");
setExercise("Softball");