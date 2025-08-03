//Nia Manning
//8-3-2025
//General Inquiry Week 8


function createPii(name, ssn) {
  // Private variables, accessible only within the closure
  pii = {
    name: name,
    ssn: ssn
  };
  // Public function to access the name & ssn
  return {
    getName: function() {
      return pii.name;
    } , 

    getSSN: function(){
      return pii.ssn;
    }
  };
}
// Create an instance of the pii object
const patient2 = createPii("John Clark", "123-45-6789");
console.log(patient2.name); //output: undefined
console.log(patient2.ssn); // output: undefined
console.log(patient2.getName()); // output: name
console.log(patient2.getSSN());  // output: ssn
//console.log(patient2.pii.ssn); // Output: Error: Cannot read properties of undefined (reading 'ssn')