const numButton = document.querySelectorAll(".num")
const opButton = document.querySelectorAll(".op")
const display = document.querySelector(".totalScreen")
const clearButton = document.querySelector(".clearButton")
const removeButton = document.querySelector(".removeButton")
const equalsButton = document.querySelector(".equalsButton")

let runningTotal = ""
let opState = ""
let prevNumber = ""


const cal = {
    add(a,b){
        return a+b
    },
    sub(a,b){
        return a-b
    },
    mul(a,b){
        return a*b
    },
    div(a,b){
        return a/b
    },
};

function logValues(){
    console.log(prevNumber, runningTotal, opState);
}

function linkDisplay(){
    display.innerHTML = runningTotal;
};

function clearAll(){
    runningTotal = "";
    linkDisplay();
};

function removeDigit(){
    runningTotal = runningTotal.slice(0,-1);
    linkDisplay();
};

function numInput(number){
    let num = number.innerHTML;
    runningTotal += num;
    linkDisplay();
    logValues();
};

function opInput(operator){
    if(opState === ""){
        prevNumber = runningTotal;
        display.innerHTML = "";
        runningTotal = ""
        display.innerHTML = operator.innerHTML;
        opState = operator.innerHTML;
    } else{
        display.innerHTML = operator.innerHTML;
        opState = operator.innerHTML;
    };
    logValues();
};

function calculateTotal(num1, num2, operator){
    let total
    if(num1 !="" && num2 !=""){
        newNum1 = parseFloat(num1);
        newNum2 = parseFloat(num2);

        switch(operator){
            case "+":
                total = cal.add(newNum1, newNum2);
                break;

            case "-":
                total = cal.sub(newNum1, newNum2);
                break;

            case "/":
                total = cal.div(newNum1, newNum2);
                break;

            case "*":                   
                total = cal.mul(newNum1, newNum2);
                break;
        }
        return total;
    }    
};

numButton.forEach((number)=>{
    number.addEventListener("click", ()=>{
        numInput(number);      
    });
});

opButton.forEach((operator)=>{
    operator.addEventListener("click", ()=>{
        opInput(operator);
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

equalsButton.addEventListener("click", ()=>{
    runningTotal = calculateTotal(prevNumber, runningTotal, opState);
    linkDisplay();
    prevNumber = ""
    opState =""


})







