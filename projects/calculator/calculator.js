let numbers = document.querySelectorAll(".number")
let history=document.querySelector(".history")
console.log(numbers)
for(var i=0; i<numbers.length;i++){
numbers[i].addEventListener("click",function(){
console.log(this.id)
history.innerText += this.id+""})
}
////Getting operators
let operators = document.querySelectorAll(".operators")
let results=document.querySelector(".result")
console.log(operators)
for(var i=0; i<operators.length;i++){
operators[i].addEventListener("click",function(){
console.log(this.id)
history.innerText += this.id})}
function getHistory(){
return document.querySelector(".history").innerText
}
let fres = document.querySelector(".res")
let result = document.querySelector(".result")
fres.addEventListener("click",function(){
result.textContent =eval(history.innerText)
})
//clear the history and result
let clear = document.querySelector(".clear")
clear.addEventListener("click",function(){
history.textContent=""
results.textContent=""
})
//// providing backspace means deleteing last element from ana array
let backspace = document.querySelector(".ce")
backspace.addEventListener("click",function(){
//let history=document.querySelector(".history")
let str = history.textContent
str.toString()
//console.log(str)
str.substr(str.length-1)})
// let btn1 = document.querySelector(".btn1")
// let result = document.querySelector(".result")
// btn1.addEventListener("click",()=>{
// result.textContent +=1+""
// })
// let btn2 = document.querySelector(".btn2")
// btn2.addEventListener("click",()=>{
//     result.textContent +=2+""
 //     })
//     let add = document.querySelector(".add")
//     add.addEventListener("click",()=>{
//         result.textContent += "+"
//       })
//        let equall = document.querySelector(".equall")
//       equall.addEventListener("click",()=>{
//         let btnText= document.querySelectorAll("button")
//         console.log(btnText[0].innerText)
//        })

     




