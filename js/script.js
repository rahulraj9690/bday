function startCelebration(){

document.getElementById("music").play()

startPetals()

startFireworks()

startBubbles()

}



function startPetals(){

const canvas=document.getElementById("petalCanvas")
const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

const petals=[]
const images=[
"assets/petals/petal1.png",
"assets/petals/petal2.png",
"assets/petals/petal3.png"
]

for(let i=0;i<40;i++){

let img=new Image()
img.src=images[Math.floor(Math.random()*images.length)]

petals.push({
x:Math.random()*canvas.width,
y:Math.random()*-canvas.height,
speed:1+Math.random()*2,
rotation:Math.random()*360,
img:img
})

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height)

petals.forEach(p=>{

p.y+=p.speed
p.rotation+=1

ctx.save()
ctx.translate(p.x,p.y)
ctx.rotate(p.rotation*Math.PI/180)
ctx.drawImage(p.img,-15,-15,30,30)
ctx.restore()

})

requestAnimationFrame(animate)

}

animate()

}



function startBubbles(){

for(let i=0;i<25;i++){

let bubble=document.createElement("div")

bubble.className="bubble"

let size=20+Math.random()*40

bubble.style.width=size+"px"
bubble.style.height=size+"px"

bubble.style.left=Math.random()*100+"vw"

bubble.style.bottom="-50px"

bubble.style.animationDuration=(4+Math.random()*3)+"s"

document.body.appendChild(bubble)

setTimeout(()=>{
bubble.remove()
},7000)

}

}



function startFireworks(){

const canvas=document.getElementById("fireworksCanvas")
const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

function explode(x,y){

for(let i=0;i<50;i++){

let angle=Math.random()*Math.PI*2
let speed=Math.random()*5

let particle={
x:x,
y:y,
vx:Math.cos(angle)*speed,
vy:Math.sin(angle)*speed,
life:100
}

particles.push(particle)

}

}

let particles=[]

function animate(){

ctx.fillStyle="rgba(0,0,0,0.1)"
ctx.fillRect(0,0,canvas.width,canvas.height)

particles.forEach(p=>{

p.x+=p.vx
p.y+=p.vy
p.life--

ctx.fillStyle="hsl("+Math.random()*360+",100%,50%)"

ctx.fillRect(p.x,p.y,3,3)

})

particles=particles.filter(p=>p.life>0)

requestAnimationFrame(animate)

}

setInterval(()=>{
explode(Math.random()*canvas.width,Math.random()*canvas.height/2)
},800)

animate()

}

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("click",()=>{

let overlay=document.createElement("div")

overlay.style.position="fixed"
overlay.style.top="0"
overlay.style.left="0"
overlay.style.width="100%"
overlay.style.height="100%"
overlay.style.background="rgba(0,0,0,0.9)"
overlay.style.display="flex"
overlay.style.alignItems="center"
overlay.style.justifyContent="center"

let full=document.createElement("img")

full.src=img.src
full.style.maxWidth="90%"
full.style.maxHeight="90%"
full.style.borderRadius="20px"

overlay.appendChild(full)

overlay.onclick=()=>{
overlay.remove()
}

document.body.appendChild(overlay)

})

})

function openMessage(){

let box = document.getElementById("surpriseBox");

box.style.display = "block";

}