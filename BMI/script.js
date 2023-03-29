//getting hold of all the elements from html
//grabs the elment not the value
const height = document.getElementById("height")
const weight = document.getElementById("weight")

const calculate = document.getElementById("cal-btn")
const clear = document.getElementById("clr-btn")
const showBmi = document.getElementById("bmi-el")

//bmi calculation function
function calBmi(w,h){
    if(w>=0 && h >=0){
        let bmi = w/(h*h)
    showBmi.innerHTML = "BMI: <br>"+ +bmi.toFixed(2) 
    }
    else{
        alert("Invalid Number")
    }
}

//button for calculation
calculate.addEventListener("click", function(){
    calBmi(weight.value,height.value)
})

//button to clear
clear.addEventListener("click", function(){
    console.log("button clicked")
    height.value=""
    weight.value=""
    showBmi.innerHTML=""
})

