let timerEl = document.getElementById("timer");
let leaderEl = document.getElementById("leader");
let homeEl = document.getElementById("home");
let guestEl = document.getElementById("guest");
let periodEl = document.getElementById("period");
let guestFoulesEl = document.getElementById("guest-fouls");
let homeFoulsEl = document.getElementById("home-fouls");
let buttonEl = document.querySelectorAll(".btn");
let startButtonEl = document.getElementById("startgame")
console.log(buttonEl)
let countHome = 0;
let countGuest = 0;
let countHfouls = 0;
let countGfouls = 0
let countPeriod= 0;


function homeOneCounter() {
    countHome += 1
    homeEl.textContent = countHome
    

    if(countHome >= 10) {
        homeEl.style.border = "2px solid red"
        leaderEl.textContent = "HOME WINS"
        // when using setAttribute it only seem to work on the first function that had to attached to it. Using querSelectorAll caused an error in the console saying setAttribute is not a function. Could not get past this issue.
        buttonEl.forEach(button => {
            button.disabled = true;
          });
        console.log(buttonEl)
    } else if(countHome <= 10 && countHome > countGuest){
        leaderEl.textContent = "Home is in the lead"
    } else if(countGuest === countHome){
        leaderEl.textContent = "TIE"
    } else (
          leaderEl.textContent = "Guest is in the lead"
    )
}


 
function homeTwoCounter() {
    countHome += 2
    homeEl.textContent = countHome

    
    if(countHome >= 10) {
        homeEl.style.border = "2px solid red"
        leaderEl.textContent = "HOME WINS"
        buttonEl.forEach(button => {
            button.disabled = true;
          });
        console.log(buttonEl)
    } else if(countHome <= 10 && countHome > countGuest){
        leaderEl.textContent = "Home is in the lead"
    } else if(countGuest === countHome){
        leaderEl.textContent = "TIE"
    } else (
         leaderEl.textContent = "Guest is in the lead"
    )
}



function homeThreeCounter() {
    countHome += 3
    homeEl.textContent = countHome

    
    if(countHome >= 10) {
        homeEl.style.border = "2px solid red"
        leaderEl.textContent = "HOME WINS"
        buttonEl.forEach(button => {
            button.disabled = true;
          });
        console.log(buttonEl)
    } else if(countHome <= 10 && countHome > countGuest){
        leaderEl.textContent = "Home is in the lead"
    } else if(countGuest === countHome){
        leaderEl.textContent = "TIE"
    } else (
        leaderEl.textContent = "Guest is in the lead"
    )
}

function guestOneCounter() {
    countGuest += 1
    guestEl.textContent = countGuest

    
    if(countGuest >= 10) {
        guestEl.style.border = "2px solid red"
        leaderEl.textContent = "GUEST WINS BOO"
        buttonEl.forEach(button => {
            button.disabled = true;
          });
        console.log(buttonEl)
    } else if(countGuest <= 10 && countGuest > countHome){
        leaderEl.textContent = "Guest is in the lead"
    } else if(countGuest === countHome){
        leaderEl.textContent = "TIE"
    } else (
         leaderEl.textContent = "Home is in the lead"
    )
}
 
function guestTwoCounter() {
    countGuest += 2
    guestEl.textContent = countGuest

    
    if(countGuest >= 10) {
        guestEl.style.border = "2px solid red"
        leaderEl.textContent = "GUEST WINS BOO"
        buttonEl.forEach(button => {
            button.disabled = true;
          });
        console.log(buttonEl)
    } else if(countGuest <= 10 && countGuest > countHome){
        leaderEl.textContent = "Guest is in the lead"
    } else if(countGuest === countHome){
        leaderEl.textContent = "TIE"
    } else (
      leaderEl.textContent = "Home is in the lead"
    )
}

function guestThreeCounter() {
    countGuest += 3
    guestEl.textContent = countGuest

    
    if(countGuest >= 10) {
        guestEl.style.border = "2px solid red"
        leaderEl.textContent = "GUEST WINS BOO"
        buttonEl.forEach(button => {
            button.disabled = true;
          });
        console.log(buttonEl)
    } else if(countGuest <= 10 && countGuest > countHome){
        leaderEl.textContent = "Guest is in the lead"
    } else if(countGuest === countHome){
        leaderEl.textContent = "TIE"
    } else (
          leaderEl.textContent = "Home is in the lead"
    )
}

function periodCounter() {
    countPeriod += 1
    periodEl.textContent = countPeriod
}

function homeFouls() {
    countHfouls += 1
    homeFoulsEl.textContent = countHfouls
}

function guestFouls() {
    countGfouls += 1
    guestFoulesEl.textContent = countGfouls

}

function startGame() {
    let gameTimeEl = gameTimer();

    if(startGame) {
        gameTimeEl
        startButtonEl.setAttribute('disabled',"")
    } else {
       
    }
    
}

function newGame() {
 let newGameGenerator = [guestOneCounter, guestTwoCounter, guestThreeCounter, homeOneCounter, homeTwoCounter, homeThreeCounter]

 for (let i = 0; i < newGameGenerator.length; i++) {
    console.log(newGameGenerator)
        if(newGameGenerator) {
         homeEl.textContent = 0
         guestEl.textContent = 0
         periodEl.textContent = 0
         homeFoulsEl.textContent = 0
         guestFoulesEl.textContent = 0
         gameTimer = location.reload() // how do you bottom out a timer by only using the state?
         buttonEl.forEach(button => {
         button.disabled = false;
          });
        }
    
 }
}

const gameTimer = function() {
    let timerName = "Timer:"
    let time = 30;
    setInterval(()=> {
       
        if(time >= 0) {
            time -- 
            timerEl.textContent = timerName + " " + time
            console.log(time)
        }  else if(time <= 0) {
            console.log(time)
            timerEl.textContent = "Game Over"
        }
    },1000)
}

