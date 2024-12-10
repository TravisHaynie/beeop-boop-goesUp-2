let timerEl = document.getElementById("timer");
let leaderEl = document.getElementById("leader");
let homeEl = document.getElementById("home");
let guestEl = document.getElementById("guest");
let periodEl = document.getElementById("period");
let guestFoulesEl = document.getElementById("guest-fouls");
let homeFoulsEl = document.getElementById("home-fouls");
let buttonEl = document.getElementById(".btn");
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
    } else if(countHome <= 10 && countHome > countGuest){
        leaderEl.textContent = "Home is in the lead"
    } else if(countGuest === countHome){
        leaderEl.textContent = "TIE"
    } else (
        leaderEl.textContent = "blah"
    )
}
 
function homeTwoCounter() {
    countHome += 2
    homeEl.textContent = countHome

    
    if(countHome >= 10) {
        homeEl.style.border = "2px solid red"
        leaderEl.textContent = "HOME WINS"
    } else if(countHome <= 10 && countHome > countGuest){
        leaderEl.textContent = "Home is in the lead"
    } else if(countGuest === countHome){
        leaderEl.textContent = "TIE"
    } else (
        leaderEl.textContent = "blah"
    )
}

function homeThreeCounter() {
    countHome += 3
    homeEl.textContent = countHome

    
    if(countHome >= 10) {
        homeEl.style.border = "2px solid red"
        leaderEl.textContent = "HOME WINS"
    } else if(countHome <= 10 && countHome > countGuest){
        leaderEl.textContent = "Home is in the lead"
    } else if(countGuest === countHome){
        leaderEl.textContent = "TIE"
    } else (
        leaderEl.textContent = "blah"
    )
}

function guestOneCounter() {
    countGuest += 1
    guestEl.textContent = countGuest

    
    if(countGuest >= 10) {
        guestEl.style.border = "2px solid red"
        leaderEl.textContent = "GUEST WINS BOO"
    } else if(countGuest <= 10 && countGuest > countHome){
        leaderEl.textContent = "Guest is in the lead"
    } else if(countGuest === countHome){
        leaderEl.textContent = "TIE"
    } else (
        leaderEl.textContent = "blah"
    )
}
 
function guestTwoCounter() {
    countGuest += 2
    guestEl.textContent = countGuest

    
    if(countGuest >= 10) {
        guestEl.style.border = "2px solid red"
        leaderEl.textContent = "GUEST WINS BOO"
    } else if(countGuest <= 10 && countGuest > countHome){
        leaderEl.textContent = "Guest is in the lead"
    } else if(countGuest === countHome){
        leaderEl.textContent = "TIE"
    } else (
        leaderEl.textContent = "blah"
    )
}

function guestThreeCounter() {
    countGuest += 3
    guestEl.textContent = countGuest

    
    if(countGuest >= 10) {
        guestEl.style.border = "2px solid red"
        leaderEl.textContent = "GUEST WINS BOO"
    } else if(countGuest <= 10 && countGuest > countHome){
        leaderEl.textContent = "Guest is in the lead"
    } else if(countGuest === countHome){
        leaderEl.textContent = "TIE"
    } else (
        leaderEl.textContent = "blah"
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

function gameLeader() {

}

function newGame() {

}

function gameTimer() {
    let timerName = "Timer:"
    let time = 30;
    setInterval(()=> {
       
        if(time >= 0) {
            time -- 
            timerEl.textContent = timerName + " " + time
            console.log(time)
        } else if(time <= 0) {
            console.log(time)
            timerEl.textContent = "Game Over"
        }
    },1000)
}

gameTimer()