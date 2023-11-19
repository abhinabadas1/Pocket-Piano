const keyArray=document.querySelectorAll("[data-notes]")
const audioArray=document.querySelectorAll("[data-audio]")

for(let i=0;i<12;i++){
    keyArray[i].addEventListener("click",()=>{
        audioArray[i].currentTime=0
        audioArray[i].play()
    })
}