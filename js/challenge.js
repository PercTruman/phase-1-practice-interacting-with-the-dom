
let counterElement = document.getElementById('counter')
let counter = 0
let likeCounter = 1
const newLikeElement =document.createElement('h2')
const commentList =document.querySelector('#list')
const keptCounterValues =[]
let myCounter = setInterval(countUp, 1000)



    document.querySelector('#minus').addEventListener('click', minusOne)
    document.querySelector('#plus').addEventListener('click', plusOne)
    document.querySelector('#heart').addEventListener('click', like)
    document.querySelector('#pause').addEventListener('click', pauseAndResume)
    document.querySelector('form').addEventListener('submit', (e)=>{
        e.preventDefault()
        addComment(e.target.comment_input.value)
    })
    


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
        commentList.innerHTML +=`${newLikeElement.textContent} has been liked ${likeCounter+1} time(s)<br>`
        likeCounter+=1
    }else {
        likeCounter=1
        keptCounterValues.push(rawInteger)
        commentList.innerHTML +=`${newLikeElement.textContent} has been liked ${likeCounter} time(s)<br>`
        }
    
   }

function pauseAndResume(){
    
    if (document.querySelector('#pause').textContent === 'pause'){
        clearInterval(myCounter)
        document.querySelector('#pause').textContent = 'resume'
        disableButtons()
    }else{
        myCounter = setInterval(countUp, 1000)
        document.querySelector('#pause').textContent = 'pause'
        document.querySelector('#minus').addEventListener('click', minusOne)
        document.querySelector('#plus').addEventListener('click', plusOne)
        document.querySelector('#heart').addEventListener('click', like)
    }
}

function disableButtons(){
    document.querySelector('#minus').removeEventListener('click', minusOne)
    document.querySelector('#plus').removeEventListener('click', plusOne)
    document.querySelector('#heart').removeEventListener('click', like)
}

function addComment(comment){
    const newElement = document.createElement('p')
    newElement.textContent = comment
    document.getElementById('list').appendChild(newElement)
    // console.log(newElement.textContent)
    
}
    




