// Define a function that accepts an object parameter with specific property types
function printPersonAge(person) {
    console.log(person.name + " " + person.familyName + " is " + person.age + " years old");
}
// Example usage of the function with an object argument
var person = {
    name: "John",
    familyName: "Doe",
    age: 30,
    isMarried: false
};
// Call the function with the 'person' object
printPersonAge(person); // Output: "John Doe is 30 years old"
