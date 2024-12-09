let homeEl = document.getElementById("home")
let guestEl = document.getElementById("guest")
let periodEl = document.getElementById("period")
let foulEl = document.getElementById("fouls")
let timerEl = document.getElementById("timer")
let buttonEl = document.querySelectorAll(".btn")
let guestfoulesEl = document.getElementById("guestfouls")
let countHome = 0
let countGuest = 0
let countPeriod = 0
let countFouls = 0
let countGuestFoules = 0


function plusonehome() {

    countHome += 1
    homeEl.textContent = countHome
    console.log(countHome)

    if (countHome >= 10) {
        document.getElementById("winner").textContent = "HOME WINS"
        homeEl.style.border = "1px solid red"
    } else if (countHome <= 10 && countHome > countGuest) {
        document.getElementById("winner").textContent = "Home in the lead"
    } else {
        console.log("tie")
    }
}


function plusoneguest() {
    countGuest += 1
    guestEl.textContent = countGuest

    if (countGuest >= 10) {
        document.getElementById("winner").textContent = "GUEST WINS BOO"
        guestEl.style.border = "1px solid red";
        buttonEl.disablled
    } else if (countGuest <= 10 && countGuest > countHome) {
        document.getElementById("winner").textContent = "Guest in the lead"
    } else {
        console.log("tie")
    }

}

function plustwohome() {
    countHome += 2
    homeEl.textContent = countHome

    if (countHome >= 10) {
        document.getElementById("winner").textContent = "HOME WINS"
        homeEl.style.border = "1px solid red"
    } else if (countHome <= 10 && countHome > countGuest) {
        document.getElementById("winner").textContent = "Home in the lead"
    } else {
        console.log("tie")
    }

}

function plustwoguest() {
    countGuest += 2
    guestEl.textContent = countGuest

    if (countGuest >= 10) {
        document.getElementById("winner").textContent = "GUEST WINS BOO"
        guestEl.style.border = "1px solid red"
    } else if (countGuest <= 10 && countGuest > countHome) {
        document.getElementById("winner").textContent = "Guest in the lead"
    } else {
        console.log("tie")
    }

}

function plusthreehome() {
    countHome += 3
    homeEl.textContent = countHome

    if (countHome >= 10) {
        document.getElementById("winner").textContent = "HOME WINS"
        homeEl.style.border = "1px solid red"
    } else if (countHome <= 10 && countHome > countGuest) {
        document.getElementById("winner").textContent = "Home in the lead"
    } else {
        console.log("tie")
    }

}

function plusthreeguest() {
    countGuest += 3
    guestEl.textContent = countGuest

    if (countGuest >= 10) {
        document.getElementById("winner").textContent = "GUEST WINS BOO"
        guestEl.style.border = "1px solid red"
    } else if (countGuest <= 10 && countGuest > countHome) {
        document.getElementById("winner").textContent = "Guest in the lead"
    } else {
        console.log("tie")
    }

}

function gameperiod() {
    countPeriod += 1
    periodEl.textContent = countPeriod
}

function teamfouls() {
    countFouls += 1
    foulEl.textContent = countFouls
}


function teamfoulsGuest() {
    countGuestFoules += 1
    guestfoulesEl.textContent = countGuestFoules
}


function newgame() {
    window.location.reload();
}

// function gametimer() {
// let times = 0
//      setInterval(()=> {
//         for(let time = 30; time >= times; time-- )
//            if (times <= 30) {
//                 timerEl.textContent = time
//                 console.log(time)
//                 time--
//             } else if (times >= 0) {
//                 timerEl.textContent = "game over"
//             } else {
//                 console.log("error")
//             }
//  },1000);
// }

// gametimer()

function gametimer() {
    let timerName = "Timer"
    let time = 30
    setInterval(() => {
        if (time >= 0) {
            timerEl.textContent = (timerName + " : " + time);
            time--
        } else if (time <= 0) {
            timerEl.textContent = "Game Over"
        }
    }, 1000)
}

gametimer()


