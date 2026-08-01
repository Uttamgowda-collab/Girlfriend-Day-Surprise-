// ===== Elements =====

const startBtn = document.getElementById("startBtn");
const envelope = document.getElementById("envelope");

const letterPaper = document.getElementById("letterPaper");
const typingText = document.getElementById("typingText");

const signature = document.getElementById("signature");

const continueBtn = document.getElementById("continueBtn");

const music = document.getElementById("music");

// ===== Love Letter =====

const message = `My Lovely Gowthami ❤️

Happy Girlfriend's Day, my love.

I may not always find the perfect words,
but every beat of my heart reminds me
how lucky I am to have you.

Your smile brightens my darkest days.

Your laughter is my favourite melody.

Thank you for always standing beside me.

I promise to keep loving you,
respecting you,
and making beautiful memories with you.

I Love You Forever ❤️`;

let i = 0;

// ===== Change Scene =====

function showScene(id){

document.querySelectorAll(".scene").forEach(scene=>{

scene.classList.remove("active");

});

document.getElementById(id).classList.add("active");

}

// ===== Start =====

startBtn.addEventListener("click",()=>{

showScene("scene2");

music.play().catch(()=>{});

});

// ===== Open Letter =====

envelope.addEventListener("click",()=>{

showScene("scene3");

setTimeout(()=>{

letterPaper.classList.add("show");

startTyping();

},700);

});

// ===== Typing =====

function startTyping(){

typingText.innerHTML="";

i=0;

typeLetter();

}

function typeLetter(){

if(i>=message.length){

signature.classList.add("show");

continueBtn.classList.add("show");

return;

}

const ch=message.charAt(i);

if(ch=="\n"){

typingText.innerHTML+="<br>";

}else{

typingText.innerHTML+=ch;

}

i++;

let speed=45;

if(ch=="."||ch=="!"||ch=="?"){

speed=650;

}

else if(ch==","){

speed=250;

}

setTimeout(typeLetter,speed);

  }
// ===== Continue Button =====

continueBtn.addEventListener("click",()=>{

showScene("scene4");

setTimeout(()=>{

showScene("scene5");

},7000);

});

// ===== Floating Petals =====

const petals=["🌸","🌷","✨","💖"];

function createPetal(){

const petal=document.createElement("div");

petal.innerHTML=petals[Math.floor(Math.random()*petals.length)];

petal.style.position="fixed";

petal.style.left=Math.random()*100+"vw";

petal.style.top="-40px";

petal.style.fontSize=(16+Math.random()*20)+"px";

petal.style.pointerEvents="none";

petal.style.opacity=".9";

petal.style.zIndex="999";

petal.style.animation=
`fall ${5+Math.random()*5}s linear forwards`;

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},10000);

}

setInterval(createPetal,700);

// ===== Falling Animation =====

const style=document.createElement("style");

style.innerHTML=`

@keyframes fall{

0%{

transform:
translateY(-40px)
rotate(0deg);

opacity:0;

}

10%{

opacity:1;

}

100%{

transform:
translateY(110vh)
rotate(360deg);

opacity:0;

}

}

`;

document.head.appendChild(style);
