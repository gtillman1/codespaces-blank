console.log("hello");

let input1 = document.querySelector(".Character");
console.log(input1);
let input2 = document.querySelector(".better");
let button = document.querySelector("button");
let results = document.querySelector(".results")              

button.addEventListener("click", function() {
console.log("button check");

let answer1 = input1.value;
console.log(answer1);
let answer2 = input2.value;
console.log(answer2);


if (answer1 === "Franklin" && answer2 === "Atlanta") {
    console.log("what");
    results.innerHTML = "you are laidback but have goals";
} else if (answer1 === "Franklin" && answer2 === "Snowfall") {console.log("Who");results.innerHTML = "you like money";}


if (answer1 === "Earnest" && answer2 === "Snowfall") {
    console.log("When");
    results.innerHTML = "You are open minded";
} else if (answer1 === "Earnest" && answer2 === "Atlanta") {console.log("Where");results.innerHTML = "you are calm";}
















});