let counterElement = document.getElementById('counter')
let counter = 0
let likeCounter = 1
const newLikeElement =document.createElement('h2')
const commentList =document.querySelector('#list')
const keptCounterValues =[]

document.querySelector('#minus').addEventListener('click', minusOne)
document.querySelector('#plus').addEventListener('click', plusOne)
document.querySelector('#heart').addEventListener('click', like)
document.querySelector('#pause').addEventListener('click', pause)

const myCounter = setInterval(countUp, 1000)


function countUp(){
    counterElement.innerText = counter++
    }

function minusOne(){
    counterElement.innerText = counter--
    }

function plusOne(){
    counterElement.innerText = counter++
    }

function like(){
    newLikeElement.textContent = counter
    const rawInteger = parseInt(newLikeElement.textContent)

    if (keptCounterValues.includes(rawInteger)){
        commentList.innerHTML +=`${newLikeElement.textContent} has been liked ${likeCounter + 1} time(s)`

    }else {
        keptCounterValues.push(rawInteger)
        commentList.innerHTML +=`${newLikeElement.textContent} has been liked ${likeCounter} time(s)<br>`
    }
   }

function pause(){


}

