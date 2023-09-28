const numButton = document.querySelectorAll(".num")
const opButton = document.querySelectorAll(".op")
const display = document.querySelector(".totalScreen")
const clearButton = document.querySelector(".clearButton")
const removeButton = document.querySelector(".removeButton")

let runningTotal = ""
let opState = ""
let prevNumber = ""

function linkDisplay(){
    display.innerHTML = runningTotal;
}


function clearAll(){
    runningTotal = "";
    linkDisplay();
}

function removeDigit(){
    runningTotal = runningTotal.slice(0,-1);
    linkDisplay();
}

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
    clearAll();
});

removeButton.addEventListener("click", ()=>{
    console.log("Remove")
    removeDigit();
})







