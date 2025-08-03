//Nia Manning
//8-3-2025
//General Inquiry Week 8


function sharePizza(slices, people){
    //edge case
    if (people <= 0){
        alert("Number of people must be greater than zero.");
    }else {
        const slicesPerPerson = slices / people;
        return `Each person gets ${slicesPerPerson.toFixed(2)} slices of pizza; from our ${slices} slice pizza.`
    }

}
console.log(sharePizza(8,2));
console.log(sharePizza(8,3));
console.log(sharePizza(21,20));
console.log(sharePizza(10,3));