function confetti(){

for(let i=0;i<100;i++){

let conf=document.createElement("div")

conf.style.position="fixed"
conf.style.width="10px"
conf.style.height="10px"
conf.style.background="hsl("+Math.random()*360+"deg,100%,50%)"
conf.style.left=Math.random()*100+"vw"
conf.style.top="-10px"

document.body.appendChild(conf)

let fall=setInterval(()=>{
conf.style.top=parseInt(conf.style.top)+5+"px"

if(parseInt(conf.style.top)>window.innerHeight){
clearInterval(fall)
conf.remove()
}

},20)

}

}