const white_Keys=["a","s","d","f","g","h","j"]
const black_Keys=["e","r","t","y","u"]

const whiteNote=document.querySelectorAll(".whiteKeys")
const blackNote=document.querySelectorAll(".blackKeys")

document.addEventListener("keydown",(e)=>{
    if(e.repeat) return
    const key=e.key
    const whiteIndex=white_Keys.indexOf(key)
    const blackIndex=black_Keys.indexOf(key)
    if(whiteIndex>-1) audioPlay(whiteNote[whiteIndex])
    if(blackIndex>-1) audioPlay(blackNote[blackIndex])
})

const noteArray=document.querySelectorAll(".keys")


noteArray.forEach(element=>{
    element.addEventListener("click",()=>{
        audioPlay(element)
    })
})

function audioPlay(key){
    const note=document.getElementById(key.dataset.notes)
    note.currentTime=0
    note.play()
    key.classList.add("active")
    note.addEventListener("ended",()=>{
        key.classList.remove("active")
    })
}