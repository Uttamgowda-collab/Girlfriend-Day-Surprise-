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
// LOVE LETTER
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
// CHANGE SCENE
// ======================================

function showScene(id){

document.querySelectorAll(".scene").forEach(scene=>{

scene.classList.remove("active");

});

document.getElementById(id).classList.add("active");

}

// ======================================
// START
// ======================================

startBtn.addEventListener("click",()=>{

showScene("scene2");

music.play().catch(()=>{});

});

// ======================================
// OPEN LETTER
// ======================================

envelope.addEventListener("click",()=>{

showScene("scene3");

setTimeout(()=>{

letter.classList.add("show");

startTyping();

},700);

});

// ======================================
// TYPE LETTER
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

if(ch==",") speed=250;

if(ch=="\n") speed=500;

setTimeout(typeLetter,speed);

  }
// ======================================
// CONTINUE BUTTON
// ======================================

continueBtn.addEventListener("click", () => {

    showScene("scene4");

    setTimeout(() => {

        showScene("scene5");

    }, 8000);

});

// ======================================
// FLOATING PETALS & SPARKLES
// ======================================

const effects = ["🌸", "🌷", "✨", "💖"];

function createEffect() {

    const effect = document.createElement("div");

    effect.innerHTML =
        effects[Math.floor(Math.random() * effects.length)];

    effect.style.position = "fixed";
    effect.style.left = Math.random() * 100 + "vw";
    effect.style.top = "-40px";

    effect.style.fontSize =
        (16 + Math.random() * 18) + "px";

    effect.style.pointerEvents = "none";
    effect.style.opacity = ".9";
    effect.style.zIndex = "999";

    effect.style.animation =
        `fall ${6 + Math.random() * 4}s linear forwards`;

    document.body.appendChild(effect);

    setTimeout(() => {

        effect.remove();

    }, 10000);

}

setInterval(createEffect, 700);

// ======================================
// FALL ANIMATION
// ======================================

const style = document.createElement("style");

style.innerHTML = `

@keyframes fall{

0%{

transform:
translateY(-50px)
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

// ======================================
// OPTIONAL:
// Press SPACE to skip to next scene
// (Remove this if you don't want it.)
// ======================================

document.addEventListener("keydown", (e) => {

    if (e.code === "Space") {

        if (document.getElementById("scene4").classList.contains("active")) {

            showScene("scene5");

        }

    }

});
