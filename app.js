// FIZZ BUZZ GAME

// function fizzBuzz() {
//     let output = []
//     let count = 1
//     for (count = 1; count <= 100; count++) {

//         if (count % 3 === 0 && count % 5 === 0) {
//             output.push("FizzBuzz")
//         } else if (count % 3 === 0) {
//             output.push("Fizz")
//         } else if (count % 5 === 0) {
//             output.push("Buzz")
//         } else {
//             output.push(count)
//         }
//     }
//     console.log(output)
// }
// fizzBuzz()



// BACKWORD COUNTING CHALLENGE

// for (var numberOfBottles = 99; numberOfBottles >= 1; numberOfBottles--) {
//     var bottleWord = "bottles";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottle";
//     }
//     console.log(numberOfBottles + " " + bottleWord + " of milk on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of milk,");
//     console.log("Take one down, pass it around,");
// }
// if (numberOfBottles >= 0) {
//     console.log("No more bottle of milk on the wall , No more bottle of milk");
//     console.log("Go back to store and buy 99 bottles of milk")
// }



// FIBONACCI CHALLENGE
function fibonacciGenerator(n) {
    let output = []
    if (n === 1) {
        output = [0];
    } else if (n === 2) {
        output = [0, 1];
    } else {
        output = [0, 1];
        for (let i = 2; i < n; i++) {
            output.push(output[output.length - 2] + output[output.length - 1])
        }
    }
    return console.log(output)
}
fibonacciGenerator(prompt("write any number"));