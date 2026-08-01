// ======================================
// ELEMENTS
// ======================================

const startBtn = document.getElementById("startBtn");
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const typingText = document.getElementById("typingText");
const signature = document.getElementById("signature");
const continueBtn = document.getElementById("continueBtn");
const music = document.getElementById("music");

// ======================================
// MESSAGE
// ======================================

const message = `My Lovely Gowthami ❤️

Happy Girlfriend's Day, my love.

I may not always find the perfect words,
but every beat of my heart reminds me
how lucky I am to have you.

Your smile brightens my darkest days.

Your laughter is my favourite melody.

Thank you for standing beside me.

I promise to keep loving you,
respecting you,
and creating beautiful memories with you.

I Love You Forever ❤️`;

let index = 0;

// ======================================
// SCENE FUNCTION
// ======================================

function showScene(id){

document.querySelectorAll(".scene").forEach(scene=>{

scene.classList.remove("active");

});

document.getElementById(id).classList.add("active");

}

// ======================================
// START BUTTON
// ======================================

startBtn.addEventListener("click",()=>{

showScene("scene2");

music.play().catch(()=>{});

});

// ======================================
// ENVELOPE
// ======================================

envelope.addEventListener("click",()=>{

showScene("scene3");

setTimeout(()=>{

letter.classList.add("show");

startTyping();

},600);

});

// ======================================
// TYPING
// ======================================

function startTyping(){

typingText.innerHTML="";

signature.classList.remove("show");

continueBtn.classList.remove("show");

index=0;

typeLetter();

}

function typeLetter(){

if(index>=message.length){

signature.classList.add("show");

continueBtn.classList.add("show");

return;

}

const ch=message.charAt(index);

if(ch=="\n"){

typingText.innerHTML+="<br>";

}else{

typingText.innerHTML+=ch;

}

index++;

let speed=65;

if(ch==".") speed=700;
else if(ch==",") speed=250;
else if(ch=="\n") speed=500;

setTimeout(typeLetter,speed);

  }
// ======================================
// CONTINUE BUTTON
// ======================================

continueBtn.addEventListener("click",()=>{

showScene("scene4");

// Stay on the heart scene for 8 seconds

setTimeout(()=>{

showScene("scene5");

},8000);

});

// ======================================
// FALLING PETALS & SPARKLES
// ======================================

const effects=["🌸","🌷","✨","💖"];

function createEffect(){

const e=document.createElement("div");

e.innerHTML=effects[Math.floor(Math.random()*effects.length)];

e.style.position="fixed";

e.style.left=Math.random()*100+"vw";

e.style.top="-50px";

e.style.fontSize=(16+Math.random()*20)+"px";

e.style.pointerEvents="none";

e.style.zIndex="9999";

e.style.opacity=".9";

e.style.animation=`fall ${6+Math.random()*4}s linear forwards`;

document.body.appendChild(e);

setTimeout(()=>{

e.remove();

},10000);

}

setInterval(createEffect,700);

// ======================================
// FALL ANIMATION
// ======================================

const style=document.createElement("style");

style.innerHTML=`

@keyframes fall{

0%{

transform:translateY(-50px) rotate(0deg);

opacity:0;

}

10%{

opacity:1;

}

100%{

transform:translateY(110vh) rotate(360deg);

opacity:0;

}

}

`;

document.head.appendChild(style);

