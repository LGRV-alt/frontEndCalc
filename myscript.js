const numButton = document.querySelectorAll(".num")
const opButton = document.querySelectorAll(".op")
const display = document.querySelector(".totalScreen")
const clearButton = document.querySelector(".clearButton")
const removeButton = document.querySelector(".removeButton")

let runningTotal = ""
let opState = ""
let prevNumber = ""

numButton.forEach((number)=>{
    number.addEventListener("click", ()=>{
        let num = number.innerHTML;
        runningTotal += num;
        display.innerHTML = runningTotal;        
    });
});

opButton.forEach((operator)=>{
    operator.addEventListener("click", ()=>{
        display.innerHTML = prevNumber;
        display.innerHTML = ""
        runningTotal = ""
        display.innerHTML = operator.innerHTML;
    }); 
});

clearButton.addEventListener("click", ()=>{
    console.log("Clear")
});

removeButton.addEventListener("click", ()=>{
    console.log("Remove")
})






