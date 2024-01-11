
let randomHit
let timeElem = document.querySelector('.timeValue')
let contElem = document.querySelector('.lowerContainer')
let scoreElem=document.querySelector('.scoreValue')
let hitElem = document.querySelector('.hitValue')
let clutter = ``
let score = 0



bubbleFunc()
timeFunc()
bubbleGenerator()
generateHit()

function generateHit() {
    randomHit = Math.floor(Math.random() * 10)
    hitElem.innerText = randomHit
}
function timeFunc() {
    let time = 60
    

    let timer = setInterval(() => {
        if (time > 0) {
            timeElem.innerText = time
            time--
        }
        else{
            console.log('i am cleared');
            clutter=`<h1>Game Over</h1>`
            
            timeElem.innerText='0'
            hitElem.innerText='0'
            contElem.style.display='flex'
            contElem.style.justifyContent='center'
            contElem.innerHTML=clutter

        }

    }, 1000);
   


}
function bubbleGenerator() {
    clutter = ``
    for (let i = 0; i < 144; i++) {
        let ranInt = Math.floor(Math.random() * 10)
        clutter += `<div class="icon"><span class="text">${ranInt}</span></div>`
    }
    contElem.innerHTML = clutter

}
function scoreGen() {
    score+= 10
    scoreElem.innerText=score

}
function bubbleFunc() {
    
    contElem.addEventListener('click', function (dets) {
        let innerNum = Number(dets.target.innerText)
        if (innerNum == randomHit) {
            scoreGen()
            generateHit()
            bubbleGenerator()
        }
    })
}

