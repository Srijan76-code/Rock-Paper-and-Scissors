

let house_img = document.querySelector(".house_img");
let you_img = document.querySelector(".you_img");
let choice_img=document.querySelectorAll(".choice_img");
const paper = document.querySelector("#paper");
const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
let message=document.querySelector(".message");
let you_value=document.querySelector("#you");
let house_value=document.querySelector("#house");

let reset_btn=document.querySelector(".reset_btn");
let continue_btn=document.querySelector(".continue_btn");

let select_f=document.querySelector(".select_f")

let tap_sound=new Audio("./audio/tap-notification-180637.mp3");
tap_sound.playbackRate = 3;
let victory_sound=new Audio("./audio/victorymale-version-230553.mp3");
victory_sound.playbackRate = 2;
let gameover_sound=new Audio("./audio/game-over-female-gfx-sounds-1-00-01.mp3");
gameover_sound.playbackRate=2;
let Match_tied_sound=new Audio("./audio/Match_Tied.mp3")
Match_tied_sound.playbackRate=1.5;
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function change_img(rand_num){
    if (rand_num==1){
        house_img.src="./images/Paper.jpeg";

    }
    if (rand_num==2){
        house_img.src="./images/Rock.jpeg";

    }
    if (rand_num==3){
        house_img.src="./images/Scissors.jpeg";
    }
}

function youBoxShadow() {
    you_img.style.boxShadow = "10px 10px 40px 10px #1e42c5"; 

    setTimeout(() => {
        you_img.style.boxShadow = "none"; 
    }, 500);
}
function houseBoxShadow() {
    house_img.style.boxShadow = "10px 10px 40px 10px #1e42c5"; 

    setTimeout(() => {
        house_img.style.boxShadow = "none"; 
    }, 500);
}


function updateResults(rand_num,value){
    if ( value==rand_num) {
        Match_tied_sound.play();
        message.innerHTML="Match Tied";
    }
    if (value==1 && rand_num==2){
        
        victory_sound.play();
        message.innerHTML="You Won";
        youBoxShadow();
        

        you_value.innerHTML=Number(you_value.innerHTML) + 1;
    }
    if (value==1 && rand_num==3){
        gameover_sound.play();
        message.innerHTML="House Won";
        houseBoxShadow();
        house_value.innerHTML=Number(house_value.innerHTML) + 1;

    }
    if (value==2 && rand_num==1){
        gameover_sound.play();
        message.innerHTML="House Won";
        houseBoxShadow();
        house_value.innerHTML=Number(house_value.innerHTML) + 1;

    }
    if (value==2 && rand_num==3){
        victory_sound.play();
        message.innerHTML="You Won";
        youBoxShadow();

        you_img.style.boxShadow="10px 10px 40px 10px #1e42c5";
        
        you_value.innerHTML=Number(you_value.innerHTML) + 1;
    }
    if (value==3 && rand_num==2){
        gameover_sound.play();
        message.innerHTML="House Won";
        houseBoxShadow();
        house_value.innerHTML=Number(house_value.innerHTML) + 1;
    }
    if (value==3 && rand_num==1){
        victory_sound.play();
        message.innerHTML="You Won";
        youBoxShadow();

        you_img.style.boxShadow="10px 10px 40px 10px #1e42c5";

        you_value.innerHTML=Number(you_value.innerHTML) + 1;
    }

}


paper.addEventListener("click", () => {
    paper.style.border="2px solid white";
    tap_sound.play();
   
    select_f.style.display="flex";
    you_img.src="./images/Paper.jpeg";
    const rand_num=getRandomNumber(1, 3);
    change_img(rand_num);
    updateResults(rand_num,1);
    setTimeout(()=>{
        paper.style.border="none";
    },800);

}
)
rock.addEventListener("click", () => {
    rock.style.border="2px solid white";
    tap_sound.play();
    select_f.style.display="flex";
    you_img.src="./images/Rock.jpeg";
    const rand_num=getRandomNumber(1, 3);
    change_img(rand_num);
    updateResults(rand_num,1);
    setTimeout(()=>{
        rock.style.border="none";
    },800);
    
}
)
scissors.addEventListener("click", () => {
    scissors.style.border="2px solid white";

    tap_sound.play();
    select_f.style.display="flex";
    you_img.src="./images/Scissors.jpeg";
    const rand_num=getRandomNumber(1, 3);
    change_img(rand_num);
    updateResults(rand_num,1);
    setTimeout(()=>{
        scissors.style.border="none";
    },800);
}
)

reset_btn.addEventListener("click",()=>{
    reset_btn.classList.add('clicked');
    setTimeout(() => {
        reset_btn.classList.remove('clicked');
    }, 200);
    tap_sound.play();
    select_f.style.display="none";
    you_value.innerHTML=0;
    house_value.innerHTML=0;

})

