// first we create our object
// what is an object? https://www.w3schools.com/js/js_objects.asp
let exampleObject = {
    id: 1,
    name: "Perla"
}
// this line of code will log what's in the object we just created to the console
console.log(exampleObject);
// same as line 7, but formatted in a sentence
console.log("My name is: ", exampleObject.name);

// now we create our first function
// what is a function? https://www.w3schools.com/js/js_functions.asp
function doSomething() {
    let functionVar = 10;
    for(let i=0; i<10; i++){
        console.log(i);
    }
}
// this line of code is responsible for running the function we just wrote
doSomething();